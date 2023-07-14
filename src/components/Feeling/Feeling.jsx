import { TextField, Button } from "@mui/material"
import { useHistory } from "react-router-dom"
function Feeling() {
    const history = useHistory()
    function understandingPush() {
        history.push("/understanding")
      }

    return (
        <div style={{marginTop:'100px'}}>
            <h1>How are you feeling today?</h1>
            <TextField id="outlined-basic" label="How are you feeling on a scale of 1-5?" variant="outlined" style={{width:'400px'}} type="number"/>
            <Button variant="contained" style={{margin:'10px'}} onClick={understandingPush}>Next</Button>
        </div>
    )
}

export default Feeling