import React from 'react';
import ReactDOM from 'react-dom';
export default class Tagger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleKey = this.handleKey.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleKey(event) {
        if (event.keyCode === 13) {
            this.props.store.dispatch({ type: 'ADD', value: this.state.value });
            ReactDOM.findDOMNode(this.refs.tagInputValue).value = '';
            event.preventDefault();
        }
    }

    render() {
        return (
            <input type="text" defaultValue='' ref="tagInputValue" onChange={this.handleChange} onKeyDown={this.handleKey}/>
        );
    }
}