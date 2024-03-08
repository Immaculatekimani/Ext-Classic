Ext.define('MyClassic.view.groupsummary.SummarizePanel',{
    extend:'Ext.panel.Panel',
    xtype:'summarizepanel',
    items: [{
        title: 'Employee Grouping',
        items: [
           {
                xtype:'employeegrid'
           }
        ]
    }, {
        title: 'Results Summary',
        items: [
            {
                xtype: 'resultgrid'
            }
        ]
    }]
})