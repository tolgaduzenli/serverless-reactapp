import React from 'react'
import enzyme from 'enzyme'
import NoteModal from '../components/models/NoteModal'

describe('<NoteModal />', () => {
    let wrapper
    let note = {
        title: "",
        description: ""
    }
    beforeEach(() => {
        wrapper = enzyme.shallow(
            <NoteModal closeModal={jest.fn()}
                showModal={true}
                onClickModalSave={jest.fn()}
                note={note}
            />
        );
    });
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('Should render a <section />', () => {
        expect(wrapper.find('section').length).toEqual(1)
    })
    it('Should render a <Modal />', () => {
        expect(wrapper.find('Modal').length).toEqual(1)
    })
})