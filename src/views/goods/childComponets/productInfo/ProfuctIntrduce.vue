<template>
  <div class="profuct-intrduce">
    <div>
      <img class="img-one" src="~assets/img/goods/goodsInfo/introduce.png" alt="">
    </div>
    <div class="content">
      <div class="case-analysis">
        <div class="title">-------案例分析-------</div>
        <span>事件描述</span>
        <div >{{message}}</div>
        <span>保险赔付</span>
        <div >{{message}}</div>
      </div>
      <div class="problems">
        <div class="title">-------常见问题-------</div>
        <span>这件产品保障有些什么优势？</span>
        <div>{{message}}</div>
        <span>如何进行保单验真</span>
        <div >{{message}}</div>
        <span>为什么要买医美意外险</span>
        <div >{{message}}</div>
        <span>承担保险公司实力如何</span>
        <div >{{message}}</div>

        <div>
          <img class="img-two"src="~assets/img/goods/goodsInfo/normalProblem.png" alt="">
        </div>
      </div>
      <div class="after-sale">
        <div class="title">-------售后服务-------</div>
        <span>客户可以通过以下方式进行保单验真</span>
        <div >{{message}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfuctIntrduce",
    props: {
      message: {
        type: String,
      }
    },
  }
</script>

<style scoped>
  .profuct-intrduce{
    background-color: white;
    width: 90%;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: #6c757d 0 1px 5px;
  }
  .img-one {
    display: block;
    width: 50%;
    margin: 30px auto;
    padding-top: 30px;
  }
  .img-two{
    display: block;
    width: 100%;
    margin: 30px auto;
    padding-top: 30px;
  }
  .content {
    margin: 0 45px;
    color: #555555;
    padding-bottom: 50px;
    letter-spacing: 1px;
  }
  .title {
    color: #E56E3A;
    font-weight: bolder;
    font-size: 30px;
    text-align: center;
    margin: 20px;
    letter-spacing: 3px;
  }
  span {
    display: block;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #E8855A;
    font-size: 25px;
    letter-spacing: 2px;
  }
</style>