<script setup>
import { ref } from 'vue' 

const propsN1 = defineProps({
  'alt':{
    type:String,
    default:"",
  },
  'className':{
    type: String,
    default:"logo"
  },
  'src':{
    type: String,
    default:"",
  },
  'width':{
    type: String,
    default:"100"
  }, 
  'height':{
    type: String,
    default: "100"
  }, 
  "description":{
    type: String,
    default: "non-Descrition"
  },
  "title":{
    type: String,
    default: "now is Empty value"
  }
  })
let propTilte = ref(propsN1.H2title)

</script>

<template>
  <div>
    <h1> IMG 的 Props & Emit運用</h1>

    <p>{{ propsN1.description }}</p>
    <img :src="propsN1.src" :alt="propsN1.alt" :width="propsN1.width" :height="propsN1.height" :title="propsN1.title">
  </div>

</template>

<style>
</style>