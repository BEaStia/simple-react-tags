import React from 'react';
import ReactDOM from 'react-dom';
import TagContainer from '../components/TagContainer/TagContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    const tags = [
        "Санкт-Петербург", "Москва", "Новосибирск"
    ];
    ReactDOM.render(<TagContainer data={tags}/>, div);
});

