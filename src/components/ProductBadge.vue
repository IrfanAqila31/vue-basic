<script setup>
const props = defineProps({
  category: {
    type: String,
    default: 'Kategori Umum',
  },
  isPromo: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <p>{{ props.category }}</p>
    <p>{{ props.isPromo ? 'Sedang Promo 🔥' : 'Harga Normal' }}</p>
  </div>
</template>
