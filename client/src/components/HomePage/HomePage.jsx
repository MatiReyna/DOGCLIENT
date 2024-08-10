import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllDogs } from '../../redux/actions/actions';

// <-- Importamos los componentes -->
import Cards from '../Cards/Cards';

const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllDogs());
    }, []);

    return (
        <div>
            <Cards dog={dog} />
        </div>
    )
};

export default HomePage;  // Comentario para mantener el commint. 