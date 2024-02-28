Ext.define("MyClassic.model.Person",
  {
    name: "Unknown",
    requires: ['MyClassic.util.Util','MyClassic.util.Math'],

    constructor: function (name) {
      if (name) {
        this.name = name;
      }
    },

    eat: function (foodType) {
        MyClassic.util.Util.logInfo(this.name + " is eating: " + foodType)
      console.log(MyClassic.util.Math.PI);

    },
  },
  () => {
    var bob = Ext.create("MyClassic.model.Person", "Bob");
    bob.eat("Salad"); // alert("Bob is eating: Salad");
  }
);