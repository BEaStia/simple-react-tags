import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App';
import Tagger from '../components/Tagger/Tagger'

import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

describe('expect', () => {
    it('works', () => {
        const tags = [
            "Санкт-Петербург", "Москва", "Новосибирск"
        ];

        let component = <App tags={tags} />;
        console.log(component);
        expect(<App tags={tags} />).toIncludeJSX(<App />);
        // ok
    });
});