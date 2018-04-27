from __future__ import unicode_literals

import frappe
import frappe.defaults

import pprint
pp = pprint.PrettyPrinter(indent=4)

def on_session_creation(login_manager):
	info = frappe.db.get_value("User", frappe.local.session_obj.user,
			["home_page_link"], as_dict=1)

	frappe.local.response["home_page"] = info.home_page_link or "/desk"

@frappe.whitelist()
def get_sidebar_template():
	cur_user = frappe.get_doc('User',frappe.session.user)
	return cur_user.sidebar_template