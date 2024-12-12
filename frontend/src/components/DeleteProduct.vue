<script>
import productService from '../services/productService'

export default {
  data() {
    return {
      productId: '',
      message: '',
      isSuccess: false,
    }
  },
  methods: {
    async deleteProduct() {
      if (!this.productId) {
        alert('Please enter a Product ID')
        return
      }

      try {
        await productService.deleteProduct(this.productId)
        this.message = 'Product deleted successfully!'
        this.isSuccess = true
        this.productId = ''
      } catch (error) {
        this.message = 'Error deleting product: ' + error.response.data.message
        this.isSuccess = false
      }
    },
  },
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Delete Product</h2>
    <input
      type="text"
      v-model="productId"
      placeholder="Enter Product ID to Delete"
      class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
    <button
      @click="deleteProduct"
      class="w-full py-2 px-4 mt-4 bg-red-500 text-white font-bold rounded hover:bg-red-700"
    >
      Delete Product
    </button>

    <p v-if="message" :class="isSuccess ? 'text-green-500 mt-4' : 'text-red-500 mt-4'">
      {{ message }}
    </p>
  </div>
</template>
