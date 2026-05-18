<script setup>
import { ref } from 'vue'

const nama = 'Irfan'
// fungsi ref adalah untuk membuat merender tampilan yang berubah
const isPremium = ref(false)

const bioHTML = '<p style="color: blue">Belajar Vue itu seru!</p>'
const linkSosmed = 'https://github.com/IrfanAqila31'
const sapaPengguna = () => {
  return alert('Halo Selamat Datang')
}

// latihan menggunakan ref
// fungsi untuk membalikkan nilai true ke false
const togglePremium = () => {
  // tanda ! digunakan untuk membalikkan nilai boolean
  // jadi jika true maka akan menjadi false dan sebaliknya
  isPremium.value = !isPremium.value
}
</script>

<template>
  <div>
    <h3>{{ nama }}</h3>
    <p>{{ isPremium ? 'Akun Premium' : 'Akun Reguler' }}</p>
    <p v-html="bioHTML"></p>
    <a :href="linkSosmed" target="_blank">Kunjungi Github Saya</a>
  </div>

  <button @click="sapaPengguna">Sapa Saya</button>

  <!-- latihan menggunakan ref -->
  <button @click="togglePremium">
    {{ isPremium ? 'Downgrade ke regular' : 'Upgrade ke premium' }}
  </button>
</template>
