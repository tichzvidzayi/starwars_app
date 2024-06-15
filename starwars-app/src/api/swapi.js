import axios from 'axios';

const BASE_URL = 'https://swapi.dev/api';

export const fetchItems = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}/`);
        return response.data.results;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
};