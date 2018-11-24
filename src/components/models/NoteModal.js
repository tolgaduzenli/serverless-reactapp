import React from 'react'
import Modal from 'react-awesome-modal'
import './NoteModal.css'
class NoteModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newDescription: this.props.note.description,
            newTitle: this.props.note.title,
            _id: this.props.note._id
        }
    }
    onTitleChange = (e) => {
        this.setState({ newTitle: e.target.value })
    }
    onDescriptionChange = (e) => {
        this.setState({ newDescription: e.target.value })
    }
    render() {
        const { closeModal, showModal, onClickModalSave } = this.props
        const { newTitle, newDescription, _id } = this.state
        return <section>
            <Modal
                visible={showModal}
                width="400"
                height="200"
                effect="fadeInUp"
                onClickAway={() => closeModal()}
            >
                <div className="modal-view">
                    <form className="modal-content">
                        <input type="text"
                            placeholder="title"
                            defaultValue={newTitle}
                            onChange={this.onTitleChange} />
                        <input type="text"
                            placeholder="description"
                            defaultValue={newDescription}
                            onChange={this.onDescriptionChange} />
                    </form>
                    <div>
                        <button className="waves-effect waves-light btn-small blue lighten-2"
                            onClick={() => onClickModalSave(newTitle, newDescription, _id)}>Save
                    </button>
                    </div>
                </div>
            </Modal>
        </section>
    }
}

export default NoteModal
