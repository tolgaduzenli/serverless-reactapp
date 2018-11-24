import React from 'react'
import enzyme from 'enzyme'
import Note from '../components/note/Note'
import ButtonContainer from '../components/note/ButtonContainer'

describe('<Note />', () => {
    let wrapper
    let note = {
        title: "",
        description: "",
        _id: 1
    }
    
    beforeEach(() => {
        wrapper = enzyme.shallow(
            <Note key={""} note={note} onClickDelete={jest.fn()}
                onClickEdit={jest.fn()} />
        )
    })

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('Should render a <tr />', () => {
        expect(wrapper.find('tr').length).toEqual(1)
    })

    it('should render a <ButtonContainer />', () => {
        expect(wrapper.find('td').containsMatchingElement(
            <ButtonContainer />
        )).toEqual(true)
    })
})