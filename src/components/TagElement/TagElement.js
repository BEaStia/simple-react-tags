import React from 'react';
import './TagElement.css';
const TagElement = React.createClass({
    propTypes: {
        data: React.PropTypes.string.isRequired
    },
    render() {
        return (
            <span className="TagElement">
                {this.props.data}
            </span>
        );
    }
});

export default TagElement;
