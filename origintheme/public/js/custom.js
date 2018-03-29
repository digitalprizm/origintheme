$(document).ready(function() {
	$('header').prepend(frappe.render_template("logo"));
	$('.navbar-desk').prepend(frappe.render_template("company-name"));
	$('.main-section').append(frappe.render_template("main-sidebar"));
	$('head').append(frappe.render_template("material-icons"));
	$('head').append(frappe.render_template("poppins"));

	$('header').addClass('main-header');
	$('.dropdown-help').addClass('hidden');
	$('#toolbar-user [href*="/index"]').addClass('hidden');
	$('#toolbar-user [href*="#background_jobs"]').addClass('hidden');
	// $('.dropdown-navbar-new-comments').addClass('hidden');
	$('header .navbar').removeClass('navbar-fixed-top');
	
	// $('#navbar-breadcrumbs').addClass('hidden');
	$('.navbar-home').addClass('hidden');
	$('body').addClass('skin-origin sidebar-mini sidebar-collapse');	
	$('#body_div').addClass('content-wrapper');
	
	origintheme.set_user_background();
	
});

// $('.page-container').on('load', function() {
// 	$('.page-container:visible').children('.page-head:visible').prependTo('.layout-main-section:visible');
// 	$('.set-filters .btn').removeClass('text-muted');
// });

// document.body.addEventListener('DOMSubtreeModified', function () {
// 	if ($(!'.page-head .page-head-moved')) {
// 		$('div.page-container > .page-head').prependTo('.layout-main-section');
// 	}
// }, false);
// 		$('.page-container:visible').children('.page-head:visible').prependTo('.layout-main-section:visible');
// 		$('.set-filters .btn').removeClass('text-muted');
// 		console.log('hi')
// 	}
//    }, false);
//    document.body.addEventListener('DOMSubtreeModified', function () {
// 	if($('.page-container > .page-head')) {
// 		$('.page-container:visible').children('.page-head:visible').prependTo('.layout-main-section:visible');
// 		$('.set-filters .btn').removeClass('text-muted');
// 		console.log('hi')
// 	}
//    }, false);
//    if (element2.parentNode == element1)
frappe.provide("origintheme");

// add toolbar icon
$(document).bind('toolbar_setup', function() {
	frappe.app.name = "origintheme";
	$('.navbar-home').html(frappe._('Home'));

});

origintheme.set_user_background = function(src, selector, style){
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

// origintheme.desk_2 = function(){
// 	if(!selector) selector = "#page-desktop";
// 	if(!style) style = "Fill Screen";
// 	if(src) {
// 		if (window.cordova && src.indexOf("http") === -1) {
// 			src = frappe.base_url + src;
// 		}
// 		var background = repl('background: url("%(src)s") center center;', {src: src});
// 	} else {
// 		var background = "background-color: #FFFFFF;";
// 	}

// 	frappe.dom.set_style(repl('%(selector)s { \
// 		%(background)s \
// 		%(style)s \
// 	}', {
// 		selector:selector,
// 		background:background,
// 		style: ""
// 	}));
// }

frappe.templates["logo"] = '<a href="/desk#List/Customer/List" class="logo">'
+     ' <span class="logo-mini"><b>or</b></span>'
+'      <span class="logo-lg"><b>Origin Aquatech</b></span>'
+'    </a>';

frappe.templates["sidebar-toggle"] = '<a href="#" class="sidebar-toggle hidden-item" data-toggle="offcanvas" role="button">'
+	        '<span class="sr-only">Toggle navigation</span>'
+	    '</a>';

frappe.templates["company-name"] = '<span class="navbar-company">Evaqua Farms</span>';

frappe.templates["material-icons"] = '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">';
frappe.templates["poppins"] = '<link href="https://fonts.googleapis.com/css?family=Poppins:300,400" rel="stylesheet">';