import axios from 'axios'

export const getAllNotesFromService = () => {
    return axios.get('/notes')
}

export const saveNewNote = (title, description) => {
    return axios.post('/notes', { title, description })
}

export const updateNote = (id, title, description) => {
    return axios.put('/notes/' + id, { title, description })
}

export const deleteNote = (id) => {
    return axios.delete('/notes/' + id)
}