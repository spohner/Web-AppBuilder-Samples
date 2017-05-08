import declare from 'dojo/_base/declare';
import BaseWidget from 'jimu/BaseWidget';
import ko from './libs/knockout-3.4.2';
import appViewModel from './appViewModel';
import on from 'dojo/on';

// To create a widget, you need to derive from BaseWidget.
export default declare([BaseWidget], {

  // Custom widget code goes here

  baseClass: 'knockout-widget',
  appViewModel: new appViewModel(),

  // add additional properties here

  // methods to communication with app container:
  postCreate () {
    this.inherited(arguments);
    console.log('KnockoutWidget::postCreate');
    this.appViewModel.zoomLevel(this.map.getLevel());
    ko.applyBindings(this.appViewModel, this.domNode);
    
    this.addListeners();
  },

  addListeners () {
    this.map.on("zoom-end", (e) => {
      this.appViewModel.zoomLevel(e.level);
    });

    this.appViewModel.zoomLevel.subscribe((newValue) => {
      if(newValue !== this.map.getLevel()){
        this.map.setLevel(newValue);
      }
    });
  }
  // startup() {
  //   this.inherited(arguments);
  //   console.log('KnockoutWidget::startup');
  // },
  // onOpen() {
  //   console.log('KnockoutWidget::onOpen');
  // },
  // onClose(){
  //   console.log('KnockoutWidget::onClose');
  // },
  // onMinimize(){
  //   console.log('KnockoutWidget::onMinimize');
  // },
  // onMaximize(){
  //   console.log('KnockoutWidget::onMaximize');
  // },
  // onSignIn(credential){
  //   console.log('KnockoutWidget::onSignIn', credential);
  // },
  // onSignOut(){
  //   console.log('KnockoutWidget::onSignOut');
  // }
  // onPositionChange(){
  //   console.log('KnockoutWidget::onPositionChange');
  // },
  // resize(){
  //   console.log('KnockoutWidget::resize');
  // }
});
