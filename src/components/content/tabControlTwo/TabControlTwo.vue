<template>
  <div class="tab-control-two">
    <div class="tab-control">
      <div v-for="(item,index) in titles"
           class="tab-control-item"
           :class="{active: index === currentIndex}"
           @click="itemclick(index)">
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "TabControlTwo",
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
        currentIndex: 0
      }
    },
    methods: {
      itemclick(index){
        this.currentIndex = index;
        this.$emit('tabClick',index)
      },
    }
  }
</script>

<style scoped>
  .tab-control-two {
    position: relative;
  }
  .tab-control {
    display: flex;
    text-align: center;
    height: 100px;
    line-height: 80px;
    font-size: 30px;
    box-shadow: #6c757d 0 1px 5px;
    width: 100%;
    padding: 0 40px;
  }
  .tab-control-item {
    margin: 10px 8px;
  }
  .tab-control-item span {
    padding: 5px;
  }
  .active {
    color: #C89D63;
  }
  .active span{
    border-bottom:3px solid #C89D63;
  }
</style>