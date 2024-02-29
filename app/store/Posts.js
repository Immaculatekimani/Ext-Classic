Ext.define('MyClassic.store.Posts',{
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'MyClassic.model.Post',
    requires: ['MyClassic.model.Post'],
    autoLoad:true,
    sorters: ['id'],
    filters: {
        property: 'userId',
        value   : '10'
    }


})