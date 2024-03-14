Ext.define('MyClassic.view.review.ReviewGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'reviewgrid',
    requires:[
        'MyClassic.util.Util'
    ],

    bind: '{dummyUsers}',
    tbar:[
        {
            text:'Operations',
            menu:[
                {
                    text:'Add new User',
                    handler:function(){

                    }
                },
                {
                    text: 'Add new User'
                },
                {
                    text: 'Add new User',
                    menu:[
                        {
                         text:'Nested Sub Menu'
                        }
                    ]
                }
            ]
        },
        {
            fieldLabel:'Search',
            xtype:'textfield',
            listeners:{
                change: 'onSearchKeyValueChange'
            }
        },
        {
            xtype:'datefield',
            emptyText:'startDate',

        },
        {
            xtype: 'datefield',
            emptyText: 'startDate',

        }
    ],
    columns: [
        { xtype: 'rownumberer' },
        {
            dataIndex: '_id',
            text: 'ID'
        },
        {
            dataIndex: 'username',
            text: 'Username',
            flex: 2,
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
        {
            dataIndex: 'city',
            text: 'City',
            flex: 2
        }, {
            text: 'Price',
            dataIndex: 'price',
            flex: 2,
            // renderer: MyClassic.util.Util.formatNumber
            renderer: function (value) {
                let v = new Number(value);
                if (v > 0) {
                    let formatted = Ext.util.Format.number(value, '###,###.00');
                    return `<h4 style="color:green">${formatted}</h4>`;
        
                }
                else {
                    let formatted = Ext.util.Format.number(value, '###,###.00');
                    return `<h4 style="color:red">${formatted}</h4>`;
        
                }
            }
     
        }]
})