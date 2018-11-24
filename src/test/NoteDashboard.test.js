import React from 'react'
import enzyme from 'enzyme'
import NoteDashboard from '../components/note/NoteDashboard'
import NoteList from '../components/note/NoteList'
import Preloader from '../components/loader/Preloader'
import ErrorDisplayer from '../components/error/ErrorDisplayer'
import NoteModal from '../components/models/NoteModal'
import YesNoModal from '../components/models/YesNoModal'

describe('<NoteDashboard />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = enzyme.shallow(
            <NoteDashboard />
        )
        wrapper.setState({ loading: false })
    })

    it('should render correctly', () => expect(wrapper).toMatchSnapshot())

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })

    it('should render a <NoteList /> ', () => {
        expect(wrapper.containsMatchingElement(
            <NoteList noteList={wrapper.instance().noteList}
                onClickAdd={wrapper.instance().onClickAdd}
                onClickDelete={wrapper.instance().onClickDelete}
                onClickEdit={wrapper.instance().onClickEdit} />
        )).toEqual(true)
    })

    it('should render a <ErrorDisplayer /> ', () => {
        wrapper.setState({ error: true })
        expect(wrapper.containsMatchingElement(
            <ErrorDisplayer />
        )).toEqual(true)
    })

    it('should render a <NoteModal /> ', () => {
        wrapper.setState({ showModal: true })
        expect(wrapper.containsMatchingElement(
            <NoteModal />
        )).toEqual(true)
    })

    it('should render a <YesNoModal /> ', () => {
        wrapper.setState({ showYesNoModal: true })
        expect(wrapper.containsMatchingElement(
            <YesNoModal />
        )).toEqual(true)
    })

    describe('while "loading" is true', () => {
        let wrapper
        beforeEach(() => {
            wrapper = enzyme.shallow(
                <NoteDashboard />
            )
            wrapper.setState({ loading: true })
        })

        it('should render a <Preloader />', () => {
            expect(wrapper.containsMatchingElement(
                <Preloader />
            )).toEqual(true)
        })
    })
})