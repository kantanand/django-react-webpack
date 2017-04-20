var React = require('react')
var APP = require('./app')

// React.render(<App/>, document.getElementById('react-app'))

var ReactDom = require('react-dom');
ReactDom.render(<APP />, document.getElementById('react-container'));
