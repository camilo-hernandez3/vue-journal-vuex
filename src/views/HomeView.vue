<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="gotoDayBook()" class="btn btn-primary">
      Primary 
    </button>
    
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  methods:{
    gotoDayBook(){
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>
