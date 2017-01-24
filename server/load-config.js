import { Meteor } from 'meteor/meteor';
let path = require('path');

Meteor.startup(()=>{
    // get the actual path of private/config/default.json
    var filePath = Assets.absoluteFilePath("config/default.json");
    // pass the actual path of private/config to JutoConfig.
    JutoConfig(path.dirname(filePath));
    // Now Meteor.settings environment has been set.

});
