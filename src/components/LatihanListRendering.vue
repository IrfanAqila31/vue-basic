<script setup>
import { reactive } from 'vue'

const teman = reactive(['irfan', 'aqila', 'budi', 'andi', 'candra'])

const film = reactive([
  {
    title: 'Ultraman Tiga',
    realeseDate: '1996',
  },
  {
    title: 'Ultraman Dyna',
    realeseDate: '1997',
  },
  {
    title: 'Ultraman Gaia',
    realeseDate: '1998',
  },
])

const tambahTeman = () => {
  teman.push('jokowi')
}
</script>

<template>
  <!-- Latihan Array String -->
  <h1>Latihan List Rendering</h1>
  <h3>Daftar Teman</h3>
  <ul>
    <li v-for="(nama, index) in teman" :key="index">{{ index + 1 }}. {{ nama }}</li>
  </ul>
  <button @click="tambahTeman">Tambah Teman</button>
  <hr />

  <!-- latihan menggunakan v-for aray object -->
  <h3>daftar film</h3>
  <ul>
    <li v-for="({ title, realeseDate }, index) in film" :key="index">
      {{ index + 1 }}. {{ title }} {{ realeseDate }}
    </li>
  </ul>

  <hr />

  <!-- latihan looping angka range -->
  <h3>perulangan angka</h3>
  <ol>
    <li v-for="(item, index) in 5" :key="index">{{ index + 1 }}.</li>
  </ol>
</template>

<style scoped></style>
