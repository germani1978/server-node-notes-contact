export default function Notification({ message }) {
    const style = {
        color: 'black',
        padding: '3px',
        border: '1px solid green',
        textAlign: 'center',
        background: 'lightgreen',
        fontWeight: 'bold'
    }
    return message === null ? null : <p style={style}>{message}</p>
}
