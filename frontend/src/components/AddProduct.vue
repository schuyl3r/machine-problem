<script>
import productService from '../services/productService'

export default {
  data() {
    return {
      product: {
        type: '',
        name: '',
        id: '',
        price: null,
      },
      message: '',
      isSuccess: false,
    }
  },
  methods: {
    async addProduct() {
      try {
        await productService.addProduct(this.product)
        this.message = 'Product added successfully!'
        this.isSuccess = true

        // Reset form
        this.product = {
          type: '',
          name: '',
          id: '',
          price: null,
        }
      } catch (error) {
        this.message = 'Error adding product: ' + error.response.data.message
        this.isSuccess = false
      }
    },
  },
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Add Product</h2>
    <form @submit.prevent="addProduct" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700">Product Type*</label>
        <select
          v-model="product.type"
          required
          class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="" class="text-gray-300">Select Product Type</option>
          <option>Home Appliance</option>
          <option>Electronics</option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Product Name*</label>
        <input
          type="text"
          v-model="product.name"
          placeholder="Product Name"
          required
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Product ID*</label>
        <input
          type="text"
          v-model="product.id"
          placeholder="Product ID"
          required
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Price*</label>
        <input
          type="number"
          v-model="product.price"
          placeholder="Price"
          step="0.01"
          min="0"
          required
          class="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        class="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
      >
        Add Product
      </button>
    </form>

    <p v-if="message" :class="isSuccess ? 'text-green-500 mt-4' : 'text-red-500 mt-4'">
      {{ message }}
    </p>
  </div>
</template>
