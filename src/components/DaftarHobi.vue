<script setup>
import { ref, reactive } from 'vue'

const props = defineProps({
  namaPemilik: {
    type: String,
    default: 'pengguna',
  },
})

const inputHobi = ref('')

const daftarHobi = reactive(['Main Game', 'Berenang', 'Olahraga'])

const tambahHobi = () => {
  // trim berfungsi untuk menghapus spasi di awal dan akhir inputan
  // !== tidak sama dengan. jadi inputan tidak boleh kosong
  if (inputHobi.value.trim() !== '') {
    daftarHobi.push(inputHobi.value)
    // setelah berhasil ditambahkan ke dalam array
    // maka inputan akan dikembalikan ke nilai semula (kosong)
    inputHobi.value = ''
  }
}

const hapusHobi = (index) => {
  // splice berfungsi untuk menghapus item dari array
  // index adalah index dari item yang akan dihapus
  // 1 adalah jumlah item yang akan dihapus
  daftarHobi.splice(index, 1)
}

const Instruksi = '<p style="color: red">Tambahkan Hobi Kamu</p>'
</script>

<template>
  <!-- menggunakan interpolasi menggunakan props namaPemilik -->
  <h1>Daftar Hobi: {{ props.namaPemilik }}</h1>
  <p v-html="Instruksi"></p>
  <input v-model="inputHobi" />
  <button @click="tambahHobi">Tambah Hobi</button>
  <p v-if="daftarHobi.length === 0">Wah, Kamu belum ada hobi nih</p>

  <p>Jumlah Hobi Kamu : {{ daftarHobi.length }}</p>

  <ul>
    <li v-for="(Hobi, index) in daftarHobi" :key="index">
      <p>{{ index + 1 }}. {{ Hobi }}</p>
      <button @click="hapusHobi(index)">Hapus Hobi</button>
    </li>
  </ul>
</template>
