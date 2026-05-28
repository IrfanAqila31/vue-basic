<!-- Lebih Simple Composition Component -->
<script setup>
import { inject } from 'vue'

// const nama = 'Irfan'

// const showName = () => {
//   alert('Halo, ' + nama)
// }

// provide dan inject

// const nama = inject('name')
const nameApp = inject('nameApp')
const { nama, updateNama } = inject('name')

// bisa diupdate
</script>

<template>
  <h1>Nama saya: {{ nama }}</h1>
  <h1>{{ nameApp }}</h1>
  <!-- <button @click="showName">Tampilkan Nama</button> -->

  <!-- provide dan  inject -->
  <button @click="updateNama">Update nama</button>
</template>
