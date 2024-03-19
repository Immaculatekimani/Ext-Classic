Ext.define('MyClassic.store.Accounts', {
    extend: 'Ext.data.Store',
    model: 'MyClassic.model.Account',
    alias: 'store.accounts',
    requires: ['MyClassic.model.Account'],
    sorters: ['id'],
    pageSize: 25,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'resources/accounts.json', 
        reader: {
            type: 'json',
            rootProperty: 'accounts'
        }
    }

});
