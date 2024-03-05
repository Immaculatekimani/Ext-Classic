Ext.define('MyClassic.store.Users',{
    extend:'Ext.data.Store',
    alias:'store.users',
    model:'MyClassic.model.User',
    proxy:{
        type:'rest',
        url:'http://localhost:3000/users',
        reader:{
            type:'json',
            rootProperty:'rows',
            totalProperty:'totalCount'
        }
    },

})