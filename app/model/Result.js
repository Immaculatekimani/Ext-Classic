Ext.define('MyClassic.model.Result', {
    extend: 'Ext.data.Model',
    fields: ['student', 'subject', {
        name: 'mark',
        type: 'int'
    }]
});
