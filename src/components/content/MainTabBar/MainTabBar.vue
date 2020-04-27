<template>
  <TabBar>
    <tab-bar-item path="/shop">
      <img slot="item-icon" src="~assets/img/shop/mainTabBarImg/shop.png" >
      <img slot="item-icon-active" src="~assets/img/shop/mainTabBarImg/shop_active.png" >
    </tab-bar-item>
    <tab-bar-item path="/goods">
      <img slot="item-icon" src="~assets/img/shop/mainTabBarImg/goods.png" >
      <img slot="item-icon-active" src="~assets/img/shop/mainTabBarImg/goods_active.png" >
    </tab-bar-item>
    <tab-bar-item path="/personage">
      <img slot="item-icon" src="~assets/img/shop/mainTabBarImg/personage.png" >
      <img slot="item-icon-active" src="~assets/img/shop/mainTabBarImg/personage_active.png" >
    </tab-bar-item>
  </TabBar>
</template>

<script>
    import TabBar from "../../../components/common/tabbar/TabBar";
    import TabBarItem from "../../../components/common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
          TabBar,
          TabBarItem
        }
    }
</script>

<style scoped>

</style>
