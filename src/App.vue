<script setup>
import MainButton from './components/MainButton.vue'
import LatihanListRendering from './components/LatihanListRendering.vue'
import { ref } from 'vue'

const disabled = ref(false)

const toggleDisable = () => {
  disabled.value = !disabled.value
}
</script>

<template>
  <LatihanListRendering />
  <MainButton @click="toggleDisable" :disabled="disabled" />
</template>

<style></style>
