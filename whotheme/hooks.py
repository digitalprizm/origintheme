# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "whotheme"
app_title = "Who Theme"
app_publisher = "Who Agency"
app_description = "Side menu navigation theme"
app_icon = "fa-question"
app_color = "aqua"
app_email = "josh@whoagency.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
app_include_css = [
    "/assets/whotheme/css/whotheme.css",
    "/assets/whotheme/css/skin-blue.css",
    "/assets/whotheme/css/custom.css",
    "/assets/whotheme/css/temp.css",
]
app_include_js = [
    "/assets/whotheme/js/whotheme.js",
    "/assets/whotheme/js/custom.js",
    "/assets/js/whotheme-template.min.js",
]

# include js, css files in header of web template
web_include_css = "/assets/whotheme/css/whotheme-web.css"
# web_include_js = "/assets/whotheme/js/whotheme.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "whotheme.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "whotheme.install.before_install"
# after_install = "whotheme.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "whotheme.notifications.get_notification_config"

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
# 		"whotheme.tasks.all"
# 	],
# 	"daily": [
# 		"whotheme.tasks.daily"
# 	],
# 	"hourly": [
# 		"whotheme.tasks.hourly"
# 	],
# 	"weekly": [
# 		"whotheme.tasks.weekly"
# 	]
# 	"monthly": [
# 		"whotheme.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "whotheme.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "whotheme.event.get_events"
# }

