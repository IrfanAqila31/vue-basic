<script setup>
// const buttonDisabled = false

const buttonAttributes = {
  disabled: isActive,
  class: 'text-red-500',
  id: 'buttonId',
}

const isActive = true

// menggunakan function
const handleActive = () => {
  if (isActive) {
    return 'Loading'
  } else {
    return 'Submit'
  }
}
</script>

<template>
  <!-- menggunakan boolean atribut -->
  <!-- menggunakan ternerary operator dan menggunakan javascript expression -->
  <button v-bind="buttonAttributes">{{ isActive ? 'Loading' : 'Submit' }}</button>
  <!-- menggunakan function dengan memanggil function-->
  <button v-bind="buttonAttributes">{{ handleActive() }}</button>
</template>

<style scoped></style>
