import React from 'react'
import { useNavigate } from "react-router-dom";
import {useState} from 'react'


const myOptions = ['planets', 'people']
const Form = (props) => {
    const [tempState, setTempState] = useState({
        current:"planets",
        id:"1"
    })
    const navigate = useNavigate();
    const {current, setCurrent} = props;
    const handleClick = (e) => {
        e.preventDefault();
        setCurrent({...tempState,current:tempState.current,id:tempState.id})
        console.log(tempState.current,tempState.id)
        console.log(current.current, current.id)
        navigate(`/${current.current}/${current.id}`)
    }
    return (
        <div>
            {/* <p className='text-light'>{tempState.current} {tempState.id}</p>
            <p className='text-light'>{current.current} {current.id}</p> */}
            <form className='d-flex gap-4 justify-content-center align-items-center'>
            <div className='form-group d-flex gap-2'>
                <label className='text-light'>Search for: </label>
                <select className='form-select' value={tempState.current} onChange={e => setTempState({...tempState,current:e.target.value})}>
                    {myOptions.map( (option, idx) => 
                        <option key={idx} value={option}>{option}</option>
                    )}
                </select>
            </div>
            <div className='form-group d-flex gap-2 justify-content-center align-items-center col-2'>
                <label className='text-light'>ID: </label>
                <input type="text" className='form-control p-2' value={tempState.id} onChange={(e)=>{setTempState({...tempState,id:e.target.value})}} />
            </div>
                <button onClick={handleClick} className='btn btn-outline-primary px-4'>Search</button>
            </form>
        </div>
    )
}

export default Form