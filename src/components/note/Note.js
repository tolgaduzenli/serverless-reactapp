import React from 'react'
import ButtonContainer from './ButtonContainer';

const Note = ({ note, onClickDelete, onClickEdit }) => <tr>
    <td>{note.title}</td>
    <td>{note.description}</td>
    <td>
        <ButtonContainer onClickDelete={onClickDelete} onClickEdit={onClickEdit} />
    </td>
</tr>

export default Note