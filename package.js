Package.describe({
  summary: "is.js for Meteor"
});

Package.on_use(function (api, where) {
  api.add_files('lib/is.js/is.min.js');
});
