import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import Swal from "sweetalert2"


function Submit() {
    const currentFeeling = useSelector(store => store.currentFeeling)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = () => {

        if (currentFeeling.feeling !== 0 || currentFeeling.understanding !== 0 || currentFeeling.support !== 0 || currentFeeling.comments !== '') {
            Swal.fire({
                title:'Feedback successfully submitted!',
                text:'Have a great day!',
                icon:'success'
            })
            axios.post('/feedback', currentFeeling).then(res => {
                dispatch({
                    type:'EMPTY_CURRENT'
                })
                history.push("/")
            }).catch(err => {
                console.log('error submitting feedback', err)
            })

        } else {
            Swal.fire({
                title:'You are missing a value',
                text:'Please use the navigation bar at the top and resubmit when completed',
            })
        }
    }



    return (
        <div style={{ marginTop: '100px' }}>
            <>
                <div style={{ marginTop: '100px' }}>
                    <h1>Your feedback for today</h1>
                    <h3>You can change your answers at anytime using the navigation bar</h3>
                    <div style={{ marginTop: '10px' }}>Your Feeling: {currentFeeling.feeling}</div>
                    <div style={{ marginTop: '10px' }}>Your Understanding: {currentFeeling.understanding}</div>
                    <div style={{ marginTop: '10px' }}>Your Support: {currentFeeling.support}</div>
                    <div style={{ marginTop: '10px' }}>Your Comments: {currentFeeling.comments}</div>
                    <button style={{ marginTop: '10px' }} onClick={handleSubmit}>Submit Feedback</button>
                </div>
            </>

        </div>

    )
}



export default Submit