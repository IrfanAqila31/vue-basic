<script setup>
import { useAttrs } from 'vue'
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

// Menonaktifkan pewarisan atribut otomatis dari parent ke root element komponen ini
// defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
console.log(attrs)

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

const disableColor = '#000'
const availableColor = '#fff'
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
  <!-- <button :disabled="disabled">{{ props.title }}</button> -->

  <!-- mencoba menggunakan class dan style inline dinamis -->
  <label>ini button</label>
  <button
    v-bind="$attrs"
    :disabled="disabled"
    class="button"
    :class="{ disabled: disabled }"
    :style="{ color: disabled ? disableColor : availableColor }"
  >
    {{ props.title }}
  </button>
</template>

<style scoped>
.button {
  background-color: #42b983;
  border: none;

  padding: 10px 20px;
  border-radius: 20px;
}

.disabled {
  opacity: 0.3;
  background-color: grey;
}
</style>
