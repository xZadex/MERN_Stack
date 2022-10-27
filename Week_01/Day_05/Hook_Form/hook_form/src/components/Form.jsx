import React, { useState } from  'react';
    
    
const Form = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    
    return(
        <div>
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirst(e.target.value) }/>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLast(e.target.value) }/>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) }/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setPassword2(e.target.value) }/>
            </div>
        </form>

        <div>
            <p>First Name: {first}</p>
            <p>Last Name: {last}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirmed Password: {password2}</p>
        </div>
        </div>
    );
};
    
export default Form;