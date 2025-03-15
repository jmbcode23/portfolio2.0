import axios from 'axios';

// Create an Axios instance
export const api = axios.create({
    baseURL: '/', // Base URL for the JSON file
});
