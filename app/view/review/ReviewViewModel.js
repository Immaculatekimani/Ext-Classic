Ext.define('MyClassic.view.review.ReviewViewModel',{
    extend:'Ext.app.ViewModel',
    alias:'viewmodel.reviewviewmodel',

    stores:{
        posts:{
            model:'MyClassic.model.Post',
            autoLoad:true
        },
        dummyUsers: {
            model: 'MyClassic.model.User',
            autoLoad: true
        }
    }
})