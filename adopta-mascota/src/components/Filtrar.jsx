import React from 'react';

function Filtrar ({filter, onFiltrar, onBuscar}){
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        onFiltrar({
            ...filter,
            [name]: value
        });
    };

    return <div>
        <h3>Mascotas</h3>

        <label>Tipo de mascota: </label>
        <select name="type" value={filter.type} onChange={handleInputChange}>
            <option value=""></option>
            <option value="dog">Perro</option>
            <option value="cat">Gato</option>
        </select>

        <label>Raza: </label>
        <select name="raza" value={filter.raza} onChange={handleInputChange}>
            <option value=""></option>
            <option value="Labrador">Labrador</option>
            <option value="Husky">Husky</option>
            <option value="Border Collie">Border Collie</option>
            <option value="Persa">Persa</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Siames">Siames</option>
        </select>

        <label>Edad: </label>
        <select name="age" value={filter.age} onChange={handleInputChange}>
            <option value=""></option>
            <option value="Puppy">Cachorro</option>
            <option value="Adult">Adulto</option>
        </select>

        <label>Tamaño: </label>
        <select name="size" value={filter.size} onChange={handleInputChange}>
            <option value=""></option>
            <option value="Small">Pequeño</option>
            <option value="Large">Grande</option>
        </select>

        {/* No es necesario
        <button onClick={onBuscar}>Buscar</button>
        */}
    </div>
};
export default Filtrar;
