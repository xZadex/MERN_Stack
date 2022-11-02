import React, {useState} from 'react'

const Form = (props) => {
    const [todo, setTodo] = useState({
        checked: false,
        content: ""
    });

    const onChange = (e) => {
        setTodo({checked: false, content:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.todo(todo);
    }

    return (
        <div className='container d-flex justify-content-center align-items-center'>
            <form className='col-6 mt-4' onSubmit={handleSubmit}>
                <div className='d-flex justify-content-center align-items-center gap-4'>
                    <input type="text" className='form-control' onChange={onChange}/>
                    <button type="submit" className='btn btn-primary'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default Form