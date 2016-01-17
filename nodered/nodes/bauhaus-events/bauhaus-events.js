module.exports = function(RED) {
    var eventName = "";
    function BauhausEventListener(config) {
        RED.nodes.createNode(this,config);
        var node = this;

        var app = RED.settings.functionGlobalContext.loopback;

        eventName = config.name;
        _registerEvent(eventName);

        function _registerEvent(pEventName){
            // register event once
            // (workaround since it was not possible to unbind events in case of a new event name)
            app.once(pEventName, function() {

                var msg = {};
                msg.payload = arguments;
                node.send(msg);

                // re-register event with current name
                _registerEvent(eventName)

            });
        }
    }
    RED.nodes.registerType("BauhausJS event listener",BauhausEventListener);
}