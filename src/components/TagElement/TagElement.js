import React from 'react';
import './TagElement.css';
export default class TagElement extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        console.log("click!");
    }

    render() {
        return (
            <span className="TagElement" onClick={this.onClick}>
                {this.props.value}
            </span>
        );
    }
}