import { TextField, Button } from "@mui/material"

function Feeling() {
    return (
        <div style={{marginTop:'100px'}}>
            <h1>How are you feeling today?</h1>
            <TextField id="outlined-basic" label="How are you feeling?" variant="outlined" style={{width:'400px'}}/>
            <Button variant="contained" style={{margin:'10px'}}>Next</Button>
        </div>
    )
}

export default Feeling