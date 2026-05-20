<script setup>
import MainButton from './components/MainButton.vue'
import OptionComponent from './components/OptionComponent.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import ProfileCard from './components/ProfileCard.vue'
import OrderStatus from './components/OrderStatus.vue'
import ProductBadge from './components/ProductBadge.vue'
import WishlistBelanja from './components/WishlistBelanja.vue'
import DaftarHobi from './components/DaftarHobi.vue'
import { ref, reactive, computed } from 'vue'

const blogPost = '<p style="color: red">Ini Blog</p>'
const idBlog = 10
const clasBlog = 'flex text-xl'

// menggunakan ref untuk
const count = ref(0)

const increment = () => {
  return count.value++
}

const decrement = () => {
  return count.value--
}

const reset = () => {
  count.value = 0
}

// menggunakan objeck reactive
// const user = reactive({ name: 'irfan', age: 19 })

// menggunakan array
const user = reactive(['irfan', 'febri', 'jono', 'udin', 'joko', 'budi'])

// mencoba computed
const author = reactive({
  name: 'Irfan',
  books: [
    {
      title: 'Ultraman Tiga',
      realeseDate: '1996',
      reviews: [5, 5, 5, 5],
      avgReview: 5,
    },
    {
      title: 'Ultraman Dyna',
      realeseDate: '1997',
      reviews: [4, 4, 4, 4],
      avgReview: 4,
    },
    {
      title: 'Ultraman Gaia',
      realeseDate: '1998',
      reviews: [3, 3, 3, 3],
      avgReview: 3,
    },
  ],
})

// akan dirender ulang jika nilai reactive berubah
const isPublished = computed(() => {
  console.log('test')
  return author.books.length > 0 ? 'yes' : 'no'
})

// mencoba conditional rendering
// const showAuthor = ref(true)
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
  <!-- latihan menggunakan counter -->

  <button @click="increment">Tambah</button>
  <span>{{ count }}</span>
  <button @click="decrement">Kurang</button>
  <br />
  <button @click="reset">Reset</button>

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

  <!-- latihan WishlistBelanja -->
  <WishlistBelanja namaPemilik="Dokell" :limitBarang="10" />

  <!-- latihan 2 daftar hobi -->
  <DaftarHobi namaPemilik="Irfan" />

  <!-- mencoba comupted -->

  <p>jumlah buku</p>
  <span>{{ isPublished }}</span>
  <button @click="increment">{{ count }}</button>

  <!-- mencoba conditional rendering -->
  <!-- <h1 v-if="author.books.length === 0">BELUM ADA BUKU</h1>
  <h1 v-else-if="author.books.length === 1">cukup buku</h1>
  <h1 v-else>banyak buku</h1> -->

  <!-- mencoba list rendering -->
  <!-- menggunakan object destructuring -->
  <h2>Books:</h2>
  <ul>
    <li v-for="({ title, realeseDate }, index) in author.books" :key="index">
      {{ title }} {{ realeseDate }}
    </li>
  </ul>

  <!-- menggunakan object destructuring -->
  <ul>
    <li v-for="(data, authorIndex) in author" :key="authorIndex">{{ data }} : {{ data }}</li>
  </ul>

  <!-- mencoba perulangan -->

  <ol>
    <li v-for="(item, index) in 10" :key="index">irfan aqila {{ index + 1 }}</li>
  </ol>

  <!-- mencoba v-for dengan v-if -->

  <ul>
    <template v-for="(item, index) in author.books" :key="index">
      <li v-if="item.avgReview > 3">{{ item.title }} - {{ item.avgReview }}</li>
    </template>
  </ul>
</template>

<style scoped></style>
