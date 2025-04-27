import { useSelector, useDispatch } from "react-redux"
import '../css/DisplayNote.css'
import { deleteNote, fetchNotes } from "../features/notesSlice"
import { Link } from "react-router-dom"
import { useEffect } from "react"

function DisplayNotes() {

    const notes = useSelector(state => state.notes.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNotes())
    },[])

    if(notes.isLoading) {
        return <h1 className="loading-logo">Loading</h1>
    }

    

    return (
        <div className="notes-container">

            <h2>All Notes</h2>

            {
                notes.notesValue.map(note => (
                    <div className="notes-box" key={note.id}>
                        <h2 className="note-title">{note.title}</h2>
                        <hr />
                        <p className="note-body">{note.note}</p>
                        <button className="display-btn" ><Link to={`/?noteKey=${note.id}`}>Edit</Link></button>
                        <button className="display-btn" ><Link to={`/notes/${note.id}`}>View</Link></button>
                        <button className="display-btn" onClick={() => navigator.clipboard.writeText(`${note.title}  \n \n${note.note}`)}>Copy</button>
                        <button className="display-btn" onClick={() => {dispatch(deleteNote(note.id))}} >Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayNotes