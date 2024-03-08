Ext.define('MyClassic.view.employees.EmployeeGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'employeegrid',
    store: {
        type: 'employees'
    },
    
    columns: [
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Seniority', dataIndex: 'seniority', flex: 1 }
    ],
    features: [{ ftype: 'grouping' }],
    selModel: {
        selType: 'checkboxmodel',
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,

})