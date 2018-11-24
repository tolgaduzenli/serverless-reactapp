import React from 'react'
import enzyme from 'enzyme'
import ErrorDisplayer from '../components/error/ErrorDisplayer'

describe('<ErrorDisplayer />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = enzyme.shallow(
            <ErrorDisplayer
            />
        );
    });

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(2);
    });

    it('should render correctly', () => expect(wrapper).toMatchSnapshot());

})