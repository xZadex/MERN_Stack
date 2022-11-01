import React from 'react';

const Form = (props) => {

    const { boxDetails, setBoxDetails } = props;
    const { setBoxes } = props;

    const onChange = (e) => {setBoxDetails({...boxDetails,[e.target.name]: e.target.value,})}

    const createBox = (e) => {
        e.preventDefault();
        setBoxes(boxes => [...boxes, { "color": boxDetails.color, "size": boxDetails.size }]);
        e.target.reset()
    }

    return (
        <div>
            <form onSubmit={createBox} className="col-6">
                <label htmlFor="color">Color</label>
                <input onChange={onChange} type="text" name="color" className='form-control' />
                <label htmlFor="size">Size</label>
                <input onChange={onChange} type="text" name="size" className='form-control'/>
                <button value="color" className='btn btn-outline-dark mt-3'>Add</button>
            </form>
        </div>
    )
}

export default Form;