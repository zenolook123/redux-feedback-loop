import { TextField, Button } from "@mui/material"
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { useState } from "react"

function Support() {
    const [supportValue, setSupportValue] = useState("");
    const dispatch = useDispatch()
    const history = useHistory()

    const supportObject = {
        support: supportValue
    }

    const handleTextChange = (event) => {
        setSupportValue(event.target.value)
    }

    function supportPush() {

        dispatch({
            type: "SET_SUPPORT_LOCAL",
            payload: supportObject
        })

        history.push("/comments")
    }



    return (
        <div style={{ marginTop: '100px' }}>
            <h1>How well are you being supported?</h1>
            <TextField id="outlined-basic" label="How supported are you on a scale from 1-5?" variant="outlined" type='number' style={{ width: '400px' }} onChange={handleTextChange} />
            <Button variant="contained" style={{ margin: '10px' }} onClick={supportPush}>Next</Button>
        </div>
    )
}

export default Support