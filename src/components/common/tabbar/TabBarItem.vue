<template>
  <div class="tab-bar-item" @click="itemClick()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
          path:String,
          activeColor:{
            type:String,
            default:"red"
          }
        },
      computed:{
          isActive(){
            return this.$route.path.indexOf(this.path)!==-1;
          },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{};
        }
      },
        data(){
            return {
              // isActive: false
            }
        },
        methods:{
          itemClick(){
            this.$router.push(this.path);
          }
        }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 95px;
    font-size: 20px;
    color: #505050;
  }
  .tab-bar-item img{
    width: 52px;
    height: 80px;
    margin-top: 8px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
