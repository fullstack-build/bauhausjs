var loopback = require('loopback');
var boot = require('loopback-boot');
var path = require('path');
var bodyParser = require('body-parser');

var app = module.exports = loopback();

var RED = require('node-red');

// configure view handler
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

// configure body parser
app.use(bodyParser.urlencoded({extended: true}));

app.use(loopback.token());

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
// includes Red-node back-end
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) {
    var server = app.start();

    // Create the settings object - see default settings.js file for other options
    var settings = {
      // By default, the Node-RED UI is available at http://localhost:1880/
      // The following property can be used to specifiy a different root path.
      // If set to false, this is disabled.
      httpAdminRoot:"/red",
      // Some nodes, such as HTTP In, can be used to listen for incoming http requests.
      // By default, these are served relative to '/'. The following property
      // can be used to specifiy a different root path. If set to false, this is
      // disabled.
      httpNodeRoot: "/api",
      // By default, all user data is stored in the Node-RED install directory. To
      // use a different location, the following property can be used
      userDir: process.cwd() + "/nodered/",
      //a directory to search for additional installed nodes.
      // Node-RED searches the nodes directory under install directory.
      // This property allows an additional directory to be searched,
      // so that nodes can be installed outside of the Node-RED install structure.
      nodesDir: "nodes",
      //the file used to store the flows
      flowFile: "flows.json",
      verbose: true,
      //storageModule: "node-red-flows-mongo.js",
      //mongoUrl: 'mongodb://localhost/nodered',
      // Anything in this hash is globally available to all functions.
      // It is accessed as context.global.
      // eg:
      //    functionGlobalContext: { os:require('os') }
      // can be accessed in a function block as:
      //    context.global.os
      functionGlobalContext: {
        //fs:require('fs'),
        //moment:require('moment'),
        loopback: app // access models from node-red through this var "loopback"
      }
    };

    // Initialise the runtime with a server and settings
    RED.init(server, settings);

    // Serve the editor UI from /red
    app.use(settings.httpAdminRoot, RED.httpAdmin);

    // Serve the http nodes UI from /api
    app.use(settings.httpNodeRoot, RED.httpNode);

    // Start the runtime
    RED.start();
  }
});