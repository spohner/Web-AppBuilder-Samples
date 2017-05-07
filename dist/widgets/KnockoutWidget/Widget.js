define(['dojo/_base/declare', 'jimu/BaseWidget', './libs/knockout-3.4.2', './appViewModel'], function (declare, BaseWidget, ko, appViewModel) {
  return declare([BaseWidget], {

    // Custom widget code goes here

    baseClass: 'knockout-widget',

    postCreate: function postCreate() {
      this.inherited(arguments);
      console.log('KnockoutWidget::postCreate');
      debugger;
      ko.applyBindings(new appViewModel(), this.domNode);
    }
  });
});
