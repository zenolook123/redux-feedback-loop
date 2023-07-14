import {AppBar, Button, Toolbar} from '@mui/material';
import { useHistory } from 'react-router-dom'



export default function NavBar() {
    const history = useHistory()
    function feelingPush() {
        history.push("/feeling")
      }

      function understandingPush() {
        history.push("/understanding")
      }

      function supportPush () {
        history.push('/support')
      }
      function commentsPush () {
        history.push('/comments')
      }
      function submitPush () {
        history.push('/submit')
      }

return  (<AppBar position="fixed">
<Toolbar> Zach's Feedback
<Button color='success' variant='contained' onClick={feelingPush} style={{marginLeft:'10px'}}>Feeling</Button>
<Button color='success' variant='contained' onClick={understandingPush} style={{marginLeft:'10px'}}>Understanding</Button>
<Button color='success' variant='contained' style={{marginLeft:'10px'}} onClick={supportPush}>Support</Button>
<Button color='success' variant='contained' style={{marginLeft:'10px'}} onClick={commentsPush}>Comments</Button>
<Button color='success' variant='contained' style={{marginLeft:'10px'}} onClick={submitPush}>Submit</Button>
</Toolbar>
</AppBar>)
}