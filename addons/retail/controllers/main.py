from odoo import http
from odoo.http import request

class RetailDashboardController(http.Controller):

    @http.route('/retail/dashboard', type='http', auth='user', website=True)
    def dashboard_page(self, **kw):
        return request.render('retail.chart_dashboard_template', {})
