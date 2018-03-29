# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "origintheme"
app_title = "origin theme"
app_publisher = "Who Agency"
app_description = "ERPnext Theme"
app_icon = "fa fa-paint-brush"
app_color = "gold"
app_email = "josh@whoagency.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_css = [
    "/assets/origintheme/css/origintheme.css",
    "/assets/origintheme/css/skin-origin.css",
    "/assets/origintheme/css/custom.css",
    "/assets/origintheme/css/temp.css",
]
app_include_js = [
    "/assets/origintheme/js/origintheme.js",
    "/assets/origintheme/js/custom.js",
    "/assets/js/origintheme-template.min.js",
]

# include js, css files in header of web template
web_include_css = "/assets/origintheme/css/origintheme-web.css"
# web_include_js = "/assets/origintheme/js/origintheme.js"

# login
on_session_creation = "origintheme.api.on_session_creation"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}

# Home Pages
# ----------
website_context = {
	"favicon": 	"/assets/origintheme/images/favicon.png",
	"splash_image": "/assets/origintheme/images/icon.svg"
}
# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "origintheme.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "origintheme.install.before_install"
# after_install = "origintheme.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "origintheme.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# 	"*": {
# 		"on_update": "method",
# 		"on_cancel": "method",
# 		"on_trash": "method"
#	}
# }

# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"origintheme.tasks.all"
# 	],
# 	"daily": [
# 		"origintheme.tasks.daily"
# 	],
# 	"hourly": [
# 		"origintheme.tasks.hourly"
# 	],
# 	"weekly": [
# 		"origintheme.tasks.weekly"
# 	]
# 	"monthly": [
# 		"origintheme.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "origintheme.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "origintheme.event.get_events"
# }

