define(['dojo/_base/declare', 'jimu/BaseWidget', 'dojo/Stateful', 'dojo/html', 'dojo/_base/lang'],
function(declare, BaseWidget, Stateful, html, lang) {
  //To create a widget, you need to derive from BaseWidget.
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'my-dojoCustom-widget',

    viewModel: new Stateful({
      zoomLevel: -1
    }),
    // this property is set by the framework when widget is loaded.
    // name: 'DojoWidget',
    // add additional properties here

    //methods to communication with app container:
    postCreate: function() {
      this.inherited(arguments);
      console.log('DojoWidget::postCreate');
      this.viewModel.set("zoomLevel", this.map.getLevel());
      this.zoomLevelNode.innerHTML = this.viewModel.zoomLevel;
      this.addListeners();
    },

    _increaseZoom: function(){
      this.viewModel.set("zoomLevel", this.viewModel.zoomLevel + 1);
    },

    _decreaseZoom: function(){
      this.viewModel.set("zoomLevel", this.viewModel.zoomLevel - 1);
    },

    addListeners: function(){
      this.viewModel.watch("zoomLevel", lang.hitch(this, function(name, oldValue, value){
        this.zoomLevelNode.innerHTML = value;
        if(value !== this.map.getLevel()){
          this.map.setLevel(value);
        }
      }));
      
      this.map.on("zoom-end", (e) => {
        this.viewModel.set("zoomLevel", e.level);
      });
    },

    // startup: function() {
    //   this.inherited(arguments);
    //   console.log('DojoWidget::startup');
    // },

    // onOpen: function(){
    //   console.log('DojoWidget::onOpen');
    // },

    // onClose: function(){
    //   console.log('DojoWidget::onClose');
    // },

    // onMinimize: function(){
    //   console.log('DojoWidget::onMinimize');
    // },

    // onMaximize: function(){
    //   console.log('DojoWidget::onMaximize');
    // },

    // onSignIn: function(credential){
    //   console.log('DojoWidget::onSignIn', credential);
    // },

    // onSignOut: function(){
    //   console.log('DojoWidget::onSignOut');
    // }

    // onPositionChange: function(){
    //   console.log('DojoWidget::onPositionChange');
    // },

    // resize: function(){
    //   console.log('DojoWidget::resize');
    // }

    //methods to communication between widgets:

  });

});
