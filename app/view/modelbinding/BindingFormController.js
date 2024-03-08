Ext.define('MyClassic.view.modelbinding.ModelBindingFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.bindingformcontroller',

    onStateSelected: function (combo, record, eOpts) {
        console.log(combo.getValue());
    },
    onStateSelectionChange: function (combobox, newValue, oldValue, eOpts) {
        console.log(oldValue +" -> "+newValue);
    },


})