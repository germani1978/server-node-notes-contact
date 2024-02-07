export default function PersonsForm({
    handleInputName,
    handleInputNum,
    newName,
    newNum
}) {
    return (
        <>
            <h2>Add a nw</h2>

            <div>
                name: <input onChange={handleInputName} value={newName} />
            </div>
            <div>
                number: <input onChange={handleInputNum} value={newNum} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </>
    )
}
