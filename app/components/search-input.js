/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'SearchInput',

    propTypes: {
        autoFocus: React.PropTypes.bool,
        placeholder: React.PropTypes.string,
        query: React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            autoFocus: true,
            placeholder: 'Component name, keyword or similar',
            query: ''
        };
    },

    componentDidMount: function() {
        // Use to bring up the "looking glass"-icon
        this.getDOMNode().setAttribute('results', 5);
    },

    /* jshint trailing:false, quotmark:false, newcap:false */
    render: function() {
        return (
            <input
                type="search"
                className="search"
                defaultValue={this.props.query}
                placeholder={this.props.placeholder}
                autoFocus={this.props.autoFocus}
            />
        );
    }
});