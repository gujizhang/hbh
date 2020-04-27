<template>
  <div>
    <div class="scheme">
      <img src="~assets/img/goods/goodsInfo/scheme.png" alt="">
      <div id="table">
        <table class="info-param">
          <tr v-for="(info, index) in paramInfo.infos" :class="{title: index === 0}">
            <td class="info-param-key">{{info.key}}</td>
            <td class="param-value">{{info.value}}</td>
            <td class="param-price">{{info.price}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "scheme",
    props: {
      paramInfo: {
        type: Object
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .scheme {
    margin:30px auto;
  }
  #table {
    background-color: white;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
    border-radius: 16px;
    font-size: 20px;
    letter-spacing:1px;
    box-shadow: #6c757d 0 1px 5px;
  }
  .title{
    background-color: #c69500;
    color: white;
    font-size: 25px;
/*    margin: 20px;*/
  }
  img {
    display: block;
    width: 40%;
    margin: 30px auto;
  }
  .info-param {
    border: 1px solid rgba(0,0,0,.1);
    width: 100%;
    text-align: center;
    margin: 5px;
  }
  .info-param td {
    border: 1px solid rgba(0,0,0,.1);
  }
  .info-param-key {
    width: 50%;
    padding: 40px;
  }

</style>