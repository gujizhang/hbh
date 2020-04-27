<template>
   <div id="goods">
     <menu-level-one/>
     <scroll-ver class="content"
             ref="scroll"
             :probe-type="3"
             :pull-up-load="true"
     >
      <goods-list/>
     </scroll-ver>

   </div>

</template>

<script>
  import ScrollVer from "components/common/scroll/ScrollVer";
  import GoodsList from "components/content/goods/GoodsList";
  import MenuLevelOne from "views/goods/childComponets/MenuLevelOne";
    export default {
        name: "Goods",
      components: {
        GoodsList,
        ScrollVer,
        MenuLevelOne
      },
      data() {
          return {
          }
      },
      methods: {
        //@
      }
    }
</script>

<style scoped>
  #goods{
    /*100%视口高度*/
    height: 100vh;
    position: relative;
  }

  .content{
    position: absolute;
    overflow: hidden;
    top: 88px;
    bottom: 95px;
  }

</style>