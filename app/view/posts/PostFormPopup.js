Ext.define('MyClassic.view.posts.PostFormPopup', {
    extend: 'Ext.window.Window',
    xtype: 'postformwindow',
    title: "Add Post",
    height: 250,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    items:[{
       xtype: 'form',
       items:[
           {
               allowBlank: false,
               xtype:'textfield',
               fieldLabel: 'Post ID',
               name: 'id',
               emptyText: 'Post id'
           },
           {
               allowBlank: false,
               xtype: 'textfield',
               fieldLabel: 'User ID',
               name: 'userId',
               emptyText: 'user id'
           },
           {
               allowBlank: false,
               xtype: 'textfield',
               fieldLabel: 'Title',
               name: 'title',
               emptyText: 'title'
           },
           {
               allowBlank: false,
               xtype: 'datefield',
               fieldLabel: 'Published Date',
               name: 'date',
               emptyText: 'date'
           },
       ],

    }],
    buttons: [
        { text: 'Save' },
        { text: 'Cancel' },
    ]
})