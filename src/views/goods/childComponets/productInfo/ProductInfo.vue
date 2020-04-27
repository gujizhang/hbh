<template>
  <div id="ProductInfo">
    <div class="tab-control"
         v-show="true"
    >
      <tab-control-two
              @itemClick="tabClick"
              :current-index="currentIndex"
              :titles="['保障方案', '价格', '产品介绍','理赔服务','投保须知']"
              ref="tabControl"></tab-control-two>
    </div>
    <div class="mainview">
      <scroll-ver class="content"
                  ref="scroll"
                  :probe-type="3"
                  :pull-up-load="true"
                  @scroll="contentScroll"
      >
        <top ref="top"></top>
        <scheme  ref="param" :param-info="paramInfo"/>
        <profuct-intrduce ref="intrduce" :message="message"/>
        <product-compensation ref="compensation" :compensation-details="compensationDetails" />
        <product-collapse ref="collapse"/>
      </scroll-ver>
      <product-bottom-bar/>
    </div>
  </div>
</template>

<script>
  import TabControlTwo from "../../../../components/content/tabControlTwo/TabControlTwo";
  import ScrollVer from "components/common/scroll/ScrollVer";

  import Top from "./Top";
  import Scheme from "./Scheme";
  import ProfuctIntrduce from "./ProfuctIntrduce";
  import ProductCompensation from "./ProductCompensation";
  import ProductCollapse from "./ProductCollapse";
  import ProductBottomBar from "./ProductBottomBar";

  export default {
    name: "ProductInfo",
    components: {
      TabControlTwo,
      ScrollVer,

      Top,
      Scheme,
      ProfuctIntrduce,
      ProductCompensation,
      ProductCollapse,
      ProductBottomBar
    },
    data (){
      return {
        paramInfo:{
          infos:[
            { key:'保险责任',value:'理赔时限',price:'保额'},
            { key:'医疗保险说明啦啦啦啦医疗保险说明啦啦啦啦医疗保险说明啦啦啦啦',value:'手术后n天',price:'9w'},
            { key:'医疗保险说明啦啦啦啦医疗保险说明啦啦啦啦医疗保险说明啦啦啦啦',value:'手术后n天',price:'1w'},
            { key:'医疗保险说明啦啦啦啦医疗保险说明啦啦啦啦医疗保险说明啦啦啦啦',value:'手术后n天',price:'5w'},
            { key:'医疗保险说明啦啦啦啦医疗保险说明啦啦啦啦医疗保险说明啦啦啦啦',value:'手术后n天',price:'2w'},
          ]
        },
        message:'姬女士真的好惨啊，什么事情都是她一个人扛姬女士真的好惨啊，什么事情都是她一个人扛姬女士真的好惨啊，什么事情都是她一个人扛姬女士真的好惨啊，什么事情都是她一个人扛姬女士真的好惨啊，什么事情都是她一个人扛姬女士真的好惨啊，什么事情都是她一个人扛姬女士真的好惨啊，什么事情都是她一个人扛',
        compensationDetails:[
          {
            title:'1.报案',
            detail:'我也不知道接下来要干啥'
          },
          {
            title:'2.索赔资料',
            detail:'我也emmm不知道接下来要干啥'
          },
          {
            title:'3.理赔付款方式',
            detail:'我也emmmmm木木木木木木木木木木木木木木木木木木木木木木木木木木木木木木木木不知道接下来要干啥'
          }
        ],
        themeTops: [],
        currentIndex: 0
      }
    },
    updated() {
      // 获取需要的四个offsetTop
      this._getOffsetTops()
    },
    methods: {
      _getOffsetTops() {
        this.themeTops = []
        this.themeTops.push(this.$refs.top.$el.offsetTop)
        this.themeTops.push(this.$refs.param.$el.offsetTop)
        this.themeTops.push(this.$refs.intrduce.$el.offsetTop)
        this.themeTops.push(this.$refs.compensation.$el.offsetTop)
        this.themeTops.push(this.$refs.collapse.$el.offsetTop)
        this.themeTops.push(Number.MAX_VALUE)
      },
      contentScroll(position) {
        this._listenScrollTheme(-position.y)
      },
      _listenScrollTheme(position) {
        let length = this.themeTops.length;
        for (let i = 0; i < length; i++) {
          let iPos = this.themeTops[i];
          if (position >= iPos && position < this.themeTops[i+1]) {
            if (this.currentIndex !== i) {
              this.currentIndex = i;
            }
            break;
          }
        }
      },
      tabClick(index) {
        console.log(this.index);
        console.log(this.themeTops[index]);
        this.$refs.scroll.scrollTo(0, -this.themeTops[index], 100)
      },
    }
  }
</script>

<style scoped>
  .tab-control{
    color: #807F7F;
    position: relative;
    z-index: 99;
  }
  #ProductInfo {
    /*100%视口高度*/
    height: 100vh;
    position: relative;
    background-color: #EDEDED;
  }
  .content {
    position: absolute;
    overflow: hidden;
    top: 0;
    bottom: 95px;
    width: 100%;
  }
  .tab-control{
    position: fixed;
    background-color: white;
  }
</style>