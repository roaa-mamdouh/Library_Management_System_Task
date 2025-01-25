frappe.listview_settings['Transaction'] = {
    onload: function(listview) {
        listview.page.add_inner_button(__('Filter Returned'), function() {

            listview.filter_area.add([[listview.doctype, 'status', '=', 'Returned']]);
            listview.refresh();
        });

        listview.page.add_inner_button(__('Filter Issued'), function() {
            listview.filter_area.add([[listview.doctype, 'status', '=', 'Issued']]);
            listview.refresh();
        });
    },
    get_indicator: function(doc) {
        console.log(doc.docstatus, doc.status, doc.workflow_state);
        if (doc.docstatus == 1) {
            return [__("Issued"), "green", "status,=,Issued"];
        } else if (doc.docstatus == 2) {
            return [__("Returned"), "blue", "status,=,Returned"];
        }
    }
};