import React from 'react';
import './TagElement.css';
export default class TagElement extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.store.dispatch({type: 'DELETE', value: this.props.value});
    }

    render() {
        return (
            <span className="TagElement" onClick={this.onClick}>
                {this.props.value}
                <input type="hidden" className="hidden" name={this.props.name} value={this.props.value} />
            </span>
        );
    }
}