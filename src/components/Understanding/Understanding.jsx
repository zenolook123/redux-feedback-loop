import { TextField, Button } from "@mui/material"
import { useHistory } from "react-router-dom"

function Understanding() {
    const history = useHistory()
    function supportedPush() {
        history.push("/support")
      }


    return (
        <div style={{marginTop:'100px'}}>
            <h1>How well are you understanding the content?</h1>
            <TextField id="outlined-basic" label="How well do you understand on a scale of 1-5?" variant="outlined" type="number" style={{width:'400px'}}/>
            <Button variant="contained" style={{margin:'10px'}} onClick={supportedPush}>Next</Button>
        </div>
    )
}

export default Understanding