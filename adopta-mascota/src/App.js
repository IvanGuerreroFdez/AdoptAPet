import logo from './logo.svg';
import './App.css';
import Filtrar from './components/Filtrar';
import Adoptables from './components/Adoptables';
import Lista from './components/Lista';
import Adopta from './components/Adopta';
import React, { useState } from 'react';

function App() {
  const [filters, setFilters] = useState({
    type: '',
    raza: '',
    age: '',
    size: ''
  });

  const [selectedPet, setSelectedPet] = useState(null);

  const [pets, setPets] = useState(Adoptables());

  const FiltrarPets = pets.filter(pet => {
    return (
      (filters.type === '' || pet.type === filters.type) &&
      (filters.raza === '' || pet.raza === filters.raza) &&
      (filters.age === '' || pet.age === filters.age) &&
      (filters.size === '' || pet.size === filters.size)
    );
  });

  const handleFilterChange = (NewFiltro) => {
    setFilters(NewFiltro);
  };

  return (
    <div className="App">
      <h1>Adopta ya!!!</h1>

      <Filtrar filter={filters} onFiltrar={handleFilterChange}/>

      <Lista pets={FiltrarPets} onPet={setSelectedPet}/>

      <p><b>Gracias por elegir una mascota ^^</b></p>

      {selectedPet && <Adopta onPet={selectedPet}/>}




      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
