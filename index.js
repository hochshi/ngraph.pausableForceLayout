module.exports = createPausableLayout;

function createPausableLayout(graph, physicsSettings){

    var forceDirected = require('ngraph.forcelayout');
    var api = forceDirected(graph, physicsSettings);

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