<script setup>
// menerima data produk dari component induk (eCommerceMini)

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

// mendaftarkan custom event bernama add to cart
const emit = defineEmits(['add-to-cart'])

// fungsi yang dijalankan jika tombol di klik
const handleAddToCart = () => {
  // mengirim sinyal add-to-cart beserta data produk
  emit('add-to-cart', props.product)
}
</script>

<template>
  <div class="card">
    <h3>{{ product.name }}</h3>
    <!-- mengubah format harga agar rapi -->
    <p>harga: {{ product.price.toLocaleString('id-ID') }}</p>
    <button @click="handleAddToCart">Tambah ke keranjang</button>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  background-color: white;
}
button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #33a06f;
}
</style>
