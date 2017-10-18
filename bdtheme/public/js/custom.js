$(document).ready(function() {
	$('header').prepend(frappe.render_template("logo"));
	//$('header .navbar .container').prepend(frappe.render_template("sidebar-toggle"));
	// $('header .navbar .container').remove(frappe.render_template("#navbar-breadcrumbs"));
	$('.main-section').append(frappe.render_template("main-sidebar"));
	$('.layout-side-section').prepend(frappe.render_template("treeview"));

	$('header').addClass('main-header');
	$('header .navbar').removeClass('navbar-fixed-top');
	// $('#navbar-breadcrumbs').addClass('hidden-item');
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