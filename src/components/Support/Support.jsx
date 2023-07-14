import { TextField, Button } from "@mui/material"
import {useHistory} from 'react-router-dom'

function Support() {
    const history = useHistory()
    function commentsPush() {
        history.push("/comments")
      }
    return (
        <div style={{marginTop:'100px'}}>
            <h1>How well are you being supported?</h1>
            <TextField id="outlined-basic" label="How supported are you on a scale from 1-5?" variant="outlined" type='number' style={{width:'400px'}}/>
            <Button variant="contained" style={{margin:'10px'}} onClick={commentsPush}>Next</Button>
        </div>
    )
}

export default Support