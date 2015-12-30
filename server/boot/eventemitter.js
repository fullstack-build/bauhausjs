'use strict';

module.exports = function(app) {

    var _oldEmit = app.emit;
    /*app.emit = function(pEventName, pFireDate){
        console.log('# catched', pEventName);

        if(pFireDate instanceof Date){
            // delay
            console.log('#*** DELAY and save to DB', pEventName);
        } else{
            // emit now
            _oldEmit.apply(app, arguments);
        }

    }*/

    //console.log(app);
    app.on('started', function() {
        console.log('*** fired started ***');
    });
    app.on('booted', function() {
        console.log('*** fired booted ***');
    });


    app.on('test1', function() {
        console.log('*** fired TEST 1 / no Date ***');
    });


    app.emit("test1");


    app.on('test2', function() {
        console.log('*** fired TEST 2 / with Date ***');
    });


    app.emit("test2", new Date());

    setInterval(function () {
        console.log('*** fired!!!!');
        app.emit("test3", "event test3 payload");
    }, 2500)



    //console.log(app);
    /*var RED;
    try {
        RED = require('node-red');
    } catch(err) {
// Print the message only when the app was started via server.listen().
// Do not print any message when the project is used as a component.
        server.once('started', function(baseUrl) {
            console.log(
                'Run npm install node-red to enable the node-red back-end'
            );
        });
        return;
    }

// Create the settings object - see default settings.js file for other options
    var settings = {
        httpAdminRoot:"/red",
        httpNodeRoot: "/api",
        userDir:".nodered/",
        functionGlobalContext: { } // enables global context
    };

// Initialise the runtime with a server and settings
    RED.init(app, settings);

// Serve the editor UI from /red
    app.use(settings.httpAdminRoot, RED.httpAdmin);

// Serve the http nodes UI from /api
    app.use(settings.httpNodeRoot, RED.httpNode);

// Start the runtime
    RED.start();*/
}