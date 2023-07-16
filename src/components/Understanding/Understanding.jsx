import { TextField, Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { useState } from "react"


function Understanding() {
    
    const history = useHistory()
    const dispatch = useDispatch()

    const [understandingValue, setUnderstanding] = useState("");

    const handleTextChange = (event) => {
        setUnderstanding(event.target.value)
    }

    const understandingObject = {
        understanding: understandingValue
    }


    function understandingPush() {
        dispatch({
            type: 'SET_UNDERSTANDING_LOCAL',
            payload: understandingObject
        })

        history.push("/support")

    }


    return (
        <div style={{ marginTop: '100px' }}>
            <h1>How well are you understanding the content?</h1>
            <TextField id="outlined-basic" label="How well do you understand on a scale of 1-5?" variant="outlined" type="number" style={{ width: '400px' }} onChange={handleTextChange} />
            <Button variant="contained" style={{ margin: '10px' }} onClick={understandingPush}>Next</Button>
        </div>
    )
}

export default Understanding