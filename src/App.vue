<script setup>
import MainButton from './components/MainButton.vue'
import OptionComponent from './components/OptionComponent.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import ProfileCard from './components/ProfileCard.vue'
import OrderStatus from './components/OrderStatus.vue'
import ProductBadge from './components/ProductBadge.vue'
import { ref, reactive } from 'vue'

const blogPost = '<p style="color: red">Ini Blog</p>'
const idBlog = 10
const clasBlog = 'flex text-xl'

// menggunakan ref untuk
const count = ref(0)

const increment = () => {
  return count.value++
}

// menggunakan objeck reactive
// const user = reactive({ name: 'irfan', age: 19 })

// menggunakan array
const user = reactive(['irfan', 'febri', 'jono', 'udin', 'joko', 'budi'])
</script>

<template>
  <h1>hello world</h1>
  <!-- menggunakan props -->
  <MainButton title="Submit" disabled />
  <MainButton title="Login" />
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
  <hr />
  <br />

  <!-- latihan props -->
  <ProductBadge category="Elektronik" isPromo />
  <ProductBadge category="Baju" />
  <ProductBadge />

  <hr />
  <br />

  <!-- Reactive state menggunakan ref-->

  <button @click="increment">{{ count }}</button>

  <!-- Reactive state menggunakan reactive objek-->
  <div>
    <h1>{{ user.name }}</h1>
    <h1>{{ user.age }}</h1>
  </div>

  <!-- Reactive state menggunakan reactive array-->
  <div>
    <h1>{{ user[1] }}</h1>
    <ul>
      <li v-for="(item, index) in user" :key="index">
        {{ item }}
      </li>
    </ul>
    <button @click="user.push('dokel')">Tambah</button>
  </div>

  <hr />
  <br />
</template>

<style scoped></style>
