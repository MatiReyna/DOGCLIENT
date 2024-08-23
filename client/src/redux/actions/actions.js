import axios from 'axios';
import { GET_ALL_DOGS, GET_DOG_BY_NAME } from './actions-types';

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

export const getDogByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
            const dogs = response.data;
            dispatch({
                type: GET_DOG_BY_NAME,
                payload: dogs
            });
        } catch (error) {
            console.log(`Error fetching dogs by name "${name}":`, error);
        }
    }
};