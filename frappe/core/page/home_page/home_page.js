frappe.pages['home-page'].on_page_load = function(wrapper) {
	var page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'None',
		single_column: true
	});
	$(frappe.render_template("hexagon", {})).appendTo(page.main);
	//wrapper.permission_engine = new frappe.PermissionEngine(wrapper);

	

}
