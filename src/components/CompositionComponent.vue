<!-- Lebih Simple Composition Component -->
<script setup>
const nama = 'Irfan'

const showName = () => {
  alert('Halo, ' + nama)
}
</script>

<template>
  <h1>Nama saya: {{ nama }}</h1>
  <button @click="showName">Tampilkan Nama</button>
</template>
