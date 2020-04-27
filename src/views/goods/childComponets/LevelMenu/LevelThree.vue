<template>
  <div class="level-three">
    <div v-for="(item,index) in categoryTwo"
         class="level-three-item"
         :class="{active: index === currentIndex}"
         @click="itemclick(index)"
    >
      <div>{{item}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LevelThree",
    props: {
      categoryTwo: {
        type: Array,
        default() {
          return []
        }
      },
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      itemclick(index) {
        this.currentIndex = index;
        this.$emit('LevelTwoSpecialClick', index)
      }
    }
  }
</script>

<style scoped>
  .level-three {
    position: absolute;
    line-height: 60px ;
    width: 350px;
    font-size: 30px;
    background-color: white;
    z-index: 9;
    text-align: center;
    box-shadow: #6c757d 0 1px 5px;
    right: 30px;
    top: 90px;
  }
  .active {
    color: white;
    background-color: #E5C59C;
  }
</style>