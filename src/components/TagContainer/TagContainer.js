import React from 'react';
import './TagContainer.css';
import TagElement from '../TagElement/TagElement'
const TagContainer = React.createClass({
    getInitialState() {
        return {
            visible: false
        }
    },
    render() {
        const data = this.props.data;
        let templates = data.map((el, index)=> {
            return <TagElement data={el} key={index}/>
        });
        console.log(data);
        return (
            <div className="TagContainer">
                {templates}
                <input type="text" />
            </div>
        );
    }
});

export default TagContainer;
