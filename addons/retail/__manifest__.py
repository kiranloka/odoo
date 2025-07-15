{
    'name': 'Retail',
    'version': '1.0',
    'category': 'Tools',
    'license': 'LGPL-3',
    'summary': 'Petasmind Dashboard',
    'depends': ['base', 'web'],
    'data': [
        'views/chart_dashboard_template.xml',
        'views/retail_actions.xml',
        'views/retail_menu.xml',
        'static/src/xml/chart_templates.xml'
    ],
    'assets': {
      'web.assets_frontend': [
            'https://cdn.jsdelivr.net/npm/chart.js',  # Correct CDN
            'retail/static/src/js/components/ChartCard.js',
            'retail/static/src/js/chart_dashboard.js',
        ],
         'web.assets_qweb': [
            'retail/static/src/xml/chart_templates.xml',
        ],
    },

    'application': True,
}
