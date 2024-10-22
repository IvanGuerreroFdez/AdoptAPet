import './App.css';
import Filtrar from './components/Filtrar';
import Lista from './components/Lista';
import Adopta from './components/Adopta';
import Adoptables from './components/Adoptables';
import React, { useState} from 'react';

function App() {
  const [filters, setFilters] = useState({
    type: '',
    raza: '',
    age: '',
    size: ''
  });

  const [selectedPet, setSelectedPet] = useState(null);
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const FiltrarPets = pets.filter(pet => {
    return (
      (filters.type === '' || pet.tipo === filters.type) && 
      (filters.edad === '' || pet.edad === filters.edad) &&
      (filters.genero === '' || pet.genero === filters.genero)
    );
  });

  const handleFilterChange = (NewFiltro) => {
    setFilters(NewFiltro);
  };

  return (
    <div className="App">
      <h1>Adopta ya!!!</h1>

      <Adoptables setPets={setPets} setLoading={setLoading}/>

      <Filtrar filter={filters} onFiltrar={handleFilterChange} pets={pets}/>

      {loading ? (
        <p>Cargando mascotas...</p>
      ) : FiltrarPets.length > 0 ? (
        <Lista pets={FiltrarPets} onPet={setSelectedPet}/>
      ) : (
        <p>No hay mascotas disponibles. Modifica los filtros para ver opciones.</p>
      )}

      {selectedPet && <Adopta selectedPet={selectedPet}/>}
    </div>
  );
}

export default App;
