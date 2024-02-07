import { useEffect, useState } from 'react'
import Persons from './Persons'
import PersonsForm from './PersonsForm'
import Filter from './Filter'
import noteService from './services/note'
import Notification from './Notification'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [filterWord, setFilterWord] = useState('')
    const [message, setMessage] = useState(null)

    useEffect(() => {
        noteService.getAll().then(inittialData => {
            setPersons(inittialData)
        })
    }, [])

    const includedName = name =>
        persons.filter(
            person => person.name.toLowerCase() === name.toLowerCase()
        ).length !== 0

    const addNote = newObject => {
        noteService.create(newObject).then(returnobject => {
            setPersons([...persons, returnobject.data])
        })
    }

    const erase = id => {
        if (window.confirm('Desea borrar'))
            noteService
                .erase(id)
                .then(() => {
                    console.log('try')
                    setPersons(persons.filter(person => person.id !== id))
                    showMessage('Delete successfuly')
                })
                .catch(err => {
                    showMessage(`Error ${err.message}`)
                })
    }

    const user = name => {
        return persons.filter(
            person => person.name.toLowerCase() === name.toLowerCase()
        )[0]
    }

    const showMessage = msg => {
        setMessage(msg)
        setTimeout(() => setMessage(null), 1500)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (newName === '' || newNum === '') return //si esta vacio algun campo

        if (includedName(newName)) {
            if (
                window.confirm(
                    `${newName} is already included replace the old number with the new one`
                )
            ) {
                const tempUser = { ...user(newName), number: newNum }
                noteService.update(tempUser, tempUser.id)

                showMessage('Update phone number')
            }
        } else {
            addNote({ name: newName, number: newNum })
            showMessage('Add new contact')
        }
        setNewName('')
        setNewNum('')
    }

    const handleFilterWord = e => setFilterWord(e.target.value)
    const handleInputName = e => setNewName(e.target.value)
    const handleInputNum = e => setNewNum(e.target.value)

    return (
        <div>
            <Notification message={message} />

            <h2>Phonebook</h2>

            <form onSubmit={handleSubmit}>
                <Filter
                    handleFilterWord={handleFilterWord}
                    filterWord={filterWord}
                />

                <PersonsForm
                    handleInputName={handleInputName}
                    handleInputNum={handleInputNum}
                    newName={newName}
                    newNum={newNum}
                />
            </form>

            <h2>Numbers</h2>

            <Persons persons={persons} filterWord={filterWord} erase={erase} />
        </div>
    )
}

export default App
