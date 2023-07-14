import {AppBar, Button, Toolbar} from '@mui/material';
import { useHistory } from 'react-router-dom'



export default function NavBar() {
    const history = useHistory()
    function checkout() {
        history.push("/order")
      }

      function home() {
        history.push("/")
      }

      function customerInfo () {
        history.push('/pizzaform')
      }
return  (<AppBar position="fixed">
<Toolbar> Zach's Feedback
<Button color='success' variant='contained' onClick={home} style={{marginLeft:'10px'}}>Feeling</Button>
<Button color='success' variant='contained' onClick={customerInfo} style={{marginLeft:'10px'}}>Understanding</Button>
<Button color='success' variant='contained' style={{marginLeft:'10px'}} onClick={checkout}>Support</Button>
<Button color='success' variant='contained' style={{marginLeft:'10px'}} onClick={checkout}>Comments</Button>
<Button color='success' variant='contained' style={{marginLeft:'10px'}} onClick={checkout}>Submit</Button>
</Toolbar>
</AppBar>)
}