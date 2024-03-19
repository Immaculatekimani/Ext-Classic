Ext.define('MyClassic.view.ledger.AccountGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'accountgrid',
    controller: 'accountgridcontroller',
    store: {
        type: 'accounts'
    },
    tbar: [
        {
            fieldLabel: 'Search',
            xtype: 'textfield',
            listeners: {
                change: 'onSearchKeyValueChange'
            }
        },

        {
            text: 'Add Account',
            xtype: 'button',
            iconCls: 'fas fa-plus',
            listeners: {
                click: 'onAddAccountClicked'
            }
        }, '->',
        {
            text: 'Edit/View Account',
            iconCls: 'fas fa-pencil-alt',
            listeners: {
                click: 'onEditClicked'
            }
        },
        {
            text: 'Delete Account',
            iconCls: 'far fa-trash-alt',
            listeners: {
                click: 'onDeleteClicked'
            }
        },


    ],
    columns: [
        { text: 'Account Name', dataIndex: 'name', flex: 1 },
        { text: 'Debit', dataIndex: 'debit' },
        { text: 'Credit', dataIndex: 'credit' }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable: true,

})