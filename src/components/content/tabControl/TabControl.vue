<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles"
         class="tab-control-item"
         :class="{active: index === currentIndex}"
          @click="itemclick(index)">
     <span>{{item}}</span>
    </div>

    <img @click="seek" src="~assets/img/goods/goodsList/Searchbaricon.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 4
      }
    },
    methods: {
      itemclick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      },
      seek(){
        this.$emit('seekClick')
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    box-shadow: #6c757d 0 1px 5px;
  }
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: #C89D63;
  }
  img {
    margin-top: 5px;
    margin-right: 5px;
    padding: 20px;
    width: 70px;
    height: 70px;
    box-shadow:  #6c757d 0 1px 3px;
  }
  .active span{
    border-bottom:3px solid #C89D63;
  }
</style>