import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => axios.get(baseUrl).then(response => response.data)

const create = newObject => axios.post(baseUrl, newObject)

const update = (updateOject, id) => axios.put(`${baseUrl}/${id}`, updateOject)

const erase = id => axios.delete(`${baseUrl}/${id}`)

export default { getAll, create, update, erase }
