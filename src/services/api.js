import axios from 'axios';

import { apiKeys } from '../.env/config'

export const key = apiKeys.bitlyKey

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api