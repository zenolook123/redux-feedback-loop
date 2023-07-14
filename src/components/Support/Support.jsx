import { TextField, Button } from "@mui/material"

function Support() {
    return (
        <div style={{marginTop:'100px'}}>
            <h1>How well are you being supported?</h1>
            <TextField id="outlined-basic" label="How supported are you?" variant="outlined" style={{width:'400px'}}/>
            <Button variant="contained" style={{margin:'10px'}}>Next</Button>
        </div>
    )
}

export default Support