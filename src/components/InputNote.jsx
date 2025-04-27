import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { sendNotes, updateNote } from "../features/notesSlice"
import '../css/InputNote.css'
import { useSearchParams } from "react-router-dom"

function InputNote() {

    const [title, setTitle] = useState("")
    const [note, setNote] = useState("")

    const dispatch = useDispatch()
    
    const notes = useSelector(state => state.notes.value)

    const [id, setId] = useState();

    const [param,setParam] = useSearchParams()

    const key = param.get("noteKey");

    
    useEffect(() => {
        if(key) {
            let note1 = notes.notesValue.find(notetemp => notetemp.id==key)
            
            setTitle(note1.title)
            setNote(note1.note)
            setId(note1.id)
            
        }    
    },[])

    const addNote = () => {

        const tempUpdateNote = {
            title, note,id:id
        }

        const tempNote = {
            title, note
        }
        
        key ? dispatch(updateNote(tempUpdateNote)) : dispatch(sendNotes(tempNote)) 
    }

    return (
        <div className="input-container">
            <h3>Enter title</h3>

            <div className="input-box">
                <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>

            <h3>Enter note</h3>

            <div className="note-box">
                <textarea type="text" placeholder="Enter note" value={note} onChange={(e) => setNote(e.target.value)} />
            </div>
            <button className="input-btn" onClick={addNote}>{key ? "Update Note" : "Add Note"}</button>
        </div>
    )
}

export default InputNote