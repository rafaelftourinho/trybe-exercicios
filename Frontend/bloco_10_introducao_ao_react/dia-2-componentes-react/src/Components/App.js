import pokemons from '../data';
import Pokedex from './Pokedex';
import '../styles/App.css'

function App() {
  return (
    <div>
      <h1 className='title'>Pokedex</h1>
      <Pokedex pokemons={pokemons} />
    </div>
    
  );
}

export default App;
