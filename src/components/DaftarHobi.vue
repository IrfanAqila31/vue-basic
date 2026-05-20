<script setup>
import { ref, reactive, computed } from 'vue'

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

// latihan computed
const satusHobi = computed(() => {
  // ambil jumlah hobi
  const jumlahHobi = daftarHobi.length
  if (jumlahHobi === 0) {
    return 'wah kamu belum punya hobi nih, ayo cari'
    // jika jumlahHobi lebih besar sama dengan 1 dan jumlahHobi lebih kecil sama dengan 3, maka return hobu yang menarik
  } else if (jumlahHobi >= 1 && jumlahHobi <= 3) {
    return 'hobi yang menarik'
  } else {
    return 'kamu hobi banget ya, keren'
  }
})
</script>

<template>
  <!-- menggunakan interpolasi menggunakan props namaPemilik -->
  <h1>Daftar Hobi: {{ props.namaPemilik }}</h1>
  <p v-html="Instruksi"></p>
  <input v-model="inputHobi" />
  <button @click="tambahHobi">Tambah Hobi</button>
  <!-- <p v-if="daftarHobi.length === 0">Wah, Kamu belum ada hobi nih</p> -->

  <!-- latihan menggunakan computed -->
  <p>{{ satusHobi }}</p>

  <p>Jumlah Hobi Kamu : {{ daftarHobi.length }}</p>

  <ul>
    <li v-for="(Hobi, index) in daftarHobi" :key="index">
      <p>{{ index + 1 }}. {{ Hobi }}</p>
      <button @click="hapusHobi(index)">Hapus Hobi</button>
    </li>
  </ul>


  <!--  -->
</template>
