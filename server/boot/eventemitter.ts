/// <reference path="../../typings/node.d.ts" />
'use strict';


function eventsMixin(app){

    var _oldEmit = app.emit;
    app.emit = function(pEventName, pFireDate){
        console.log('# catched', pEventName);

        if(pFireDate instanceof Date){
            // delay
            console.log('#*** DELAY and save to DB', pEventName);
        } else{
            // emit now
            _oldEmit.apply(app, arguments);
        }

    }

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

/*setInterval(function () {
 console.log('*** fired!!!!');
 app.emit("test3", "event test3 payload", "more parameners");
 }, 2500);*/

};

export = eventsMixin;
