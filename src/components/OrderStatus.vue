<script setup>
const namaProduk = 'Sepatu Sneakers'
const statusPesanan = 'Dikirim'
const gambarAtribut = {
  src: 'https://i.pinimg.com/1200x/e8/98/77/e89877c85825c2eeb8a1e00271c5f969.jpg',
  alt: 'Gambar Produk',
  width: 200,
  style: 'border-radius: 12px; margin-top: 12px',
}
const getLabelTombol = () => {
  if (statusPesanan === 'Dikirim') {
    return 'Lacak Pesanan'
  } else {
    return 'Hubungi Penjual'
  }
}

const klikTombol = () => {
  return alert('Membuka halaman info pesanan...')
}
</script>

<template>
  <div>
    <h2>{{ namaProduk }}</h2>
    <p>Status: {{ statusPesanan }}</p>
    <img v-bind="gambarAtribut" />

    <button @click="klikTombol">{{ getLabelTombol() }}</button>
  </div>
</template>
