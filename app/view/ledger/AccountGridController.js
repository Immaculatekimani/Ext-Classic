Ext.define('MyClassic.view.ledger.AccountGridController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.accountgridcontroller',
    mixins: ['MyClassic.mixin.GridMixin'],
    


    onAddAccountClicked:function(btn,e,eOpts){
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
   
    onEditClicked: function (btn, e, eOpts) {

    },
    onDeleteClicked: function (btn, e, eOpts) {
        let me=this;
        let record = this.getSelectedRecordByXType('postgrid');
        let grid = me.getView()
        if (record){
            let recordId = record.get('_id');
            Ext.Msg.confirm('Delete Operation', `Are you sure you want to delete the account with id ${recordId}`, function (btn, text) {
                
            });

        }
    },
    
    onSearchKeyValueChange: function (view, newValue, oldValue, eOpts) {
        let me = this,
            v = me.getView(),
            vm = me.getViewModel(),
            refs = me.getReferences();

        let store = v.getStore();

        store.reload({
            params: {
                userId: newValue,

            }
        })
       
    }
})