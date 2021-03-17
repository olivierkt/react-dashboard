"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const ReactDash = require('./react-dash.js');

const App = React.createClass({
    render: function() {
        return (
            <div>
                <ReactDash />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById("app")
);


