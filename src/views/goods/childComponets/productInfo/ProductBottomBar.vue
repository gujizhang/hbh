<template>
  <div class="chose">
    <div class="price">258元起</div>
    <div class="try-buy">保费试算</div>
  </div>
</template>

<script>
  export default {
    name: "ProductBottomBar"
  }
</script>

<style scoped>
  .chose {
    margin: 0 auto;
    width: 100%;
    height: 100px;
    position: fixed;
    bottom: -11px;
    z-index: 10;
  }
  .chose div{
    text-align: center;
    height: 80px;
    font-size: 30px;
    padding: 15px 0;
    font-weight: bold;
    box-shadow: #6c757d 0 2px 10px;
  }
  .price{
    width: 70%;
    float: left;
    background-color: #F1F1F1;
    color: #c69500;
    letter-spacing: 3px;
  }
  .try-buy{
    background-color: #c69500;
    color: white;
    width: 30%;
    float: right;
    letter-spacing: 3px;
  }
</style>