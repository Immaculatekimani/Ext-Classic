Ext.define('MyClassic.view.posts.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postgrid',
    controller: 'postgridviewcontroller',
    store: {
        type: 'posts'
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
            fieldLabel: 'Choose User',
            xtype: 'combo',

            store: {
                type: 'users'
            },
            queryMode: 'local',
            displayField: 'username',
            valueField: '_id',
            listeners:{
                change:'onUserSelectionChange',
                select:'onUserSelected'
            }
        },
        {
        text: 'Add Post',
        xtype: 'button',
        iconCls: 'fas fa-plus',
        listeners: {
            click: 'onAddPostClicked'
        }
    }, '->',
    {
        text: 'Edit/View Post',
        iconCls: 'fas fa-pencil-alt',
        listeners: {
            click: 'onEditClicked'
        }
    },
    {
        text: 'Delete Post',
        iconCls: 'far fa-trash-alt',
        listeners: {
            click: 'onDeleteClicked'
        }
    },
    {
        text: 'Form Fields',
        listeners: {
            click: 'onFormFieldClicked'
        }
    },
    {
        text: 'Accordion',
        listeners: {
            click: 'onAccordionClicked'
        }
    },
    {
        text: 'HBox',
        listeners: {
            click: 'onHboxClicked'
        }
    },
    {
        text: 'VTypes',
        listeners: {
            click: 'onVTypesClicked'
        }
    },
    {
        text: 'Check Out',
        listeners: {
            click: 'onCheckoutClicked'
        }
    }
],
    columns: [
        { dataIndex: '_id', text: 'ID' },
        { dataIndex: 'title', text: 'Title', flex: 1 },
        { dataIndex: 'body', text: 'Body', flex: 2 },
        { dataIndex: 'userId', text: 'User ID', hidden: false }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,

})