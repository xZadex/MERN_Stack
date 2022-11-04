import React from 'react'
import { useNavigate } from "react-router-dom";
import {useState} from 'react'


const myOptions = ['planets', 'people']
const Form = () => {
    const [current, setCurrent] = useState("people");
    const [id, setId] = useState("1");
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate(`/${current}/${id}`)
    }

    return (
        <div>
            {/* <p className='text-light'>Temp: {tempState} {tempState}</p>
            <p className='text-light'>Current: {current} {current}</p> */}
            <form className='d-flex gap-4 justify-content-center align-items-center' onSubmit={handleClick}>
            <div className='form-group d-flex gap-2'>
                <label className='text-light'>Search for: </label>
                <select className='form-select' value={current} onChange={e => setCurrent(e.target.value)}>
                    {myOptions.map( (option, idx) => 
                        <option key={idx} value={option}>{option}</option>
                    )}
                </select>
            </div>
            <div className='form-group d-flex gap-2 justify-content-center align-items-center col-2'>
                <label className='text-light'>ID: </label>
                <input type="text" className='form-control p-2' value={id} onChange={(e)=>setId(e.target.value)} />
            </div>
                <button type='submit' className='btn btn-outline-primary px-4'>Search</button>
            </form>
        </div>
    )
}

export default Form