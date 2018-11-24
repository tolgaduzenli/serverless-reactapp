import React from 'react'
import './ButtonContainer.css'
class ButtonContainer extends React.Component {
    render() {
        const { onClickDelete, onClickEdit } = this.props
        return <div className="button-container">
            <button className="waves-effect waves-light btn-small orange lighten-2" onClick={onClickEdit}>Edit</button>
            <button className="waves-effect waves-light btn-small red lighten-1" onClick={onClickDelete}>Delete</button>
        </div>
    }
}

export default ButtonContainer