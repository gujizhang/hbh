<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
    export default {
      name: "Scroll",
      props:{

      },
      data(){
            return {
              scroll:null
            }
          },
      mounted() {
            this.scroll=new BScroll(this.$refs.wrapper,{
              startX: 0,
              click: false,
              scrollX: true,
              eventPassthrough: "vertical",
              bounce: true
            })
          }
    }
</script>

<style scoped>

</style>
