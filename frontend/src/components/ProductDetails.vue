<script>
import productService from '../services/productService'

export default {
  data() {
    return {
      productId: '',
      product: null,
      errorMessage: '',
    }
  },
  methods: {
    async fetchProductDetails() {
      if (!this.productId) {
        alert('Please enter a Product ID')
        return
      }

      try {
        const response = await productService.getProductById(this.productId)
        this.product = response.data
        this.errorMessage = ''
      } catch (error) {
        this.product = null
        this.errorMessage = 'Product not found'
        alert('Error fetching product details: ' + error.message)
      }
    },
  },
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Product Details</h2>
    <div class="mb-4">
      <input
        type="text"
        v-model="productId"
        placeholder="Enter Product ID"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <button
        @click="fetchProductDetails"
        class="w-full py-2 px-4 mt-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>

    <div v-if="product" class="product-details">
      <h3 class="text-xl font-semibold mb-2">Product Information</h3>
      <p><strong>Type:</strong> {{ product.type }}</p>
      <p><strong>Name:</strong> {{ product.name }}</p>
      <p><strong>ID:</strong> {{ product.id }}</p>
      <p><strong>Price:</strong>{{ parseFloat(product.price).toFixed(2) }}</p>
    </div>
    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>
