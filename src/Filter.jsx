export default function Filter({ handleFilterWord, filterWord }) {
    return (
        <div>
            filter shown with:{' '}
            <input onChange={handleFilterWord} value={filterWord} />
        </div>
    )
}
