$(document).ready(function() {
	$('header').prepend(frappe.render_template("logo"));
	$('.navbar-desk').prepend(frappe.render_template("company-name"));
	//$('header .navbar .container').prepend(frappe.render_template("sidebar-toggle"));
	// $('header .navbar .container').remove(frappe.render_template("#navbar-breadcrumbs"));
	$('.main-section').append(frappe.render_template("stacey-sidebar"));
	// $('.page-container').remove('.page-head');
	// $('.layout-main-section').prepend(frappe.onload_post_render('.page-head'));

	$('header').addClass('main-header');
	$('.dropdown-help').addClass('hidden');
	$('#toolbar-user a:contains(/index)').addClass('hidden');
	$('#toolbar-user a:contains(#background_jobs)').addClass('hidden');
	$('header .navbar').removeClass('navbar-fixed-top');
	$('.list-filters .btn').removeClass('text-muted');
	$('#navbar-breadcrumbs').addClass('hidden');
	$('.navbar-home').addClass('hidden-lg');
	$('body').addClass('skin-origin sidebar-mini sidebar-collapse');	
	$('#body_div').addClass('content-wrapper');	
	
	bdtheme.set_user_background();
	
});

frappe.provide("bdtheme");

// add toolbar icon
$(document).bind('toolbar_setup', function() {
	frappe.app.name = "bdoop Erp";
	$('.navbar-home').html(frappe._('Home'));

});

bdtheme.set_user_background = function(src, selector, style){
	if(!selector) selector = "#page-desktop";
	if(!style) style = "Fill Screen";
	if(src) {
		if (window.cordova && src.indexOf("http") === -1) {
			src = frappe.base_url + src;
		}
		var background = repl('background: url("%(src)s") center center;', {src: src});
	} else {
		var background = "background-color: #FFFFFF;";
	}

	frappe.dom.set_style(repl('%(selector)s { \
		%(background)s \
		%(style)s \
	}', {
		selector:selector,
		background:background,
		style: ""
	}));
}

frappe.templates["logo"] = '<a href="/desk" class="logo">'
+     ' <span class="logo-mini"><b>bd</b></span>'
+'      <span class="logo-lg"><b>bdoop</b></span>'
+'    </a>';

frappe.templates["sidebar-toggle"] = '<a href="#" class="sidebar-toggle hidden-item" data-toggle="offcanvas" role="button">'
+	        '<span class="sr-only">Toggle navigation</span>'
+	    '</a>';

frappe.templates["company-name"] = '<span style="color: #fff; font-size: 20px; font-weight: 300;">Evaqua Farms</span>';