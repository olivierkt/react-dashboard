"use strict";

var React = require('react');

var ReactDash = React.createClass({
    displayName: "ReactDash",

    getInitialState: function getInitialState() {
        return {
            class: "speed animate",
            percent: 33
        };
    },
    handleChange: function handleChange(e) {
        this.setState({
            class: "speed animate",
            percent: e.target.value
        });
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: this.state.class, "data-value": this.state.percent },
                React.createElement("span", { className: "speed_needle", style: { transform: 'rotate(' + this.state.percent + 'deg)' } })
            ),
            React.createElement("input", { className: "speed_input", onChange: this.handleChange, placeholder: "Enter value" })
        );
    }
});

module.exports = ReactDash;