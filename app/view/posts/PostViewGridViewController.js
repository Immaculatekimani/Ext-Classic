Ext.define('MyClassic.view.posts.PostGridViewController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridviewcontroller',

    onAddPostClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        var wd = Ext.create({
            xtype: "postformwindow",
        });
        wd.show();
    },
    onFormFieldClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        Ext.create({
            xtype: "formfielddemo",
        });
    },
    onAccordionClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        Ext.create({
            xtype: "accordion",
        });
    },
    onHboxClicked:function(btn,e,eOpts){
        console.log(btn.getText() + " was clicked");
        Ext.create({
            xtype: "hbox",
        });
    }
})