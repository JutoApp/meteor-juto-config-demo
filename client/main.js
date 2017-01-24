import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var jsonMarkup = require('json-markup')


Template.settings.onCreated(function helloOnCreated() {

});

Template.settings.helpers({
  settings() {
    return jsonMarkup(Meteor.settings)
  },
});

Template.settings.events({

});
