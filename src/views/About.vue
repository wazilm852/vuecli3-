<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="info">Info</Button>
    <Input v-model="value" placeholder="Enter something..." style="width: 300px" />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    },
    created() {
      this.$api.loginUser({
        name: 'li',
        age: '2'
      }).then(res=> {
        console.log(res)
      })
    },
    methods: {

    }
  }
</script>
<style lang="less" scoped>
  .about{
    h1{
      color: #8c0776;
    }
  }
</style>
