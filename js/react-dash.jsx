"use strict";

const React = require('react');

const ReactDash = React.createClass({
    getInitialState: function(){
        return {
            class: "speed animate",
            percent: 33
        }
    },
    handleChange: function(e) {
        this.setState({
            class: "speed animate",
            percent: e.target.value
        });
    },
    render: function() {
        return (
            <div>
                <div className={this.state.class} data-value={this.state.percent}>
                    <span className="speed_needle" style={{ transform: 'rotate(' + this.state.percent + 'deg)' }}></span>
                </div>
                <input className="speed_input" onChange={this.handleChange} placeholder="Enter value" />
            </div>
        );
    }
});

module.exports = ReactDash;
