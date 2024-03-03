Ext.define('MyClassic.view.posts.PostFormPopup', {
    extend: 'Ext.window.Window',
    xtype: 'postformwindow',
    title: "Add Post",
    height: 250,
    width: 520,
    autoShow: true,
    closable: true,
    modal: true,
    controller: 'postformpopupcontroller', // Add the controller
    items: [{
        xtype: 'form',
        reference: 'postform',
        itemId: 'postform',
        jsonSubmit: true,
        bodyPadding: 10,
        modelValidation: true,
        items: [
            {
                allowBlank: true,
                readOnly: false,
                xtype: 'textfield',
                reference: 'postId',
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
                xtype: 'textareafield',
                fieldLabel: 'Body',
                name: 'body',
                emptyText: 'body'
            },
        ],

    }],
    buttons: [
        {
            text: 'Save',
            handler: 'onSaveClicked'
        },
        {
            text: 'Clear',
            handler: 'onClearClicked'
        },
        {
            text: 'Cancel',
            handler: 'onCancelClicked'
        },
    ]
})