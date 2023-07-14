import { TextField, Button } from "@mui/material"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useState } from "react"

function Feeling() {
    const history = useHistory()
    const dispatch = useDispatch()


    const [feelingValue, setFeelingValue] = useState("");
    const handleTextChange = (event) => {
        setFeelingValue(event.target.value)
    }


    function understandingPush() {
        const feedbackObject = [{
            id:1,
            feeling:feelingValue
        }]
        history.push("/understanding")
        dispatch({
            type:"SET_FEEDBACK_LOCAL",
            payload: feedbackObject
        })
      }

    return (
        <div style={{marginTop:'100px'}}>
            <h1>How are you feeling today?</h1>
            <TextField id="outlined-basic" label="How are you feeling on a scale of 1-5?" variant="outlined" style={{width:'400px'}} type="number" onChange={handleTextChange}/>
            <Button variant="contained" style={{margin:'10px'}} onClick={understandingPush}>Next</Button>
        </div>
    )
}

export default Feeling