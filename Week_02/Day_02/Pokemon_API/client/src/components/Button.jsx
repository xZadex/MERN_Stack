import React from 'react'
import axios from 'axios';

const Button = (props) => {
    const {setPokemon} = props

        
        const handleClick = () => {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response=>{setPokemon(response.data.results)})
        }


    return (
        <div>
            <button className='btn btn-outline-dark mt-5' onClick={handleClick}>Fetch Pokemon</button>
        </div>
    )
}

export default Button






        // fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        // .then(response => {
        // return response.json();
        // }).then(response => {
        //     setPokemon(response.results)
        //     console.log(pokemon);
        // }).catch(err=>{
        //     console.log(err);
        // });