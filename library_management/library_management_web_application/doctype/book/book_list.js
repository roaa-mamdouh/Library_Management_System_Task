frappe.listview_settings['Book'] = {
    onload: function(listview) {
        // Add button
        listview.page.add_inner_button(__('Import Via API'), function() {
            frappe.prompt([
                {
                    fieldname: 'title',
                    fieldtype: 'Data',
                    label: 'Title',
                    description: 'Enter a title to search for (e.g., Harry Potter)'
                },
                {
                    fieldname: 'authors',
                    fieldtype: 'Data',
                    label: 'Authors',
                    description: 'Enter authors to filter by (optional)'
                },
                {
                    fieldname: 'isbn',
                    fieldtype: 'Data',
                    label: 'ISBN',
                    description: 'Enter ISBN to filter by (optional)'
                },
                {
                    fieldname: 'publisher',
                    fieldtype: 'Data',
                    label: 'Publisher',
                    description: 'Enter publisher to filter by (optional)'
                },
                {
                    fieldname: 'number_of_books',
                    fieldtype: 'Int',
                    label: 'Number of Books to Import',
                    reqd: 1,
                    default: 20
                },
                {
                    fieldname: 'quantity',
                    fieldtype: 'Int',
                    label: 'Quantity per Book',
                    reqd: 1,
                    default: 1,
                    description: 'Enter the quantity for each book'
                }
            ], function(values) {
                frappe.call({
                    method: 'library_management.library_management_web_application.doctype.book.book.import_books_via_api',
                    args: {
                        title: values.title,
                        authors: values.authors,
                        isbn: values.isbn,
                        publisher: values.publisher,
                        number_of_books: values.number_of_books,
                        quantity: values.quantity
                    },
                    callback: function(response) {
                        if (response.message) {
                            frappe.msgprint(__('Imported {0} books successfully.', [response.message]));
                            listview.refresh();
                        }
                    }
                });
            }, __('Import Books'), __('Import'));
        });

        listview.page.add_inner_button(__('Filter High Ratings'), function() {
            listview.filter_area.add([[listview.doctype, 'average_rating', '>=', '4.5']]);
            listview.refresh();
        });
    },
    get_indicator: function(doc) {
        if (doc.stock > 0 && doc.available_quantity > 0) {
            return [__('Available'), 'green', 'stock,>,0,&&,available_quantity,>,0'];
        }
        else if (doc.stock > 0 && doc.available_quantity <= 0) {
            return [__('All Rented'), 'orange', 'available_quantity,==,0,&&,stock,>,0'];
        }
        else {
            return [__('Out of Stock'), 'red', 'stock,=,0'];
        }
    },
    add_fields: ['stock', 'available_quantity', 'rented_count', 'average_rating'],
    formatters: {
        average_rating: function(value) {
            return `<span class="indicator-pill" style="background-color: ${value >= 4.5 ? 'green' : 'red'};">${value}</span>`;
        },
        rented_count: function(value) {
            return `<span class="indicator-pill">${value}</span>`;
        }
    }
};