Ext.define(
    "MyClassic.store.Cities", {
        extend: "Ext.data.Store",
        model: "MyClassic.model.City",
        data: [
            {
                id:1, name:"Naivasha"
            },
            {
                id:2, name:"Nairobi"
            }
        ],
    });