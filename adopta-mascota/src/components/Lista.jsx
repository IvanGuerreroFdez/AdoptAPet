import React from 'react';
import '../styles/Animalitos.css';

function Lista({pets, onPet }){
    return  <div align="center">
        <h2>Mascotas disponibles</h2>

        <ul>
            {pets.map(pet => (
                <li key={pet.id} style={{ marginBottom: '20px', listStyleType: 'none' }}>
                    <img src={pet.imagen} alt={pet.nombre} className='animalitos' />
                    <h4>{pet.nombre}</h4>
                    <p>{pet.edad} / {pet.genero}</p>
                    <button onClick={() => onPet(pet)}>Adoptar</button>
                    <hr style={{ width: '50%', border: '1px solid #000000' }} />
                </li>
            ))}
        </ul>
    </div>
};
export default Lista;
