import { TextField, Button } from "@mui/material"

function Comments() {
    return (
        <div style={{marginTop:'100px'}}>
            <h1>Any comments you want to leave?</h1>
            <TextField id="outlined-basic" label="Leave a comment!" variant="outlined" style={{width:'400px'}}/>
            <Button variant="contained" style={{margin:'10px'}}>Next</Button>
        </div>
    )
}

export default Comments