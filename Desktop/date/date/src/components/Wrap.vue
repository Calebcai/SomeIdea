<template>
  <div class="wrap">
      <Header/>
      <Content/>
      <Footer/>
  </div>
</template>

<script>
import Footer from './Footer'
import Header from './Header'
import Content from './Contain'

export default {
  name: "wrap",
  components: {
    Footer,
    Header,
    Content
  }
};
</script>

<style lang="less" scoped>
  .wrap{
    background-color: rgba(16,30,34);
  }
</style>