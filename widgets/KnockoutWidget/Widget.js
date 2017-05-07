import declare from 'dojo/_base/declare';
import BaseWidget from 'jimu/BaseWidget';
import ko from './libs/knockout-3.4.2';
import appViewModel from './appViewModel';

// function 

// To create a widget, you need to derive from BaseWidget.
export default declare([BaseWidget], {

  // Custom widget code goes here

  baseClass: 'knockout-widget',

  // add additional properties here

  // methods to communication with app container:
  postCreate () {
    this.inherited(arguments);
    console.log('KnockoutWidget::postCreate');
    debugger;
    ko.applyBindings(new appViewModel(), this.domNode);
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
