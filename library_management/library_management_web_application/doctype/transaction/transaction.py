
# Copyright (c) 2025, Roaa Mamdouh and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.utils import getdate, nowdate, date_diff


class Transaction(Document):

    def before_save(self):
        if not self.issue_date:
            self.issue_date = nowdate()
        if self.status == "Cancelled" or self.docstatus == "Cancelled":
            frappe.frappe.msgprint('Message: Transaction is cancelled.')
            

    def on_submit(self):
        book = frappe.get_doc("Book", self.book)
        if book.available_quantity < 1:
            frappe.throw("Book is out of stock.")

        member = frappe.get_doc("Member", self.member)
        if member.outstanding_debt > 500:
            frappe.throw("Member’s debt exceeds ₹500. Clear dues to issue books.")

        book.available_quantity -= 1
        book.rented_count += 1
        book.save()
        self.status = "Issued"
        self.save()
    
    def on_cancel(self):

        if not self.return_date:
            self.return_date = nowdate()
        
        if not self.issue_date:
            frappe.throw("Issue date is not set.")
        
        issue_date = getdate(self.issue_date)
        return_date = getdate(self.return_date)
        days = date_diff(return_date, issue_date)
        
        book = frappe.get_doc("Book", self.book)
        self.total_fee = days * book.rent_fee
        
        # Update member debt and book stock
        member = frappe.get_doc("Member", self.member)
        member.outstanding_debt += self.total_fee
        
        book.available_quantity += 1
        book.rented_count -= 1

        book.save()
        member.save()
        self.db_set('status', 'Returned')
        self.db_set('total_fee', self.total_fee)
        frappe.msgprint(f"Total Fees: ₹{self.total_fee}.")
