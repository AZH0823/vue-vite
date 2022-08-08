<template>
  <div>

    <br>
    <label for="num1">第一個數值</label>
    <input type="text" id="num1" v-model="Inputdata.input1">
    <label for="num2">第二個數值</label>
    <input type="text" id="num2" v-model="Inputdata.input2">
    <p class="nowValue">now value: {{ nowValue }}</p>
    <button @click="clickBTN">加總兩數 </button>
  </div>

</template>

<script setup>
import { ref } from 'vue'
let Inputdata={
  input1:"",
  input2:"",
}

const emint = defineEmits(["addINT"])
  let nowValue = ref('')
  const clickBTN=()=>{
    let n1 = (Inputdata.input1) * 1 
    let n2 = (Inputdata.input2) * 1 
    let addValue = n1+n2
    // console.log(n1, n2, (n1 + n2))
    
    nowValue.value = addValue
    
    // return a+b
    emint('addINT', addValue)
  }
</script>

<style scoped>



input {
  margin: 0 25px;
}


.nowValue{
  margin: 20px 5px;
  
  padding: 5px;
  background: black;
  color: azure;
}
</style>