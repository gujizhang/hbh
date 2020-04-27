<template>
  <div class="goods-item" @click="goodsItemClick">
    <img src="~assets/img/goods/goodsList/terminal.png" alt="">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="description">{{goodsItem.description}}</span>
      <span class="price">{{goodsItem.price + '元起'}}</span>
      <div class="numb">销售<span class="sold">{{goodsItem.sold}}</span>份</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    data() {
      return{
        goodsItem:{
          title:'医美意外保险',
          price: 288,
          sold: 0,
          description:'医美险（皮肤类）',
        },
        iid: 0
      }
    },

    computed: {
    },
    methods: {
      goodsItemClick(){
        this.$router.push({path: '/productinfo',query:{iid: this.iid}})//上次写到这里了！！！！！
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 88%;
    padding-top: 10px;
    margin:0 auto;
  }
  .goods-item img {
    width: 100%;
    box-shadow: 0 -6px 15px rgba(100,100,100,.3);
  }
  .goods-info {
    font-size: 30px;
    box-shadow: 0 4px 15px rgba(100,100,100,.3);
    border-radius: 0 0 20px 20px;
  }
  .goods-info p {
    margin-bottom: 30px;
    padding-top: 30px;
    padding-left: 30px;
    color: #f68555;
  }
  .goods-info .description{
    display: block;
    color: #6B6B6B;
    font-size: 20px;
    padding-left: 30px;
    padding-bottom: 35px;
  }
  .goods-info .price {
    position: absolute;
    right: 0;
    top: 280px;
    color: #f68555;
    margin-right: 20px;
  }
  .goods-info .numb{
    position: absolute;
    right: 20px;
    bottom: 80px;
  }
  .goods-info .sold{
    color: #f68555;
  }
</style>