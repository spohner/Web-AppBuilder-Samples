import declare from 'dojo/_base/declare';
import BaseWidget from 'jimu/BaseWidget';
import React from 'react';
import ReactDOM from 'react-dom';

// To create a widget, you need to derive from BaseWidget.
export default declare([BaseWidget], {

  // Custom widget code goes here

  baseClass: 'react-widget',

  // add additional properties here

  // methods to communication with app container:
  postCreate () {
    this.inherited(arguments);
    console.log('ReactWidget::postCreate');
    debugger;
    ReactDOM.render(<h2>Test</h2>, this.domNode);
  }
  // startup() {
  //   this.inherited(arguments);
  //   console.log('ReactWidget::startup');
  // },
  // onOpen() {
  //   console.log('ReactWidget::onOpen');
  // },
  // onClose(){
  //   console.log('ReactWidget::onClose');
  // },
  // onMinimize(){
  //   console.log('ReactWidget::onMinimize');
  // },
  // onMaximize(){
  //   console.log('ReactWidget::onMaximize');
  // },
  // onSignIn(credential){
  //   console.log('ReactWidget::onSignIn', credential);
  // },
  // onSignOut(){
  //   console.log('ReactWidget::onSignOut');
  // }
  // onPositionChange(){
  //   console.log('ReactWidget::onPositionChange');
  // },
  // resize(){
  //   console.log('ReactWidget::resize');
  // }
});
