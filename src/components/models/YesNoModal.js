import React from 'react'
import Modal from 'react-awesome-modal'
import './YesNoModal.css'

class YesNoModal extends React.Component {

    render() {
        const { onClickYes, onClickNo, note, showModal } = this.props
        return <section>
            <Modal
                visible={showModal}
                width="400"
                height="200"
                effect="fadeInUp"
                onClickAway={() => onClickNo()}
            >
                <div className="modal-view">
                    <div>Do you want to remove the note</div>
                    <div>Title: {note.title}</div>
                    <div>Description: {note.description}</div>
                    <div className="button-group">
                        <button className="waves-effect waves-light btn-small green lighten-1"
                            onClick={() => onClickYes(note._id)}>Yes
                        </button>
                        <button className="waves-effect waves-light btn-small grey"
                            onClick={() => onClickNo()}>No
                        </button>
                    </div>
                </div>
            </Modal>
        </section>
    }
}

export default YesNoModal
