Ext.define('MyClassic.view.posts.PostFormPopupController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postformpopupcontroller',

    onSaveClicked: function(btn) {
        let window = this.getView();
        console.log(window);
        let references = window.getReferences();

        let form = references['postform'].getForm();

        if(form.isValid()){
            //send ajax request to submit
            form.submit({
                method:'POST',
                url:'https://jsonplaceholder.typicode.com/posts',
                success:function(form,action){
                    Ext.Msg.alert('Success', action.result.msg);
                    // add the record tpo the post store -> post grid
                    let postsStore = Ext.getStore('posts');
                    let newPost = Ext.create('MyClassic.model.Post', action.result.data);
                    postsStore.add(newPost);
                    // Close the window after successful submission
                    window.close();
                },
                failure:function(form,action){
                    // handle failures
                    Ext.Msg.alert('Failed', action.result.msg);
                }

            });
        }else{
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
        }


        //get all values
        // submit to json place holder => backend
        // add the items to the grid
    },

    onCancelClicked: function(btn) {
        // Handle cancel action
        console.log('Cancel button clicked');
        btn.up('postformwindow').close(); // Close the window
    },
    onClearClicked: function(btn) {
        var form = btn.up('postformwindow').down('form');
        form.reset();
    }
});