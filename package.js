Package.describe({
  summary: "is.js micro check library for Meteor",
  version: "0.0.1",
  git: "https://github.com/hb5co/meteor-is.js.git" 
});

Package.on_use(function (api, where) {
  api.add_files('lib/is.js/is.min.js');
});
