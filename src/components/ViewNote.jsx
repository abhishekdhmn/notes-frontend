import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import '../css/InputNote.css'
import { useNavigate, useParams } from "react-router-dom"

function ViewNote() {

    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")

    const param = useParams();

    const navigate = useNavigate();

    const notes = useSelector(state => state.notes.value)

    useEffect(() => {
        const tempNote = notes.notesValue.find((note) => note.id == param.id)
        setTitle(tempNote.title);
        setNote(tempNote.note);
    }, [])

    return (
        <div className="input-container">
            <h3>Enter title</h3>

            <div className="input-box">
                <input type="text" value={title} readOnly />
            </div>

            <h3>Enter note</h3>

            <div className="note-box">
                <textarea type="text" value={note} readOnly />
            </div>

            <button className="input-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default ViewNote