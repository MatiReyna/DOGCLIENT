import axios from 'axios';
import { GET_ALL_DOGS } from './actions-types';

export const getAllDogs = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/dog');
            const dogs = response.data;
            dispatch({
                type: GET_ALL_DOGS,
                payload: dogs
            });
        } catch (error) {
            console.log('Error fetching dogs:', error)
        }
    }
};