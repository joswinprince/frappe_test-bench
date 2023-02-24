frappe.pages['user-settings'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'user settings',
		single_column: true
	});
	
	
	page.set_title('user settings')
	page.set_title_sub('Settings')
	page.set_indicator('Pending', 'orange')
	page.add_inner_button(('Goto User List'), ()=> {
	frappe.set_route("List", "user");
	

   	});
   	let field = page.add_field({
	    label: 'Status',
	    fieldtype: 'Select',
	    fieldname: 'status',
	    options: [
		'Open',
		'Closed',
		'Cancelled'
	    ],
	    change() {
		console.log(field.get_value());
	    }
	});
   	
	//var field1 = this.add_field({ label: "my label", fieldtype: "Data" });
	
}
