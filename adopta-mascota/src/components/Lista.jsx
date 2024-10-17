import React from 'react';
import '../styles/Animalitos.css';

function Lista({pets, onPet }){
    return  <div align="center">
        <h2>Mascotas disponibles</h2>

        <ul>
            {pets.map(pet => (
                <ul key={pet.id} style={{marginBottom: '20px'}}>
                    <img src={pet.img} alt={pet.name} className='animalitos'/>
                    <h4>{pet.name}</h4>
                    <p>{pet.raza} / {pet.age} / {pet.size}</p>
                    <button onClick={() => onPet(pet)}>Adoptar</button>
                    <hr style={{width:'50%', border:'1px solid #000000'}}/>
                </ul>
            ))}
        </ul>
    </div>
};
export default Lista;
