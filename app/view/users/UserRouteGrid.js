Ext.define('MyClassic.view.users.UserGrid',{
    extend:'Ext.grid.GridPanel',
    xtype:'userroutegrid',
    controller:'usergridcontroller',
    title:'Users',
    store:{
        type:'users'
    },
    height:400,
    plugins: {
        cellediting: {
            clicksToEdit: 1
        }
    },
    selModel: {
        selType: 'cellmodel',
    },
    columns:[
        // {xtype: 'rownumberer'},
        {
            dataIndex:'_id',
            text: 'ID'
        },
        {
            dataIndex: 'username',
            text: 'Username',
            flex:2,
            editor: 'textfield'
        },
        {
            dataIndex: 'name',
            text: 'Name',
            flex:2,
            editor: 'textfield'
        },
        {
            dataIndex: 'email',
            text: 'Email',
            flex: 3,
            renderer: function (value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            },
            editor: {
                xtype: 'textfield',
                completeOnEnter: false,
                allowBlank: false
            }
        },
    //     {
    //         dataIndex: 'city',
    //         text: 'City',
    //         flex:2
    //     },a
    //     {
    //         dataIndex: 'street',
    //         text: 'Street',
    //         flex:2,
    //         editor: 'textfield'
    //     },
    //     {
    //         dataIndex: 'suite',
    //         text: 'Suite',
    //         flex:2,
    //         editor: 'textfield'
    //     },
    //     {
    //         dataIndex: 'zipcode',
    //         text: 'Zip Code',
    //         flex:2,
    //         editor: 'textfield'
    //     },
    ],
    tbar:[
        {
            text: 'Add User'
        },
        {
            text: 'Model Binding',
            handler: 'onModelBinding'
        },
        '->',
        {
            text: 'Show Details',
            handler: 'onRouteShowDetails',
            // bind: {
            //     disabled: '{!usergrid.selection}'
            // }  
        }
    ],
    selModel: {
        selType: 'checkboxmodel',
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    listeners:{
        cellclick:'onUserRouteGridCellClick',
        celldblclick:'onUserRouteGridCellDblClick',
        cellcontextmenu:'onUserRouteGridCellContextMenu'
    }

})