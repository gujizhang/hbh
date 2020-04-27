<template>
  <div id="Product">
    <scroll-ver class="content"
                ref="scroll"
                :probe-type="3"
                :pull-up-load="true"
    >
      <div >    <img src="~assets/img/goods/allGoods/swiperImage.jpg" alt=""></div>
      <div class="all">
        <img src="~assets/img/goods/allGoods/division.png" alt="">
        <img class="allIcon" src="~assets/img/goods/allGoods/all.png" alt="">
      </div>
      <div class="list">
        <div >    <img src="~assets/img/goods/allGoods/TpyInsurance.png" alt=""></div>
        <div >    <img src="~assets/img/goods/allGoods/HtInsurance.png" alt=""></div>        <div >    <img src="~assets/img/goods/allGoods/TpyInsurance.png" alt=""></div>
        <div >    <img src="~assets/img/goods/allGoods/HtInsurance.png" alt=""></div>        <div >    <img src="~assets/img/goods/allGoods/TpyInsurance.png" alt=""></div>
        <div >    <img src="~assets/img/goods/allGoods/HtInsurance.png" alt=""></div>        <div >    <img src="~assets/img/goods/allGoods/TpyInsurance.png" alt=""></div>
        <div >    <img src="~assets/img/goods/allGoods/HtInsurance.png" alt=""></div>
      </div>
    </scroll-ver>
  </div>
</template>

<script>
  import ScrollVer from "components/common/scroll/ScrollVer";
  export default {
    name: "Product",
    components: {
      ScrollVer
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
  }
  #Product {
    /*100%视口高度*/
    height: 100vh;
    position: relative;
    background-color: #EDEDED;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 95px;
  }
  .all {
    position: relative;
    top: -10px;
    height: 100px;
  }
  .all img{
    position: relative;
  }
  .allIcon {
    position: absolute;
    width: 200px;
    top: -80px;
    left: 250px;
  }
  .list div{
    width: 90%;
    margin: 10px auto;
  }
</style>