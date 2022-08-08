<script setup>
  // console.log('compoment init')
</script>

<template>
  <div>
    <h2>Intro Myself
      <pre>I'm 28 years old ,then I really like to make 
        own unique website,......
        <span>THX U Watching, see U next Time</span>
      </pre>
    </h2>

  </div>
</template>

<style scoped>
  pre{
    position: relative;
  }
  span{
    display: inline-block;
    position: absolute;
    /* margin: 50px 0; */
    color:red;
    background: white;
    padding: 10px;
    font-size: 2rem;
    width: 600px;
    transform: translate(-50%,50%);
  }
</style>