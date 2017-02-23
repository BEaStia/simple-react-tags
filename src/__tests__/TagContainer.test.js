import React from 'react';
import Tagger from '../components/Tagger/Tagger'
import TagElement from '../components/TagElement/TagElement'
import TagContainer from '../components/TagContainer/TagContainer'
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

describe('<TagContainer />', () => {
    it('should create Tagger', () => {
        const tags = [
            "Санкт-Петербург", "Москва", "Новосибирск"
        ];

        let wrapper = mount(<TagContainer tags={tags}/>);
        expect(wrapper.find(Tagger)).to.have.length(1);
    });

    it('should create TagElements', () => {
        const tags = [
            "Санкт-Петербург", "Москва", "Новосибирск"
        ];

        let wrapper = mount(<TagContainer tags={tags}/>);
        expect(wrapper.find(TagElement)).to.have.length(3);
    });

    it('shouldn`t create TagElements if no tags sent', () => {
        let wrapper = mount(<TagContainer tags={[]}/>);
        expect(wrapper.find(TagElement)).to.have.length(0);
    });

    it('should create TagElements from string', () => {
        let wrapper = mount(<TagContainer tags="a,b,c"/>);
        expect(wrapper.find(TagElement)).to.have.length(3);
    });

    it('should use delimeters string', () => {
        let wrapper = mount(<TagContainer tags="a:b:c" delimeters=":"/>);
        expect(wrapper.find(TagElement)).to.have.length(3);
    });

    it('should use delimeters array', () => {
        let wrapper = mount(<TagContainer tags="a:b:c" delimeters={[':']}/>);
        expect(wrapper.find(TagElement)).to.have.length(3);
    });

    it('should use custom delimeters if set', () => {
        let wrapper = mount(<TagContainer tags="a:b:c,d,e,f" delimeters={[':']}/>);
        expect(wrapper.find(TagElement)).to.have.length(3);
    });

    it('should filter duplicate tags', () => {
        let wrapper = mount(<TagContainer tags="a,b,c,c,b,b,b,a,a"/>);
        expect(wrapper.find(TagElement)).to.have.length(3);
    });

    it('should use special delimeters', () => {
        let wrapper = mount(<TagContainer tags="a$b$c$d" delimeters="$"/>);
        expect(wrapper.find(TagElement)).to.have.length(4);
    });

    it('should use many delimeters', () => {
        let wrapper = mount(<TagContainer tags="a$b$c,d:e" delimeters="$,:"/>);
        expect(wrapper.find(TagElement)).to.have.length(5);
    });

    it('should be typed new tag', ()=> {
        let wrapper = mount(<TagContainer tags="a:b:c,d,e,f" delimeters={[':']}/>);
        wrapper.find(Tagger).first().simulate('click');
        const text = 'Hello';
        wrapper.find(Tagger).simulate('change', {target: { value: text }});
        expect(wrapper.find(Tagger).node.state.value).to.equal(text);
        wrapper.find(Tagger).simulate('keyDown', { keyCode: 13 });
        expect(wrapper.find(TagElement)).to.have.length(4);
    });

    it('should create array of tags', ()=>{
        let wrapper = mount(<TagContainer/>);
        wrapper.find(Tagger).first().simulate('click');
        const text = 'Hello, Joe';
        wrapper.find(Tagger).simulate('change', {target: { value: text }});
        expect(wrapper.find(Tagger).node.state.value).to.equal(text);
        wrapper.find(Tagger).simulate('keyDown', { keyCode: 13 });
        expect(wrapper.find(TagElement)).to.have.length(2);
    });

    it('should delete TagElements', () => {
        const tags = [
            "Санкт-Петербург", "Москва", "Новосибирск"
        ];

        let wrapper = mount(<TagContainer tags={tags}/>);
        wrapper.find(TagElement).first().simulate('click');
        expect(wrapper.find(TagElement)).to.have.length(2);
    });

    it('should generate hidden fields', ()=> {
        const tags = [
            "Санкт-Петербург", "Москва", "Новосибирск"
        ];

        let wrapper = mount(<TagContainer tags={tags} name="city"/>);
        expect(wrapper.find(".hidden")).to.have.length(3);
    });
});