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

  const [searchFilters, setSearchFilters] = useState({
    type: '',
    raza: '',
    age: '',
    size: ''
  });

  const [pets] = useState(Adoptables());

  const FiltrarPets = pets.filter(pet => {
    return (
      (filters.type !== '' || filters.raza !== '' || filters.age !== '' || filters.size !== '') &&
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

      {FiltrarPets.length > 0 ? (
        <Lista pets={FiltrarPets} onPet={setSelectedPet}/>
      ) : (
        <p>No hay mascotas disponibles. Modifica los filtros para ver opciones.</p>
      )}

      {selectedPet && <Adopta selectedPet={selectedPet}/>}




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
