import React from 'react'
import NoteList from './NoteList'
import NoteModal from '../models/NoteModal'
import Preloader from '../loader/Preloader';
import ErrorDisplayer from '../error/ErrorDisplayer'
import YesNoModal from '../models/YesNoModal'
import { getAllNotesFromService, saveNewNote, updateNote, deleteNote } from '../../service/APICall'

class NoteDashboard extends React.Component {
    constructor() {
        super()
        this.state = {
            noteList: null,
            showModal: false,
            showYesNoModal: false,
            note: {
                title: "",
                description: ""
            },
            loading: false,
            error: false
        }
    }
    componentDidMount() {
        this.getAllNotes()
    }

    getAllNotes = () => {
        this.setState({ loading: true })
        getAllNotesFromService().then(result => {
            this.setState({
                noteList: result.data,
                loading: false,
                error: false
            })
        }).catch(err => {
            console.log(err)
            this.setState({ loading: false, error: true })
        })
    }

    onClicAddButton = () => {
        const emptyNote = {
            title: "",
            description: ""
        }
        this.setState({ note: emptyNote })
        this.toggleModal()
    }

    onClickEditButton = (selectedNote) => {
        this.setState({ note: selectedNote })
        this.toggleModal()
    }

    onClickDeleteButton = (selectedNote) => {
        this.setState({ note: selectedNote })
        this.toggleYesNoModal()
    }

    onClickDeleteYes = (id) => {
        this.toggleYesNoModal()
        this.setState({ loading: true })
        deleteNote(id).then(() => {
            this.getAllNotes()
        }).catch(err => {
            this.setState({ error: true, loading: false })
            console.log(err)
        })
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    }

    toggleYesNoModal = () => {
        this.setState({ showYesNoModal: !this.state.showYesNoModal });
    }

    onClickModalSave = (newTitle, newDescription, _id) => {
        this.setState({ loading: true })
        this.toggleModal()
        if (_id === undefined || _id === null) {
            saveNewNote(newTitle, newDescription).then(result => {
                this.getAllNotes()
            }).catch(err => {
                console.log(err)
                this.setState({ error: true, loading: false })
            })
        } else {
            updateNote(_id, newTitle, newDescription).then(result => {
                this.getAllNotes()
            }).catch(err => {
                console.log(err)
                this.setState({ error: true, loading: false })
            })
        }
    }

    renderPreLoader = () => {
        return <Preloader />
    }

    renderDashboard = () => {
        const { noteList, showModal, note, error, showYesNoModal } = this.state
        return <div>
            {error && <ErrorDisplayer />}
            <NoteList noteList={noteList}
                onClickAdd={this.onClicAddButton}
                onClickDelete={this.onClickDeleteButton}
                onClickEdit={this.onClickEditButton} />
            {showModal && <NoteModal closeModal={this.toggleModal}
                showModal={showModal}
                onClickModalSave={this.onClickModalSave}
                note={note}
            />}
            {showYesNoModal && <YesNoModal onClickNo={this.toggleYesNoModal}
                showModal={showYesNoModal}
                onClickYes={this.onClickDeleteYes}
                note={note} />}
        </div>
    }

    render() {
        if (this.state.loading) {
            return this.renderPreLoader()
        } else {
            return this.renderDashboard()
        }
    }
}

export default NoteDashboard