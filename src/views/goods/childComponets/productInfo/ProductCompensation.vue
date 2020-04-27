<template>
  <div class="profuct-compensation">
      <div class="content">
        <div>
          <img class="img-one" src="~assets/img/goods/goodsInfo/productCompensationTitle.png" alt="">
          <img class="img-two"src="~assets/img/goods/goodsInfo/productCompensation.png" alt="">
        </div>
        <div v-for="item in compensationDetails">
          <span>{{item.title}}</span>
          <div>{{item.detail}}</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: "ProductCompensation",
    props: {
      compensationDetails: {
        type: Array
      }
    },
  }
</script>

<style scoped>
  .profuct-compensation{
    background-color: white;
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: #6c757d 0 1px 5px;
  }
  .img-one {
    display: block;
    width: 100%;
    margin: 30px auto;
  }
  .img-two{
    display: block;
    width: 100%;
    margin: 30px auto;
  }
  .content {
    margin: 0 45px;
    color: #555555;
    padding-bottom: 50px;
    letter-spacing: 1px;
  }
  span {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #E8855A;
    font-size: 25px;
    letter-spacing: 2px;
  }
</style>