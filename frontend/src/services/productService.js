import axios from 'axios'

const API_URL = 'http://localhost:3000/api/products'

export default {
  getAllProducts() {
    return axios.get(API_URL)
  },
  getProductById(id) {
    return axios.get(`${API_URL}/${id}`)
  },
  getProductTypes() {
    return axios.get(`${API_URL}/types`)
  },
  addProduct(product) {
    return axios.post(API_URL, product)
  },
  deleteProduct(id) {
    return axios.delete(`${API_URL}/${id}`)
  },
}
