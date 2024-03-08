Ext.define('MyClassic.view.testresults.ResultsGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'resultgrid',

   
    features: [{
        ftype: 'grouping',
        groupHeaderTpl: 'Subject: {name}',
        showSummaryRow: true
    }],
    store: {
        type: 'results',
    },
    columns: [{
        dataIndex: 'student',
        text: 'Name',
        summaryType: 'count',
        summaryRenderer: function(value){
            return Ext.String.format('{0} student{1}', value, value !== 1 ? 's' : '');
        }
    }, {
        dataIndex: 'mark',
        text: 'Mark',
        summaryType: 'average'
    }]
});