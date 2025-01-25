import frappe
import requests
from frappe.model.document import Document
from datetime import datetime

class Book(Document):
    def before_save(self):
        if self.publication_date:
            self.year1 = str(self.publication_date).split("-")[0]
    

@frappe.whitelist()
def import_books_via_api(title=None, authors=None, isbn=None, publisher=None, number_of_books=20, quantity=1):
    imported_books = 0
    page = 1

    while imported_books < int(number_of_books):
        params = {
            "title": title,
            "authors": authors,
            "isbn": isbn,
            "publisher": publisher,
            "number_of_books": number_of_books,
            "quantity": quantity,
            "page": page
        }

        response = requests.get("https://frappe.io/api/method/frappe-library", params=params)
        data = response.json().get("message", [])

        if not data:
            break  

        for book in data:
            if imported_books >= int(number_of_books):
                break  

            if not frappe.db.exists("Book", {"isbn": book.get("isbn")}):
                publication_date = book.get("publication_date")
                year1 = None
                if publication_date:
                    try:
                        publication_date = datetime.strptime(publication_date, "%m/%d/%Y").strftime("%Y-%m-%d")
                        year1 = publication_date.split("-")[0]
                    except ValueError:
                        publication_date = None  

                frappe.get_doc({
                    "doctype": "Book",
                    "title": book.get("title"),
                    "author": book.get("authors"),
                    "isbn": book.get("isbn"),
                    "publisher": book.get("publisher"),
                    "publication_date": publication_date,
                    "year1": year1,
                    "stock": int(quantity),  
                    "available_quantity": int(quantity),  
                    "rented_count": 0,  
                    "average_rating": book.get("average_rating"),
                    "rent_fee": 0  
                }).insert()
                imported_books += 1

        page += 1

    return imported_books