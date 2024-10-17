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
        alert(`Solicitud de adopción enviada para ${selectedPet.nombre}\n\nDetalles del solicitante:\n${JSON.stringify(formData, null, 2)}`);
        console.log(`Solicitud de adopción enviada para ${selectedPet.nombre}`);
        console.log('Detalles del solicitante:', formData);
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
