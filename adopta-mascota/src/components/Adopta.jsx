import React, { useState } from 'react';

function Adopta({selectedPet}){
     const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Solicitud de adopción enviada para ${selectedPet.name}`);
    };

    return <div>
        <h3>Formulario de Adopción</h3>

        <p>Adoptando: {selectedPet.name}</p>

        <form onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            
            <label>Dirección:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />

            <button type="submit">Enviar Solicitud</button>
        </form>
    </div>
};
export default Adopta;
