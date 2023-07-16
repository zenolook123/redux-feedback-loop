import { TextField, Button } from "@mui/material"
import { useState } from "react";
function Comments() {


    const [commentsValue, setCommentsValue] = useState("");

    const handleTextChange = (event) => {
        setCommentsValue(event.target.value)
    }

    const commentsObject = [{
        comments:commentsValue
    }]


    function commentsPush() {
        dispatch({
            type:"SET_COMMENTS_LOCAL",
            payload: commentsObject
        })

        history.push("/comments")
      }


    return (
        <div style={{marginTop:'100px'}}>
            <h1>Any comments you want to leave?</h1>
            <TextField id="outlined-basic" label="Leave a comment!" variant="outlined" style={{width:'400px'}} onChange={handleTextChange}/>
            <Button variant="contained" style={{margin:'10px'}} onClick={commentsPush}>Next</Button>
        </div>
    )
}

export default Comments