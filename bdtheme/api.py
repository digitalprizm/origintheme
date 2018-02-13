from __future__ import unicode_literals

import frappe
import frappe.defaults

def on_session_creation(login_manager):
	frappe.local.response["home_page"] = "/desk#Form/User/Administrator"
