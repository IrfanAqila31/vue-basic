<script setup>
import MainButton from './components/MainButton.vue'
import LatihanListRendering from './components/LatihanListRendering.vue'
import { provide, ref } from 'vue'
import LatihanSlots from './components/LatihanSlots.vue'
import CompositionComponent from './components/CompositionComponent.vue'
import eCommerceMini from './components/eCommerceMini.vue'

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
const nama = ref('dokel')
const desc = ref('')
// const check = ref(false)
// const check = ref([])
const check = ref('')

// Provide dan inject
provide('name', nama)
// bisa diupdate

function updateNama() {
  nama.value = 'irfan aqila utama'
}

provide('name', {
  nama,
  updateNama,
})
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

  <!--lazy tidak langsung di render -->
  <input type="text" v-model.lazy="nama" />

  <!--  mengubah string ke number-->
  <input type="text" v-model.lazy.number="nama" />

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

  <!-- slot: tempat menyisipkan konten dari komponen parent -->
  <!-- <MainButton>
    <p>irfan</p>
  </MainButton> -->

  <!-- fallback content -->
  <!-- <MainButton> </MainButton> -->

  <!-- named slot -->
  <MainButton>
    <!-- <template #header>
      <h1>dokel</h1>
    </template> -->
    <template #default>
      <h2>test</h2>
    </template>
  </MainButton>
  <br /><br />
  <h1>latihan slots</h1>
  <LatihanSlots>
    <!-- default slots -->
    <p>halo, ini dari parent (irfan)</p>
  </LatihanSlots>
  <!-- fallback kontent -->
  <LatihanSlots> </LatihanSlots>
  <!-- named slot header + default -->
  <LatihanSlots>
    <template #header>
      <h2>judul dari parent</h2>
    </template>
    <p>isi utama kartu</p>
  </LatihanSlots>
  <!-- header + default + footer -->
  <LatihanSlots>
    <template #header>
      <h3>daftar hobi</h3>
    </template>
    <ul>
      <li>main game</li>
      <li>berenang</li>
    </ul>
    <template #footer>
      <small>latihan slot footer</small>
    </template>
  </LatihanSlots>
  <!-- conditional slot tanpa header -->

  <LatihanSlots>
    <p>hanya isi default tanpa header</p>
  </LatihanSlots>

  <!-- Provide dan inject -->
  <CompositionComponent />

  <br /><br />
  <hr />

  <!-- Latihan ecomerce mini -->
  <eCommerceMini />
</template>

<style></style>
