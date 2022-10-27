import React from 'react';

const PersonCard = props => {
    return(
        <div className='container text-light border border-secondary text-center mb-5'>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
export default PersonCard;