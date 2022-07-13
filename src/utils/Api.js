const URL_BASE = 'https://dummyjson.com/products'

import axios from 'axios'

export async function getProducts() {
    const response = await axios.get(URL_BASE)
    return await response.data.products
}