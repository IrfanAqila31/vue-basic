<script setup></script>

<template>
  <div class="kotak">
    <!-- conditional slots -->
    <div v-if="$slots.header" class="header">
      <slot name="header"></slot>
    </div>
    <div class="isi">
      <!-- default slots -->
      <slot>isi default - belum diisi parent</slot>
    </div>
    <div v-if="$slots.footer" class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped>
.kotak {
  border: 2px solid #42b983;
  border-radius: 12px;
  padding: 12px;
  max-width: 320px;
}
.header {
  font-weight: bold;
  margin-bottom: 8px;
}
.footer {
  margin-top: 8px;
  font-size: 0.9em;
  opacity: 0.8;
}
</style>
