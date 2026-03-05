{
    'name': 'Product In Stock Notice',
    'version': '19.0.1.0.0',
    'category': 'Inventory',
    'summary': 'Shows "I lager" indicator on products that are in stock',
    'description': """
        Adds a visual "I lager" (In Stock) heads-up badge on product forms
        and kanban views when the product has available stock.
    """,
    'author': 'Implefy AB',
    'website': 'https://github.com/Implefy-AB/product-instock',
    'license': 'LGPL-3',
    'depends': ['website_sale', 'stock'],
    'data': [
        'views/product_template_views.xml',
        'views/website_sale_templates.xml',
    ],
    'installable': True,
    'auto_install': False,
    'application': False,
}
