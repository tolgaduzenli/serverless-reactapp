import React from 'react'
import enzyme from 'enzyme'
import ButtonContainer from '../components/note/ButtonContainer'

describe('<ButtonContainer />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = enzyme.shallow(
            <ButtonContainer onClickDelete={jest.fn()}
                onClickEdit={jest.fn()}
            />
        );
    });
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('Should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })
    it('Should render a <button />', () => {
        expect(wrapper.find('button').length).toEqual(2)
    })
})