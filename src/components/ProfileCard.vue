<script setup>
const nama = 'Irfan'
const isPremium = false

const bioHTML = '<p style="color: blue">Belajar Vue itu seru!</p>'
const linkSosmed = 'https://github.com/IrfanAqila31'
const sapaPengguna = () => {
  return alert('Halo Selamat Datang')
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
</template>
