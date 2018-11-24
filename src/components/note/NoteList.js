import React from 'react'
import Note from './Note'

class NoteList extends React.Component {
    render() {
        const { noteList, onClickDelete, onClickEdit, onClickAdd } = this.props
        return <div>
            <table className="responsive-table centered striped">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {noteList && noteList.map((note, index) => {
                        return <Note key={index} note={note} onClickDelete={() => onClickDelete(note)} onClickEdit={() => onClickEdit(note)} />
                    })}
                </tbody>
            </table>
            <div className="fixed-action-btn">
                <button className="btn-floating btn-large waves-effect waves-light green" onClick={onClickAdd}>
                    <i className="material-icons">add</i></button>
            </div>
        </div>
    }
}

export default NoteList