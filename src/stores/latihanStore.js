import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

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
      // update data dengan data yang baru dikirim
      useData.value = data
    } catch (error) {
      // Jika terjadi masalah (misal: tidak ada internet atau server mati), blok catch ini akan dijalankan
      console.log('error mengirim data', error)
    } finally {
      // Blok finally akan SELALU dijalankan, entah proses di atas berhasil (try) atau gagal (catch).
      // Di sini kita gunakan untuk mematikan status loading di layar.
      isiLoading.value = false
    }
  }

  async function updateUserPut() {
    // menyalakan status loading
    isiLoading.value = true
    // Ini adalah data mentah yang ingin kita kirim dan simpan ke database server

    const dataUpdate = {
      id: 1, //harus ada id dari data yang diubah
      name: 'irfan aqila update',
      username: 'irfan-update',
      email: 'irfanupdate@gmail.com',
    }
    try {
      // fetch() digunakan untuk menghubungi server.
      // Parameter pertama adalah URL tujuan. Parameter kedua adalah konfigurasi (options).
      const respon = await fetch('https://jsonplaceholder.typicode.com/users/1', {
        // Karena kita mau menyimpan data baru, method harus diubah menjadi PUT
        method: 'PUT',
        // Headers berfungsi memberi tahu server tipe data apa yang kita kirim
        headers: {
          'Content-Type': 'application/json',
        },
        // body adalah tempat kita menaruh data yang dikirim.
        // JSON.stringify mengubah object JavaScript (dataBaru) menjadi teks JSON yang bisa dibaca server
        body: JSON.stringify(dataUpdate),
      })
      // Mengubah balasan (response) dari server yang berupa JSON kembali menjadi format JavaScript
      const data = await respon.json()
      // Menampilkan balasan dari server di console browser.
      console.log('hasil update data', data)
      // mengupdate state useData dengan data yang baru saja diupdate
      useData.value = data
    } catch (error) {
      // Jika terjadi masalah (misal: tidak ada internet atau server mati), blok catch ini akan dijalankan
      console.log('error update data', error)
    } finally {
      // Blok finally akan SELALU dijalankan, entah proses di atas berhasil (try) atau gagal (catch).
      // Di sini kita gunakan untuk mematikan status loading di layar.
      isiLoading.value = false
    }
  }

  async function hapusUserDelete() {
    // mentalakan status loading
    isiLoading.value = true
    try {
      const respon = await fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'DELETE',
      })
      const data = await respon.json()
      console.log('berhasil delete', data)
      useData.value = null
    } catch (error) {
      console.log('error delete', error)
    } finally {
      isiLoading.value = false
    }
  }

  // MENGGUNAKAN AXIOS
  async function ambilDataAxios() {
    // nyalakan status loading
    isiLoading.value = true
    // menggunakan axios GET
    try {
      // Dengan Axios, kita tidak perlu lagi melakukan "await respon.json()"
      // Axios secara otomatis mengubahnya menjadi objek JavaScript di dalam "respon.data"
      const respon = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      // respon.data adalah tempat axios menaruh hasil datanya. Kita simpan ke useData.
      // sama seperti code berikut jika tidak menggunakan axios
      // const data = await respon.json()
      // useData.value = data
      // maka dari itu dalam axios tidak perlu await respon.json() karena otomatis akan mengubahnya menjadi objek JavaScript di dalam "respon.data"

      useData.value = respon.data
      console.log('berhasil ambil data dengan axios', useData.value)
    } catch (error) {
      // menangkap jika error
      console.log('error ambil data dengan axios', error)
    } finally {
      // mematikan status loading
      isiLoading.value = false
    }
  }

  async function tambahUserAxios() {
    // nyalakan loading
    isiLoading.value = true
    // menyiapkan data yang akan dikirim
    const dataBaru = {
      name: 'irfan aqila utama POST',
      username: 'irfan-post',
      email: 'irfanpost@gmail.com',
    }
    try {
      const respon = await axios.post('https://jsonplaceholder.typicode.com/users', dataBaru)
      // menyimpan data
      useData.value = respon.data
      console.log('berhasil tambah data dengan axios', respon.data)
    } catch (error) {
      console.log('error tambah data dengan axios', error)
    } finally {
      isiLoading.value = false
    }
  }

  async function updateUserAxios() {
    isiLoading.value = true
    const dataUpdate = {
      name: 'irfan update',
      username: 'irfan-update',
      email: 'irfan-update@gmail.com',
    }
    try {
      const respon = await axios.put('https://jsonplaceholder.typicode.com/users/1', dataUpdate)
      useData.value = respon.data
      console.log('berhasil update data dengan axios', respon.data)
    } catch (error) {
      console.log('error update axios', error)
    } finally {
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
    updateUserPut,
    hapusUserDelete,
    ambilDataAxios,
    tambahUserAxios,
    updateUserAxios,
  }
})
