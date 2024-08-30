import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../redux/actions/actions';

// <-- Importamos los componentes -->
import Cards from '../Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import Pagination from '../Pagination/Pagination';

const HomePage = () => {

    const dispatch = useDispatch();

    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null);
    const [ currentPage, setCurrentPage ] = useState(1)  // Estado para la página actual.

    const dogs = useSelector((state) => state.dogs);  // Obtiene la lista de perros del estado global.
    const dogsPerPage = useSelector((state) => state.dogsPerPage);

    useEffect(() => {
        const fetchDogs = async () => {
            try {
                await dispatch(getAllDogs());
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch dogs');
                setLoading(false);
            }
        };
        fetchDogs();
    }, [dispatch]);

    // Obtener los perros para la página actual.
    const indexOfLastDog = currentPage * dogsPerPage;
    const indexOfFirstDog = indexOfLastDog - dogsPerPage;
    const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

    // Cambiar la pàgina.
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <SearchBar />
            <Cards dogs={currentDogs} />
            <Pagination dogsPerPage={dogsPerPage} totalDogs={dogs.length} paginate={paginate} />
        </div>
    )
};

export default HomePage;  // Comentario para mantener el commint. Otro comentario, otro comentario, otro mas