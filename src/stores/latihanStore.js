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

  // 2. action berupa asycn function untuk mengambil data dari luar GET
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

  // 3. action berupa async function untuk MENGIRIM data baru ke server (POST)
  async function tambahUserPost() {
    // Menyalakan status loading saat proses dimulai
    isiLoading.value = true
    
    // Ini adalah data mentah yang ingin kita kirim dan simpan ke database server
    const dataBaru = {
      name: 'irfan aqila utama',
      username: 'irfan',
      email: 'irfanaqila31@gmail.com',
    }
    
    try {
      // fetch() digunakan untuk menghubungi server. 
      // Parameter pertama adalah URL tujuan. Parameter kedua adalah konfigurasi (options).
      const respon = await fetch('https://jsonplaceholder.typicode.com/users', {
        // Karena kita mau menyimpan data baru, method harus diubah menjadi POST
        method: 'POST',
        
        // Headers berfungsi memberi tahu server tipe data apa yang kita kirim
        headers: {
          // Kita memberi tahu server bahwa data yang dikirim berformat JSON
          'Content-Type': 'application/json',
        },
        
        // body adalah tempat kita menaruh data yang dikirim.
        // JSON.stringify mengubah object JavaScript (dataBaru) menjadi teks JSON yang bisa dibaca server
        body: JSON.stringify(dataBaru),
      })
      
      // Mengubah balasan (response) dari server yang berupa JSON kembali menjadi format JavaScript
      const data = await respon.json()
      
      // Menampilkan balasan dari server di console browser.
      // Jika POST sukses, biasanya server mengembalikan data kita beserta "id" baru yang di-generate server
      console.log('berhasil mengirim data balasan dari server', data)
      
    } catch (error) {
      // Jika terjadi masalah (misal: tidak ada internet atau server mati), blok catch ini akan dijalankan
      console.log('error mengirim data', error)
      
    } finally {
      // Blok finally akan SELALU dijalankan, entah proses di atas berhasil (try) atau gagal (catch).
      // Di sini kita gunakan untuk mematikan status loading di layar.
      isiLoading.value = false
    }
  }

  // return semua data agar bisa diakses
  return {
    nama,
    ubahNama,
    angka,
    tambah,
    kurang,
    angkaGanda,
    useData,
    isiLoading,
    ambilDataUser,
    tambahUserPost,
  }
})
