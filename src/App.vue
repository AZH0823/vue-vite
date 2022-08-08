<script setup>
import {ref } from 'vue'
import { computed }from "@vue/reactivity"
import Logo from "./assets/fail.jpg"
import Add from './components/add.vue'
import vImg from './components/vImg.vue'
import runoob from './components/runoob.vue'


const data = {
  key1:'a',
  key2: 'b',
  key3: 'cd',
  point:[
    { id: 1, title:'這裡是用 Vue+Vite 開發的靜態簡易網站'},
    { id: 2, title: 'my qasdwpe sadas' },
    { id: 3, title: 'my eqwedowpe sadas' }
  ]
}

const testUU = ref('Login on Web ing...')

setTimeout(() => {
  testUU.value = 'mick'
}, 3000)

const imgTest={
  alt:"logo",
  className:"logo",
  width:"125" ,
  height:"125" ,
  src:Logo,
  description:"This is my Props and Emit in compoent",
  title:"this is error MessageIMG!!",
}
let resInt=ref(0)
let display= false
const callback=(res)=>{
  console.log('return',res)
  display = true
  resInt.value=res
}



let IschangeValue=ref(0)
const changeComponent=(index)=>{
  IschangeValue.value = index
  console.log("Changeindex",index)
}
const Component = computed(() => {
  console.log('entering')
  switch (IschangeValue.value) {
      
    case 0:
      // console.log(vImg)
      return vImg
    case 1:
      return Add
    case 2:
      return runoob
    default:
      return runoob
  }
})


// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <!-- <div> -->
  <!-- <p v-for="(value,key,index) in data" :key="index">
      No.{{ index+1 }},{{key}}:{{value}}
    </p> -->
  <!-- 在根實體使用自訂元件 -->

  <!-- <p class="test-cls" :key="testUU">{{ testUU }}</p>
    <p>{{ data.point[0].title}}</p>
  </div> -->

  <div class="wrapper">

    <!-- <h1>123</h1>
    <p>{{ data.point[0].title}}</p> -->
    <!-- <runoob /> -->

    <!-- switch case  -->
    <!-- 1.img
        2.add
        3.mycomponent -->

    <!-- h1 title -->
    <p class="test-cls" :key="testUU">{{ testUU }}</p>
    <p>{{ data.point[0].title}}</p>

    <button @click="changeComponent(0)">圖片介紹</button>
    <button @click="changeComponent(1)">算算數</button>
    <button @click="changeComponent(2)">自我介紹</button>
    <div class="pageInfo">
      <component :is="Component" @AddINT="callback" v-bind="imgTest"></component>
      <p v-if="display">{{resInt}}</p>
    </div>
    <p>now is page {{IschangeValue+1}} of 3</p>


    <!-- <vImg v-bind="imgTest" />
    <add @AddINT="callback"></add>
    <h1>{{resInt}}</h1>
    <mycomponent /> -->
  </div>
</template>

<style scoped>
.test{
  font-size: 50px;
  /* color: orange; */
}
.wrapper{
  display: inline-block;
  box-sizing: content-box;
  margin: 0 auto;
  padding: 50px;
  width: 1200px;
  height: 100vh;
  background: orange;

}
.wrapper > button{
  margin: 0 15px;
}
.wrapper>.pageInfo{
  
  margin: 50px auto;
  /* position: absolute; */
  width: 800px;
  padding: 15px;
  border: 10px solid rgb(231, 249, 200);
}
.test-cls{
  font-size: 40px;
  animation: openIn 1s ease-out;
}
@keyframes openIn {
  0%{
    opacity: 0;
    transform: translateY(20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
