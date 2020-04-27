<template>
  <div class="level-two">
        <div v-for="(item,index) in category"
             class="level-two-item"
             :class="{active1:( index === currentIndex)&&(category.length === 5),active2: ( index === currentIndex)&&(category.length === 6)}"
             @click="itemclick(index)">
          <span >{{item}}</span>
      </div>

  </div>
</template>

<script>
  export default {
    name: "LevelTwo",
    props: {
      category: {
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
        this.$emit('levelTwoClick',index)
      }
    }
  }
</script>

<style scoped>
  .level-two {
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    line-height: 80px;
    font-size: 25px;
    box-shadow: #6c757d 0 1px 5px;
    margin: 0 auto;
    border-radius: 0 0 24px 24px;
  }
  .level-two-item {
    margin-left: 30px;
    margin-right: 10px;
    width: 20%;
  }
  .level-two-item span {
    display: block;
    margin-top: -10px;
  }
  .active1 {
    color: #C89D63;
    border-left:3px solid #C89D63;
  }
  .active2 {
    color: #C89D63;
    border-bottom:3px solid #C89D63;
  }
</style>