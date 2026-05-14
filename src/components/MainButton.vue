<script setup>
// const buttonDisabled = false

// const buttonAttributes = {
//   disabled: isActive,
//   class: 'text-red-500',
//   id: 'buttonId',
// }

// const isActive = true

// menggunakan function
// const handleActive = () => {
//   if (isActive) {
//     return 'Loading'
//   } else {
//     return 'Submit'
//   }
// }

// const url = '/home'

// menggunakan props
const props = defineProps({
  title: {
    type: String,
    default: 'Button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <!-- menggunakana link dinamis -->
  <!-- <a :href="url">Halaman Utama</a> -->

  <!-- menggunakan boolean atribut -->
  <!-- menggunakan ternerary operator dan menggunakan javascript expression -->
  <!-- <button v-bind="buttonAttributes">{{ isActive ? 'Loading' : 'Submit' }}</button> -->
  <!-- menggunakan function dengan memanggil function-->
  <!-- <button v-bind="buttonAttributes">{{ handleActive() }}</button> -->

  <!-- menggunakan props -->
  <button :disabled="disabled">{{ props.title }}</button>
</template>

<style scoped></style>
