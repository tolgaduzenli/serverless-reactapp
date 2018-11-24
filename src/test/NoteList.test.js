import React from 'react'
import enzyme from 'enzyme'
import NoteList from '../components/note/NoteList'

describe('<NoteList />', () => {
    let wrapper
    let note = {
        title: "",
        description: "",
        _id: 1
    }
    
    beforeEach(() => {
        wrapper = enzyme.shallow(
            <NoteList noteList={[]}
                onClickAdd={jest.fn()}
                onClickDelete={jest.fn()}
                onClickEdit={jest.fn()}
            />
        )
    })

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('Should render a <table />', () => {
        expect(wrapper.find('table').length).toEqual(1)
    })

    it('Should render a <tbody />', () => {
        expect(wrapper.find('tbody').length).toEqual(1)
    })
    
    it('Should render a <button />', () => {
        expect(wrapper.find('button').length).toEqual(1)
    })

    it('should render an instance of the Note component for each Note object', () => {
        const noteList = []
        noteList.push(note)
        wrapper.setProps({ noteList });
        expect(wrapper.find('Note').length).toEqual(1);
    });
})