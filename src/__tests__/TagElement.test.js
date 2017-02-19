import React from 'react';
import ReactDOM from 'react-dom';
import TagElement from '../components/TagElement/TagElement';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TagElement />, div);
});

it('render with content', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TagElement data={"Москва"} />, div);
});

test('try to render', ()=> {
    const component = renderer.create(
        <TagElement data={"Москва"} />
    );
});

test('try to render', ()=> {
    const div = document.createElement('div');
    ReactDOM.render(<TagElement />, div);
});
