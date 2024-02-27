Ext.define(
    "MyClassic.model.City",
    {
        extend: 'Ext.data.Model',
        fields: [
            "id", "name"
        ]
    },
    function (){
        var city =  new Ext.create("MyClassic.model.City")
        console.log(city);
    }
);