Ext.define('MyClassic.view.fmviews.ParentPanel',{
    extend:'Ext.panel.Panel',
    xtype:'parentpanel',
    scrollable: true,
    items:[
        {
            xtype:'usergrid',

        },
        {
            xtype:'datapanel',

        }
    ]
})