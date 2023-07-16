import { TextField, Button } from "@mui/material"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"
import Swal from "sweetalert2"


function Feeling() {
    const history = useHistory()
    const dispatch = useDispatch()


    const [feelingValue, setFeelingValue] = useState("");
    const handleTextChange = (event) => {
        setFeelingValue(event.target.value)
    }

    const feelingObject = {
        feeling: feelingValue
    }


    function feelingPush() {

        if (feelingValue !== '' && feelingValue >= 0 && feelingValue <= 5) {
            dispatch({
              type: "SET_FEELING_LOCAL",
              payload: feelingObject
            });
            history.push("/understanding")
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Incorrect Value Given',
              text: 'Please enter a number between 1-5 and try again!',
            });
          }
          
            
    }


    return (
        <div style={{ marginTop: '100px' }}>
            <h1>How are you feeling today?</h1>
            <TextField id="outlined-basic" label="How are you feeling on a scale of 1-5?" variant="outlined" style={{ width: '400px' }} type='number' onChange={handleTextChange} />
            <Button variant="contained" style={{ margin: '10px' }} onClick={feelingPush}>Next</Button>
        </div>
    )
}

export default Feeling