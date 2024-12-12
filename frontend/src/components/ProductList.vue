<script>
import productService from '../services/productService'

export default {
  data() {
    return {
      products: [],
      copyMessage: '',
    }
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await productService.getAllProducts()
        this.products = response.data
      } catch (error) {
        alert('Error fetching products: ' + error.message)
      }
    },
    copyToClipboard(id) {
      navigator.clipboard.writeText(id).then(
        () => {
          this.copyMessage = 'Successfully Copied!'
          setTimeout(() => {
            this.copyMessage = ''
          }, 2000)
        },
        (err) => {
          alert('Failed to copy: ', err)
        },
      )
    },
  },
  mounted() {
    this.fetchProducts()
  },
}
</script>

<template>
  <div class="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    <p v-if="copyMessage" class="text-green-500 mt-4 text-center font-bold">{{ copyMessage }}</p>
    <h2 class="text-2xl font-bold mb-4">All Products</h2>
    <table v-if="products.length" class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th class="px-4 py-2 border-b text-left">Type</th>
          <th class="px-4 py-2 border-b text-left">Name</th>
          <th class="px-4 py-2 border-b text-left">ID</th>
          <th class="px-4 py-2 border-b text-left">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id" class="hover:bg-gray-100">
          <td class="px-4 py-2 border-b text-left">{{ product.type }}</td>
          <td class="px-4 py-2 border-b text-left">{{ product.name }}</td>
          <td class="px-4 py-2 border-b text-left flex items-center justify-between">
            {{ product.id }}
            <div class="relative group">
              <button @click="copyToClipboard(product.id)" class="ml-2">
                <svg
                  class="w-4 h-4 text-gray-500 hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 21H9a2 2 0 01-2-2V5a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z" />
                  <path d="M16 13h-3v3h-2v-3H8v-2h3V8h2v3h3v2z" />
                </svg>
              </button>
              <span
                class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2"
              >
                Copy
              </span>
            </div>
          </td>
          <td class="px-4 py-2 border-b text-left">{{ parseFloat(product.price).toFixed(2) }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="text-red-500 mt-4">No products found.</p>
  </div>
</template>
