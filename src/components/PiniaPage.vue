<script setup>
import { useLatihanStore } from '@/stores/latihanStore'

// saya masukkan store kedalam variabel
const store = useLatihanStore()
</script>

<template>
  <h1>belajar pinia</h1>
  <!-- menampilkan data dari store tadi -->
  <p>nama saat ini: {{ store.nama }}</p>

  <button @click="store.ubahNama">ubah nama</button>
  <br />
  <hr />
  <h2>latihan counter</h2>
  <p>angka saat ini: {{ store.angka }}</p>

  <!-- menampilkan getter -->
  <p>angka jika digandakan : {{ store.angkaGanda }}</p>

  <button @click="store.kurang">kurang</button>
  <button @click="store.tambah">tambah</button>
  <br />
  <hr />

  <!-- LATIHAN AMBIL DATA DARI API -->
  <h2>latihan ambil data api</h2>

  <!-- Tombol akan dinonaktifkan (disabled) saat status sedang loading -->
  <button @click="store.ambilDataUser" :disabled="store.isiLoading">
    {{ store.isiLoading ? 'sedang mengambil data' : 'ambil data user' }}
  </button>

  <!-- ini hanya tampil jika userData sudah ada isinya (bukan null) -->
  <!-- v-if akan menjalankan yang bernilai true saja -->

  <div v-if="store.useData" style="margin-top: 15px; padding: 10px; border: 1px solid black">
    <p>nama: {{ store.useData.name }}</p>
    <p>username: {{ store.useData.username }}</p>
    <p>email: {{ store.useData.email }}</p>
  </div>
  <button @click="store.tambahUserPost">kirim data user</button>
  <button @click="store.updateUserPut">update data usaer</button>
  <button @click="store.hapusUserDelete">hapus user</button>
  <br />
  <hr />
  <h2>latihan menggunakan axios</h2>
  <button @click="store.ambilDataAxios">ambil data axios</button>
  <button @click="store.tambahUserAxios">tambah data axios</button>
  <button @click="store.updateUserAxios">update data axios</button>
  <button @click="store.updateUserPatchAxios">update data axios patch</button>
</template>
