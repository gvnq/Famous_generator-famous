'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var bower = require('bower');

var TutorialGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
    if (this.name === 'timbre') {
      console.log('ho');
    }
  },

  files: function () {

  }
});

module.exports = TutorialGenerator;