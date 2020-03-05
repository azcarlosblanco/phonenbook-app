
import axios from 'axios';

const instance = axios.create({
    // baseURL: 'future server endpoint',
    headers: { 'Content-Type': 'application/json' }
});

export default instance;
