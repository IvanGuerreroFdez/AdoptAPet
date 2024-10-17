import React from 'react';

function Filtrar ({filter, onFiltrar}){
    const handleInputChange = (e) => {
        const {name, data} = e.target;

        onFiltrar({
            ...filter,
            [name]: data
        });
    };

    return <div>
        <h3>Mascotas</h3>

        <label>Tipo de mascota: </label>
        <select name="type" value={filter.type} onChange={handleInputChange}>
            <option value="Dog">Perro</option>
            <option value="Cat">Gato</option>
        </select>

        <label>Raza: </label>
        <select name="raza" value={filter.raza} onChange={handleInputChange}>
            <option value="Dog">Labrador</option>
            <option value="Dog">Husky</option>
            <option value="Dog">Border Collie</option>

            <option value="Cat">Persa</option>
            <option value="Cat">Sphynx</option>
            <option value="Cat">Siames</option>
        </select>

        <label>Edad: </label>
        <select name="age" value={filter.age} onChange={handleInputChange}>
            <option value="Puppy">Cachorro</option>
            <option value="Adult">Adulto</option>
        </select>

        <label>Tamaño: </label>
        <select name="size" value={filter.size} onChange={handleInputChange}>
            <option value="Small">Pequeño</option>
            <option value="Large">Grande</option>
        </select>
    </div>
};
export default Filtrar;
