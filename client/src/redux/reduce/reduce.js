import { GET_ALL_DOGS, GET_DOG_BY_NAME } from '../actions/actions-types';

const initialState = {
    dogs: [],  // Acá se guardaran la lista de todos los perros.
    currentPage: 1,  // Donde va a estar la página actual.
    dogsPerPage: 6  // Cantidad de perros por página.
};

const reduce = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload  // Actualiza el estado con los datos de perros obtenidos.
            }
        case GET_DOG_BY_NAME:
            return {
                ...state,
                dogs: action.payload
            }
        default:
            return state;
    }
};

export default reduce;