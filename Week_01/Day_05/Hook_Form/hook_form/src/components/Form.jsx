import React, { useState } from  'react';
    
    
const Form = (props) => {
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    

    const firstValidation = () => {
        if(first === ""){
            return ""
        } else if(first.length < 2){
            return "First Name must be at least 2 characters"
        }
    }
    const lastValidation = () => {
        if(last === ""){
            return ""
        } else if(last.length < 2){
            return "Last Name must be at least 2 characters"
        }
    }
    const emailValidation = () => {
        if(email === ""){
            return ""
        } else if(email.length < 2){
            return "Email must be at least 2 characters"
        }
    }
    const passValidation = () => {
        if(password === ""){
            return ""
        } else if(password.length < 8){
            return "Password must be at least 8 characters"
        }
    }
    const passConfirmValidation = () => {
        if(password !== password2){
            return "Passwords must match"
        }
    }

    return(
        <div>
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirst(e.target.value) }/>
            </div>
            {firstValidation()}
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLast(e.target.value) }/>
            </div>
            {lastValidation()}
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) }/>
            </div>
            {emailValidation()}
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) }/>
            </div>
            {passValidation()}<br/>
            {passConfirmValidation()}
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