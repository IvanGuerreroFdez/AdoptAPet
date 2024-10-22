import React, { useEffect } from 'react';

function Adoptables({setPets, setLoading}) {
    /* return [
        { id: 1, name: 'Paco', type: 'dog', raza: 'Labrador', age: 'Adult', size: 'Large', img: 'https://i0.wp.com/blog.mascotaysalud.com/wp-content/uploads/2019/09/LABRADOR-RETRIEVER-TUMBADO.jpg?fit=865%2C540&ssl=1' },
        { id: 2, name: 'Elsa', type: 'cat', raza: 'Persa', age: 'Kitten', size: 'Small', img: 'https://i.pinimg.com/originals/88/17/76/8817766ac162223c90892b1afcd9784c.jpg' },
        { id: 3, name: 'Bolt', type: 'dog', raza: 'Husky', age: 'Puppy', size: 'Large', img: 'https://m.media-amazon.com/images/I/71zWXenIN3L.jpg' },
        { id: 4, name: 'Nero', type: 'cat', raza: 'Sphynx', age: 'Adult', size: 'Small', img: 'https://cfa.org/wp-content/uploads/2024/03/Sphynx_About_Tetsu.jpg' },
        { id: 5, name: 'Bailey', type: 'dog', raza: 'Border Collie', age: 'Puppy', size: 'Small', img: 'https://2j2kbordercollies.com/wp-content/uploads/2023/09/Slate-blue-merle-Border-Collie-puppy-for-sale-in-Florida-1024x819.jpg' },
        { id: 6, name: 'Raptor', type: 'cat', raza: 'Siames', age: 'Adult', size: 'Large', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3cRUV3d7E9fjn7RTQsAtVUf5x9pho5aXJw&s' },
    ]; */
    useEffect(() => {
        const fetchPets = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://huachitos.cl/api/animales');
                const data = await response.json();
                setPets(data.data || []);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener los animales:", error);
                setLoading(false);
            }
        };

        fetchPets();
    }, [setPets, setLoading]);

};
export default Adoptables;