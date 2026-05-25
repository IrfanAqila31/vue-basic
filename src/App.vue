<script setup>
import MainButton from './components/MainButton.vue'
import LatihanListRendering from './components/LatihanListRendering.vue'
import { ref } from 'vue'

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
</template>

<style></style>
