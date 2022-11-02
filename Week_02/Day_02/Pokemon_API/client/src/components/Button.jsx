import React from 'react'

const Button = (props) => {
    const {pokemon, setPokemon} = props

    const handleClick = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => {
        return response.json();
        }).then(response => {
            setPokemon(response.results)
            console.log(pokemon);
        }).catch(err=>{
            console.log(err);
        });
    }
    return (
        <div>
            <button className='btn btn-outline-dark mt-5' onClick={handleClick}>Fetch Pokemon</button>
        </div>
    )
}

export default Button