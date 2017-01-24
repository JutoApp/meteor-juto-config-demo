import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log("Meteor.settings on server:");
  console.log(Meteor.settings);
});
