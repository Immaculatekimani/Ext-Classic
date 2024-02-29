Ext.define('MyClassic.view.posts.PostFormPopupController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postformpopupcontroller',

    onSaveClicked: function(btn) {
        // Handle save action
        var form = btn.up('postformwindow').down('form');
        if (form.isValid()) {
            // Here you can submit the form data to the server or perform any other action
            console.log('Save button clicked');
            form.reset(); // Reset the form after saving
        } else {
            Ext.Msg.alert('Error', 'Please fill all the required fields.');
        }
    },

    onCancelClicked: function(btn) {
        // Handle cancel action
        console.log('Cancel button clicked');
        btn.up('postformwindow').close(); // Close the window
    }
});