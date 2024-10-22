import React from 'react';
import '../styles/Animalitos.css';

function Lista({pets, onPet }){
    return  <div align="center">
        <h2>Mascotas disponibles!!!</h2>

        <ul>
            {pets.map(pet => (
                <li key={pet.id} style={{ marginBottom: '20px', listStyleType: 'none' }}>
                    <img src={pet.imagen} alt={pet.nombre} className='animalitos' />
                    <h3><b>{pet.nombre}</b></h3>
                    <p>{pet.edad} / {pet.genero}</p>
                    <a href={pet.url} target="_blank" rel="noopener noreferrer">Más información</a>
                    <p></p>
                    <button className="adopt-button" onClick={() => onPet(pet)}>Adoptar</button>
                    <hr style={{ width: '50%', border: '1px solid #000000' }} />
                </li>
            ))}
        </ul>
    </div>
};
export default Lista;
