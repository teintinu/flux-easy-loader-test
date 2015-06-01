var Flux = require('flux');
var React = require('react/addons');
window.React = React;

var dispatcher = new Flux.Dispatcher();

var view = require('./app.view.js').createViewReference(dispatcher);
var store = require('./app.store.js').createStoreReference(dispatcher);

React.render(React.createElement(view.Class), document.getElementById('app'));

setInterval(function () {
    store.setTitle(new Date().toUTCString());
}, 1000);
