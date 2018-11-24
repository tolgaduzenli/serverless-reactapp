import React from 'react'
import enzyme from 'enzyme'
import Preloader from '../components/loader/Preloader'

describe('<Preloader />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = enzyme.shallow(
            <Preloader
            />
        );
    });
    it('should render correctly', () => expect(wrapper).toMatchSnapshot());
})