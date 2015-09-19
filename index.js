module.exports = createPausableLayout;

function createPausableLayout(graph, physicsSettings){

    var forceDirected = require('ngraph.forcelayout');
    var api = forceDirected(graph, physicsSettings);
    var stepFunction = function() {
        return api.simulator.step();
    };

    api.pause = function() {
        api.step = function() {
            return;
        };
    };
    api.resume = function() {
        api.step = stepFunction
    };
    api.resume();
    return api;

};