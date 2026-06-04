import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useLatihanStore = defineStore('latihan', () => {
  // state data yang awalnya berisi irfan aqila
  const nama = ref('irfan aqila')
  // action untuk mengubah data
  function ubahNama() {
    nama.value = 'dokel'
  }

  //   data baru
  // 1. state untuk menyimpan angka
  const angka = ref(0)

  // 2. action untuk mengubah angka
  function tambah() {
    angka.value++
  }
  function kurang() {
    angka.value--
  }

  // getters untuk menghasilkan data turunan dari state secara reaktif
  const angkaGanda = computed(() => {
    return angka.value * 2
  })

  //   LATIHAN ASYNC AMBIL DATA DARI API
  // 1. sate untuk menyimpan hasil data dan status loading
  const useData = ref(null)
  const isiLoading = ref(false)

  // 2. action berupa asycn function untuk mengambil data dari luar
  async function ambilDataUser() {
    // menyalakan status loading saat proses dimulai
    isiLoading.value = true
    try {
      // meminta data dari internet
      const respon = await fetch('https://jsonplaceholder.typicode.com/users/1')
      // mengubah data dari json menjadi javascript
      const data = await respon.json()
      //   untuk melihat data dari backend
      console.log('ini data dari backend', data)
      // Jika berhasil, simpan data tersebut ke dalam State
      useData.value = data
    } catch {
      console.log('error mengambil data')
    } finally {
      // Matikan status loading, tidak peduli prosesnya berhasil atau gagal
      isiLoading.value = false
    }
  }

  // return semua data agar bisa diakses
  return { nama, ubahNama, angka, tambah, kurang, angkaGanda, useData, isiLoading, ambilDataUser }
})
