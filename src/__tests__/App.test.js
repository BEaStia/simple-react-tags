import React from 'react';
import App from '../components/App/App';
import Tagger from '../components/Tagger/Tagger'
import TagElement from '../components/TagElement/TagElement'
import TagContainer from '../components/TagContainer/TagContainer'
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

describe('<App />', () => {
    it('should create tagContainer', () => {
        let wrapper = mount(<App />);
        expect(wrapper.find(TagContainer)).to.have.length(1);
    });

    it('should pass tags to tagContainer', ()=> {
        const tags = [
            "Санкт-Петербург", "Москва", "Новосибирск"
        ];

        let wrapper = mount(<App tags={tags} />);
        expect(wrapper.find(TagContainer)).to.have.length(1);
        let container = wrapper.find(TagContainer);
        expect(container.props().tags).to.equal(tags);
    });
});