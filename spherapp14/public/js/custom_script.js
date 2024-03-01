$(document).on('app_ready', function() {
    if (document.referrer.endsWith("/")) {
        // app ready after login, let's rumble
        console.log("let's set the session defaults");
        // get persistent session settings
        
        frappe.call({
            'method': "frappe.client.get_list",
            'args': {
                'doctype': "Employee",
                'filters': [[ "Employee","user_id","=",frappe.session.user ]],
                'fields': ["company"]
            },
            'callback': function(response) {
              //console.log(response.message.length)
                if (response.message > "0") {
                    response.message.forEach(function (setting) {
                        console.log(setting.company);
                        // var key = setting.Key1.toLowerCase().replaceAll(" ", "_");
                        frappe.defaults.set_user_default_local("company", setting.company);
                    });
                }
                else{ // fallback to popup the setup_session_defaults
                    frappe.ui.toolbar.setup_session_defaults();
                }
            }
        });
    }
});