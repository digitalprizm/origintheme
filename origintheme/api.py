from __future__ import unicode_literals

import frappe
import frappe.defaults

def on_session_creation(login_manager):
	info = frappe.db.get_value("User", frappe.local.session_obj.user,
			["home_page_link"], as_dict=1)

	frappe.local.response["home_page"] = info.home_page_link or "/desk"
