import { useSelector } from "react-redux"


function Submit() {

    const thisFeedback = useSelector(store => store.thisFeedback)
    return (
        <div style={{marginTop:'100px'}}>
        {thisFeedback.map(feedback => {
        return (
            <>
            <div style={{marginTop:'100px'}}>
            <div  style={{marginTop:'10px'}}>Your Feeling:{feedback}</div>
            <div  style={{marginTop:'10px'}}>Your Understanding:{feedback.understanding}</div>
            <div  style={{marginTop:'10px'}}>Your Support:{feedback.support}</div>
            <div  style={{marginTop:'10px'}}>Your Comments:{feedback.comments}</div>
            <div  style={{marginTop:'10px'}}>Your Date:{feedback.date}</div>
            </div>
            </>
        
        
        )
    })}
    </div>

    )
}



export default Submit