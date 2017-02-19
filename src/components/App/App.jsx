import logo from './logo.svg';
import React  from 'react';
import TagContainer from '../TagContainer/TagContainer';

function template() {
    const data = [
      "Санкт-Петербург", "Москва", "Новосибирск"
    ];
    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <TagContainer data={data}/>
        </div>
    );
}

module.exports = template;