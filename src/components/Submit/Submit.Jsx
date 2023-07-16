import { useSelector } from "react-redux"


function Submit() {

    const currentFeeling = useSelector(store => store.currentFeeling)

console.log(currentFeeling)
    
    return (
        <div style={{marginTop:'100px'}}>
            <>
            <div style={{marginTop:'100px'}}>
            <div  style={{marginTop:'10px'}}>Your Feeling:{currentFeeling.feeling}</div>
            <div  style={{marginTop:'10px'}}>Your Understanding:{currentFeeling.understanding}</div>
            <div  style={{marginTop:'10px'}}>Your Support:{currentFeeling.support}</div>
            <div  style={{marginTop:'10px'}}>Your Comments:{currentFeeling.comments}</div>
            </div>
            </>

    </div>

    )
}



export default Submit