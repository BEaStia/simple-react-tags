import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App';
import Tagger from '../components/Tagger/Tagger'
import TagContainer from '../components/TagContainer/TagContainer'
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

describe('<App />', () => {
    it('works', () => {
        const tags = [
            "Санкт-Петербург", "Москва", "Новосибирск"
        ];

        let wrapper = mount(<App tags={tags} />);
        expect(wrapper.find(TagContainer)).to.have.length(1);
        console.log(wrapper.state());
        console.log(wrapper.find(<TagContainer />));
    });
});