<script setup>
import MainButton from './components/MainButton.vue'
import OptionComponent from './components/OptionComponent.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import ProfileCard from './components/ProfileCard.vue'
import OrderStatus from './components/OrderStatus.vue'

const blogPost = '<p style="color: red">Ini Blog</p>'
const idBlog = 10
const clasBlog = 'flex text-xl'
</script>

<template>
  <h1>hello world</h1>
  <MainButton />
  <OptionComponent />
  <CompositionComponent />

  <!-- 1. Menggunakan Interpolasi -->
  <!-- v-html tidak digunakan karena akan mengabaikan tag html -->
  <div>{{ blogPost }}</div>

  <!-- 2. Menggunakan v-html atau raw html -->
  <!-- v-html digunakan karena akan merender tag html -->
  <div v-html="blogPost"></div>

  <!-- 3. Menggunakan Atribut Binding -->
  <!-- ini properti dinamis -->

  <p v-bind:id="idBlog">atribut binding id</p>
  <p :class="clasBlog">atribut binding class</p>

  <!-- menggunakan atribut boolean -->
  <MainButton />
  <hr />
  <br />
  <!-- Latihan ProfilCard -->
  <ProfileCard />
  <hr />
  <br />
  <!-- Latihan OrderStatus -->
  <OrderStatus />
</template>

<style scoped></style>
