<script>
import ProductList from './components/ProductList.vue'
import ProductDetails from './components/ProductDetails.vue'
import ProductTypes from './components/ProductTypes.vue'
import AddProduct from './components/AddProduct.vue'
import DeleteProduct from './components/DeleteProduct.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    ProductDetails,
    ProductTypes,
    AddProduct,
    DeleteProduct,
  },
  data() {
    return {
      currentView: 'ProductList',
    }
  },
}
</script>

<template>
  <div id="app" class="container mx-auto p-4">
    <nav class="flex justify-between mb-4">
      <button
        @click="currentView = 'ProductList'"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        All Products
      </button>
      <button
        @click="currentView = 'ProductDetails'"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Product Details
      </button>
      <button
        @click="currentView = 'ProductTypes'"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Product Types
      </button>
      <button
        @click="currentView = 'AddProduct'"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Add Product
      </button>
      <button
        @click="currentView = 'DeleteProduct'"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Delete Product
      </button>
    </nav>

    <component :is="currentView"></component>
  </div>
</template>
