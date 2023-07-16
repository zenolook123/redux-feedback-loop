import { TextField, Button } from "@mui/material"
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { useState } from "react"
import Swal from "sweetalert2"


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

        if (supportValue != '' && supportValue >= 0 && supportValue <= 5){
            dispatch({
                type: "SET_SUPPORT_LOCAL",
                payload: supportObject
            })
            history.push("/comments")
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect Value Given',
                text: 'Please, enter a number between 1-5 and try again!',
            })
        }
       

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