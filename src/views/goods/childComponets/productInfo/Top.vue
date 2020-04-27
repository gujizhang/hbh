<template>
  <div class="top">
    <div class="topImg"> <img src="~assets/img/goods/goodsInfo/topImg.png" alt=""></div>
    <span>美医皮肤美容意外保险</span>
    <div class="chose">
      <div class="platinum">皮肤美容铂金版</div>
      <div class="diamond">皮肤美容钻石版</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Top"
  }
</script>

<style scoped>
  .topImg img{
    width: 100%;
  }
  span {
    display: block;
    font-size: 30px;
    font-weight: bolder;
    color: #c69500;
    padding: 30px;
  }
  .chose {
    margin: 0 auto;
    width: 90%;
    height: 100px;
  }
  .chose div{
    text-align: center;
    height: 80px;
    font-size: 30px;
    padding: 15px 0;
    box-shadow: #6c757d 0 1px 5px;
  }
  .platinum{
    background-color: #c69500;
    width: 50%;
    color: white;
    float: left;
    border-radius: 30px 0 0 30px;
  }
  .diamond{
    background-color: white;
    color: #c69500;
    width: 50%;
    float: right;
    border-radius:  0 30px 30px 0;
  }

</style>