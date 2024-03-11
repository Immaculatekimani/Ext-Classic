/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyClassic.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyClassic.view.main.MainController',
        'MyClassic.view.main.MainModel',
        'MyClassic.view.main.List',

    ],

    plugins: 'viewport',
    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'border'
    },


    items: [{
        xtype: 'mainmenu',
        bind: {
            title: '{name}'
        },
        region: 'west',
        width: 250,
        split: true,
    },
    {
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            title: 'Foo'
        },
        {
            title: 'Bar',
            closable: true,
            tabConfig: {
                title: 'Custom Title',
                tooltip: 'A button tooltip'
            }
        }]

    },
    {
        region: 'south',
        xtype: 'appfooter',
    },
    {
        region: 'north',
        xtype: 'appheader',
    }]
});