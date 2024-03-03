Ext.define('MyClassic.view.layersandcontainers.ViewPort', {
    extend: 'Ext.container.Viewport',

    layout: 'border',

    items: [{
        region: 'north',
        xtype: 'header'
    }, {
        region: 'west',
        xtype: 'sidebar',
        width: 250
    }, {
        region: 'center',
        xtype: 'maincontent'
    }]
});