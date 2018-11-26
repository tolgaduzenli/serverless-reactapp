import axios from 'axios'
const API_URL = "https://7vsntirtje.execute-api.us-east-1.amazonaws.com/dev"
const GET_URL = API_URL + '/notes'
const POST_URL = API_URL + '/notes'
const PUT_URL = API_URL + '/notes/'
const DELETE_URL = API_URL + '/notes/'

export const getAllNotesFromService = () => {
    return axios.get(GET_URL)
}

export const saveNewNote = (title, description) => {
    return axios.post(POST_URL, { title, description })
}

export const updateNote = (id, title, description) => {
    return axios.put(PUT_URL + id, { title, description })
}

export const deleteNote = (id) => {
    return axios.delete(DELETE_URL + id)
}