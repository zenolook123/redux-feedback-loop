import { TextField, Button } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Swal from "sweetalert2"


function Comments() {

const dispatch = useDispatch()
const history = useHistory()
    const [commentsValue, setCommentsValue] = useState("");

    const handleTextChange = (event) => {
        setCommentsValue(event.target.value)
    }

    const commentsObject = {
        comments:commentsValue
    }


    function commentsPush() {
        if (commentsValue !== '') {
            dispatch({
              type: "SET_COMMENTS_LOCAL",
              payload: commentsObject
            });
            history.push("/submit");
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Missing Comments',
              text: 'Please enter your comments and try again!',
            });
          }
          
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