// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt

frappe.listview_settings["User"] = {
	
	onload: function(listview) {	
		
		listview.page.add_inner_button(__("Role "), function () {
			frappe.set_route("List", "role");
		},__("Roles & Permissions"));
		listview.page.add_inner_button(__("Role Profile"), function () {
			frappe.set_route("List", "role profile");
		},__("Roles & Permissions"));
		listview.page.add_inner_button(__("Activity Log"), function () {
			frappe.set_route("List", "activity log");
		},__("Roles & Permissions"));
		listview.page.add_inner_button(__("Access Log"), function () {
			frappe.set_route("List", "access log");
		},__("Roles & Permissions"));
		listview.page.add_inner_button(__("Role Permission Manager"), function () {
				frappe.set_route("List", "permission manager");
		},__("Roles & Permissions"));
		listview.page.add_inner_button(__("User Permissions"), function () {
			frappe.set_route("List", "user permission");
		},__("Roles & Permissions"));
		listview.page.add_inner_button(__("Role Permission for Page and Report"), function () {
			frappe.set_route("List", "role-permission-for-page-and-report");
		},__("Roles & Permissions"));
		listview.page.add_inner_button(__("Permitted Document for user"), function () {
			frappe.set_route("query-report", "Permitted Documents For User");
		},__("Roles & Permissions"));
		
		
			
	
		/**
		listview.page.add_inner_button(__("Document share report"), function () {
			frappe.set_route("docshare", "Document Share Report");
		},__("Roles & Permissions"));
		**/
		
		/**
		
		button_name = ['Role','Role Profile','Activity Log','Access Log','Role Permission Manager'];
		
		route_value = ['role','role profile','activity log','access log','permission manager'];
		
		
		
		for (let i = 0; i <= 4; i++) 
			{ **/
				/**if frappe.has_permission(button_name[i], "read", user=frappe.session.user)
				{ **/
				//	listview.page.add_inner_button(__(button_name[i]), function () 
				//	{
				//	frappe.set_route("List", route_value[i]);
				//	},__("Views"));
				/**} **/
					listview.page.add_inner_button(('Goto User page'), ()=> {
					frappe.set_route("List", "user settings");
		      
		      });
		
			//} 
		//val = frappe.has_permission("User", "read", user='user@321.com');
		
		/** listview.page.add_inner_button("Roles", function() {
            ButtonFunction(listview);
        });
        	 listview.page.add_inner_button("Perissions", function() {
            ButtonFunction(listview);
        });
        	 listview.page.add_inner_button("Role Permissions", function() {
            ButtonFunction(listview);
        }); **/
	},
	refresh:function(listview)
	{
	//frappe.msgprint("User");	
	}
	
	
};


