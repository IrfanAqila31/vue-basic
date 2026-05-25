<script setup>
import MainButton from './components/MainButton.vue'
import LatihanListRendering from './components/LatihanListRendering.vue'
import { ref } from 'vue'
import { chai } from 'globals'

// const disabled = ref(false)

// const toggleDisable = () => {
//   disabled.value = !disabled.value
// }

// mencoba event handler
const count = ref(0)

// menggunakan method tapi menambahkan argument
const increment = (counter) => {
  count.value = count.value + counter
}

// mencoba form handling
const nama = ref('')
const desc = ref('')
// const check = ref(false)
// const check = ref([])
const check = ref('')
</script>

<template>
  <LatihanListRendering />
  <!-- <MainButton @click="toggleDisable" :disabled="disabled" /> -->

  <!-- menggunakan inline event handler -->
  <!-- <button @click="count++">{{ count }}</button> -->

  <!-- menggunakan method -->
  <button @click="increment(5)">{{ count }}</button>

  <button @click="(event) => console.log(event)" @mouseover="increment(10)">{{ count }}</button>

  <!-- mencoba preventDefault -->
  <input @keydown.enter="() => console.log('menekan enter')" />

  <!-- mencoba inheritance -->

  <MainButton class="button saya" @click="increment(5)" />
  <br /><br />
  <!-- mencoba form handling -->

  <!-- default -->
  <!-- <input type="text" :value="nama" @input="(event) => (nama = event.target.value)" /> -->

  <!-- menggunakan v-model menggunakan input -->
  <!-- <input type="text" v-model="nama" /> -->
  <input type="text" v-model.lazy="nama" />

  <p>{{ nama }}</p>
  <br />
  <!-- menggunakan v-model menggunakan text area -->

  <textarea v-model="desc" />
  <!-- white-space: pre-line digunakan agar mengikuti dengan inputann dari text areanya -->
  <p style="white-space: pre-line">{{ desc }}</p>
  <br />

  <!-- menggunakan v-model menggunakan checkbox -->
  <!-- <input type="checkbox" v-model="check" /> -->
  <!-- <input type="checkbox" v-model="check" value="irfan" />
  <label>irfan</label>
  <input type="checkbox" v-model="check" value="aqila" />
  <label>aqila</label> -->
  <!-- <p>{{ check }}</p> -->
  <input type="radio" v-model="check" value="irfan" />
  <label>irfan</label>
  <input type="radio" v-model="check" value="aqila" />
  <label>aqila</label>

  <p>{{ check }}</p>

  <!-- <ul>
    <li v-for="item in check" :key="item">
      {{ item }}
    </li>
  </ul> -->
</template>

<style></style>
