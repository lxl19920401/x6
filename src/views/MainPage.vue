<template>
  <div class="main">
    <el-button type="primary" @click="handleToUsers">go to users</el-button>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  methods: {
    handleToUsers() {
      this.$router.push({ name: 'users' });
    },
  },
};
</script>

<style scoped>

</style>
