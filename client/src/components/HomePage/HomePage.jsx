import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../redux/actions/actions';

// <-- Importamos los componentes -->
import Cards from '../Cards/Cards';

const HomePage = () => {

    const dispatch = useDispatch();

    const dogs = useSelector((state) => state.dogs);  // Obtiene la lista de perros del estado global.

    useEffect(() => {
        dispatch(getAllDogs());
    }, []);

    return (
        <div>
            <Cards dogs={dogs} />
        </div>
    )
};

export default HomePage;  // Comentario para mantener el commint. Otro comentario 