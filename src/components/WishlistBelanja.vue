<script setup>
import { ref, reactive } from 'vue'

// 1. Definisikan PROPS
// Buat agar menerima 'namaPemilik' (String, default: 'Pengguna')
// dan 'limitBarang' (Number, default: 5)
const props = defineProps({
  // TULIS DI SINI
  namaPemilik: {
    type: String,
    default: 'pengguna',
  },
  limitBarang: {
    type: Number,
    default: 5,
  },
})

// 2. Buat reaktivitas tunggal dengan REF
// Buat ref bernama 'inputBarang' untuk menampung teks dari kotak input (default string kosong)
const inputBarang = ref('')

// 3. Buat reaktivitas array dengan REACTIVE
// Buat array reaktif bernama 'daftarBarang' dengan isi awal 2-3 barang bebas
const daftarBarang = reactive([
  // TULIS DI SINI (Contoh: 'Sepatu Sneakers', 'Kaos Polos')
  'keyboard',
  'sepatu',
  'mouse',
  'baju',
  'celana',
  'topi',
])

// 4. Buat FUNGSI/METHOD
// Fungsi untuk menambah barang ke array daftarBarang
const tambahBarang = () => {
  // trim berfungsi untuk menghapus spasi di awal dan akhir inputan
  // !== tidak sama dengan. jadi inputan tidak boleh kosong
  if (inputBarang.value.trim() !== '') {
    // Tambahkan inputBarang ke daftarBarang menggunakan method .push()
    daftarBarang.push(inputBarang.value)

    // Setelah ditambah, kosongkan kembali inputBarang.value agar bersih
    inputBarang.value = ''
  }
}

// Fungsi untuk menghapus barang berdasarkan index
const hapusBarang = (index) => {
  // Gunakan .splice(index, 1) untuk menghapus barang dari daftarBarang
  // TULIS DI SINI
  daftarBarang.splice(index, 1)
}
</script>

<template>
  <div class="wishlist-container">
    <!-- A. Tampilkan judul menggunakan Interpolasi + Props namaPemilik -->
    <h2>Wishlist Belanja: {{ props.namaPemilik }} 🛒</h2>

    <!-- B. Tampilkan sub-judul miring berwarna abu-abu menggunakan v-html -->
    <p v-html="'<i style=&quot;color: #777;&quot;>Catat barang impianmu di sini!</i>'"></p>

    <!-- C. Informasi kapasitas -->
    <p>Jumlah barang saat ini: {{ daftarBarang.length }} / {{ props.limitBarang }}</p>

    <!-- D. Form Input (Gunakan v-model ke 'inputBarang') -->
    <!-- Tambahkan attribute binding :disabled agar input terkunci jika jumlah barang mencapai limitBarang -->
    <div class="form-group">
      <input
        type="text"
        placeholder="Ketik nama barang..."
        v-model="inputBarang"
        :disabled="daftarBarang.length >= props.limitBarang"
      />

      <!-- E. Tombol Tambah (Gunakan Event Handling @click ke fungsi tambahBarang) -->
      <!-- Tambahkan attribute binding :disabled agar tidak bisa diklik jika input kosong ATAU list penuh -->
      <button
        @click="tambahBarang"
        :disabled="inputBarang.trim() === '' || daftarBarang.length >= props.limitBarang"
      >
        Tambah
      </button>
    </div>

    <!-- F. Conditional Rendering (v-if) -->
    <!-- Tampilkan tulisan peringatan di bawah ini HANYA jika list sudah penuh -->
    <p v-if="daftarBarang.length >= props.limitBarang" style="color: red; font-weight: bold">
      ⚠️ List sudah penuh! Hapus barang jika ingin menambah yang baru.
    </p>

    <!-- G. List Rendering (v-for) -->
    <!-- Tampilkan seluruh isi daftarBarang menggunakan v-for lengkap dengan index -->
    <ul class="list-item">
      <li v-for="(barang, index) in daftarBarang" :key="index" class="item">
        <span>{{ index + 1 }}. {{ barang }}</span>
        <!-- Tombol hapus yang memicu fungsi hapusBarang(index) saat di-klik -->
        <button class="btn-hapus" @click="hapusBarang(index)">Hapus</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* Styling sederhana agar tampilan rapi dan premium */
.wishlist-container {
  border: 2px dashed #42b983;
  border-radius: 12px;
  padding: 20px;
  max-width: 400px;
  margin: 20px auto;
  background-color: #fcfcfc;
  font-family: Arial, sans-serif;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}
.form-group {
  display: flex;
  gap: 10px;
  margin: 15px 0;
}
.form-group input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.form-group button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
.form-group button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
.list-item {
  list-style: none;
  padding: 0;
}
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 6px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 6px;
}
.btn-hapus {
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-hapus:hover {
  background-color: #ff7875;
}
</style>
