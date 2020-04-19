<template>
  <div class="home">
    <el-button @click="goabout">about</el-button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods:{
    goabout(){
      this.$router.push({
        path:'/about'
      })
    }
  }
}
</script>
