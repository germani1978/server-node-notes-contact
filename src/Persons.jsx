export default function Persons({ persons, filterWord, erase }) {
    return (
        <>
            {persons
                .filter(
                    person =>
                        person.name
                            .toLowerCase()
                            .includes(filterWord.toLowerCase()) ||
                        filterWord === ''
                )
                .map(person => (
                    <div key={person.id}>
                        <p>
                            {person.name} {person.number}
                            <button onClick={() => erase(person.id)}>
                                delete
                            </button>
                        </p>
                    </div>
                ))}
        </>
    )
}
