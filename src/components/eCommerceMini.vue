<script setup>
import { ref, computed } from 'vue'
import ProductCard from './ProductCard.vue'

// state daftar produk
const products = ref([
  {
    id: 1,
    name: 'Sepatu',
    price: 500000,
  },
  {
    id: 2,
    name: 'Baju',
    price: 200000,
  },
  {
    id: 3,
    name: 'Tas',
    price: 100000,
  },
])

// state untuk keranjang
const cart = ref([])

const tambahKeranjang = (productYangDipilih) => {
  cart.value.push(productYangDipilih)
  console.log('Berhasil DItambah:', productYangDipilih.name)
}

// computed akan menghitungg  otomatis total harga
const totalHarga = computed(() => {
  let total = 0
  // Loop (ulang) setiap barang di keranjang untuk menjumlahkan harganya
  for (let i = 0; i < cart.value.length; i++) {
    total = total + cart.value[i].price
  }
  return total
})
</script>

<template>
  <div class="ecommerce-container">
    <div class="navbar">
      <h2>Vue-Commerce Mini</h2>
      <p>Keranjang: {{ cart.length }} Barang</p>
    </div>
    <div class="product-list">
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :product="item"
        @add-to-cart="tambahKeranjang"
      />
    </div>
    <div class="cart-details">
      <h3>Rincian keranjang anda:</h3>

      <!-- kondisi jika keranjang masi kosong -->
      <p v-if="cart.length === 0">keranjang masi kosong, belanja yuk</p>

      <!-- list keranjang jika ada isinya -->
      <ul v-else>
        <li v-for="(item, index) in cart" :key="index">
          {{ item.name }} - Rp {{ item.price.toLocaleString('id-ID') }}
        </li>
      </ul>

      <h4>Total Harga: Rp {{ totalHarga.toLocaleString('id-ID') }}</h4>
    </div>
  </div>
</template>

<style scoped>
.ecommerce-container {
  font-family: sans-serif;
  border: 2px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f8f9fa;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 kolom sejajar */
  gap: 15px;
}
</style>
