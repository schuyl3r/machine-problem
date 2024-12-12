<script>
import productService from '../services/productService'

export default {
  data() {
    return {
      productTypes: [],
    }
  },
  methods: {
    async fetchProductTypes() {
      try {
        const response = await productService.getProductTypes()
        this.productTypes = response.data
      } catch (error) {
        alert('Error fetching product types: ' + error.message)
      }
    },
  },
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4">Product Types</h2>
    <button
      @click="fetchProductTypes"
      class="w-full py-2 px-4 mb-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-700"
    >
      Fetch Product Types
    </button>

    <ul v-if="productTypes.length" class="list-disc pl-5">
      <li v-for="(type, index) in productTypes" :key="index" class="mb-2">
        {{ type }}
      </li>
    </ul>
    <p v-else class="text-black">No product types found.</p>
  </div>
</template>
