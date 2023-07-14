import { TextField, Button } from "@mui/material"

function Understanding() {
    return (
        <div style={{marginTop:'100px'}}>
            <h1>How well are you understanding the content?</h1>
            <TextField id="outlined-basic" label="How well do you understand?" variant="outlined" style={{width:'400px'}}/>
            <Button variant="contained" style={{margin:'10px'}}>Next</Button>
        </div>
    )
}

export default Understanding