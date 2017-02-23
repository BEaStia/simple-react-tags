import React from 'react';
import './TagContainer.css';
import TagElement from '../TagElement/TagElement';
import Tagger from '../Tagger/Tagger';
import { createStore } from 'redux'

const Delimeters = [';', ',', ';', '\t'];
export default class TagContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        let delimetersRegex = this.decomposeDelimiter(props);

        const splitTags = (tagsContainer)=>{
            if (tagsContainer instanceof Array) {
                return tagsContainer;
            } else {
                return tagsContainer.split(delimetersRegex);
            }
        };

        let tags = props.tags === undefined ? [] : splitTags(props.tags);

        let counter = (state = tags, action) => {
            if (action.type === 'ADD') {
                let filteredTags = splitTags(action.value).filter(el=>{
                    return el.length > 0;
                });
                for (let el of filteredTags) {
                    state.push(el);
                }
            } else if (action.type === 'DELETE') {
                state.remove(action.value);
            }
            return state;
        };
        let store = createStore(counter);

        const component = this;
        store.subscribe(() => {
            component.setState({new: !component.state.new});
        });

        this.state = {
            new: false,
            store: store
        };
    }

    render() {
        const data = this.state.store.getState();
        let templates = data.map((el, index)=> {
            return <TagElement value={el} key={index}/>
        });
        return (
            <div className="TagContainer">
                {templates}
                <Tagger store={this.state.store}/>
            </div>
        );
    }

    decomposeDelimiter(props) {
        let delimeters = props.delimeters === undefined ? Delimeters : props.delimeters;
        let delimetersRegex;

        if (delimeters instanceof Array) {
            delimetersRegex = new RegExp('['+delimeters.join()+']+', 'i');
        } else {
            delimetersRegex = new RegExp('['+delimeters+']+', 'i');
        }
        return delimetersRegex;
    }

}