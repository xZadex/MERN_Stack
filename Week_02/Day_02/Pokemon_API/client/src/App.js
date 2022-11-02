import './App.css';
import Button from './components/Button';
import React, {useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  return (
    <div className="App">
      <Button pokemon={pokemon} setPokemon={setPokemon}/>
      <ul>
        {
          pokemon.map((poke, i) => <li key={i}>{poke.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
