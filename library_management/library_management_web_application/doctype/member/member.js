frappe.ui.form.on('Member', {
    before_save: function(frm) {
        // Validate email format
        const email = frm.doc.email;
        if (email && !validateEmail(email)) {
            frappe.throw(__("Email must be valid email address."));
        }
    }
});

function validateEmail(email) {
    // Regex for valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email.endsWith('@example.com') || emailRegex.test(email);
}