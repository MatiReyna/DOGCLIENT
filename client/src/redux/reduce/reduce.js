import { GET_ALL_DOGS } from '../actions/actions-types';

const initialState = {
    dogs: []  // Acá se guardaran la lista de todos los perros.
};

const reduce = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
                ...state,
                dogs: action.payload  // Actualiza el estado con los datos de perros obtenidos.
            }
        default:
            return state;
    }
};

export default reduce;