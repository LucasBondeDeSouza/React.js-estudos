import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

export default (props) => {

    const [isExpanded, setExpanded] = useState(false)

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(e) {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        e.preventDefault()
    }

    function expand() {
        setExpanded(true)
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        onChange={handleChange}
                        name="title"
                        placeholder="Title"
                        value={note.title}
                        required
                    />
                )}

                <textarea
                    onChange={handleChange}
                    name="content"
                    onClick={expand}
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                    value={note.content}
                    required
                />

                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}