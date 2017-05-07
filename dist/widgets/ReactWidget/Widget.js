define(['dojo/_base/declare', 'jimu/BaseWidget', 'react', 'react-dom'], function (declare, BaseWidget, React, ReactDOM) {
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'react-widget',

    postCreate: function postCreate() {
      this.inherited(arguments);
      console.log('ReactWidget::postCreate');
      debugger;
      ReactDOM.render(React.createElement(
        'h2',
        null,
        'Test'
      ), this.domNode);
    }
  });
});
