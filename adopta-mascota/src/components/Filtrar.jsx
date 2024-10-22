import React from 'react';

function Filtrar ({filter, onFiltrar, pets}){
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        onFiltrar({
            ...filter,
            [name]: value
        });
    };

    const tipos = [...new Set(pets.map(pet => pet.tipo))];
    const edades = [...new Set(pets.map(pet => pet.edad))];
    const generos = [...new Set(pets.map(pet => pet.genero))];

    return <div>
        {/*<h3>Mascotas</h3>*/}

        {/* <label>Tipo de mascota: </label>
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
        </select> */}

        {/* No es necesario
        <button onClick={onBuscar}>Buscar</button>
        */}

        <label> | Tipo de mascota: </label>
        <select name="type" value={filter.type} onChange={handleInputChange}>
            <option value="">Cualquiera</option>
            {tipos.map((tipo, idx) => (
                <option key={idx} value={tipo}>{tipo}</option>
            ))}
        </select>

        <label> | Edad: </label>
        <select name="edad" value={filter.edad} onChange={handleInputChange}>
            <option value="">Cualquiera</option>
            {edades.map((edad, idx) => (
                <option key={idx} value={edad}>{edad}</option>
            ))}
        </select>

        <label> | Género: </label>
        <select name="genero" value={filter.genero} onChange={handleInputChange}>
            <option value="">Cualquiera</option>
            {generos.map((genero, idx) => (
                <option key={idx} value={genero}>{genero}</option>
            ))}
        </select>
        <label> | </label>   
    </div>
};
export default Filtrar;
