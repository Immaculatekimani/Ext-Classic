Ext.define('MyClassic.model.Account', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'debit', type: 'float' },
        { name: 'credit', type: 'float' }
    ]
});