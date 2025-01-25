// Copyright (c) 2025, Roaa Mamdouh and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Book", {
// 	refresh(frm) {

// 	},
// });
frappe.ui.form.on('Book', {
    publication_date: function(frm) {
        if (frm.doc.publication_date) {
            frm.set_value('year1', frm.doc.publication_date.split('-')[0]);
        }
    }
});
