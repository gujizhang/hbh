<template>
  <div>
    <tab-control ref="tabControl"
                 :titles="['险种' , '人群' , '保险公司']"
                 @tabClick="tabClick"
                 @seekClick="seekClick"
                 class="tab-contrl"
    />
    <level-two-special ref="level-two-insurance"
                        v-show="isShowInsurance"
                       :category="category.insurance"
    />

    <level-two ref="level-two-crowd"
               :category="category.crowd"
               class="level-two-crowd"
               v-show="isShowCrowd"
    />
    <level-two ref="level-two-firm"
               :category="category.firm"
               class="level-two-firm"
               v-show="isShowFirm"
    />
        <div v-show="isShowSeek"
             class="seek"
        >
          <label>
            <input class="input-field" type="text" >
          </label>
          <img src="~assets/img/goods/goodsList/Searchbaricon1.png" alt="">
        </div>
    </div>
</template>

<script>
  import TabControl from "components/content/tabControl/TabControl";
  import LevelTwo from "./LevelMenu/LevelTwo";
  import LevelTwoSpecial from "./LevelMenu/LevelTwoSpecial";

  export default {
    name: "MenuLevelOne",
    data() {
     return{
       category: {
         insurance: ['全部','健康医疗','意外保险','人寿保险','旅游保险','财产保险','责任保险','车辆保险'],
         crowd: ['全部','少儿','老人','成人','学生','家庭'],
         firm: ['全部','中国人保','太平洋保险','华泰保险','利宝保险']
       },
       isShowInsurance: false,
       isShowCrowd: false,
       isShowFirm: false,
       isShowSeek: false,
     }
    },
    components: {
      TabControl,
      LevelTwo,
      LevelTwoSpecial
    },
    methods: {
      //@
      tabClick(index) {
        this.$refs.tabControl.currentIndex = index;
        switch (index) {
          case 0:{
            this.isShowInsurance = !this.isShowInsurance
            this.isShowFirm = false
            this.isShowCrowd = false
            this.isShowSeek = false
          }
            break;
          case 1: {
            this.isShowCrowd = !this.isShowCrowd
            this.isShowFirm = false
            this.isShowInsurance = false
            this.isShowSeek = false

          }
            break;
          case 2:
          {
            this.isShowFirm = !this.isShowFirm
            this.isShowCrowd = false
            this.isShowInsurance = false
            this.isShowSeek = false
          }
            break;
        }
      },
      seekClick() {
        this.isShowSeek = !this.isShowSeek
        this.isShowFirm = false
        this.isShowCrowd = false
        this.isShowInsurance = false
      }

    }
  }
</script>

<style scoped>
  .tab-contrl {
    position: relative;
    z-index: 9;
    background-color: white;
  }
  .level-two {
    position: relative;
    z-index: 9;
    background-color: white;
  }
  .seek {
    position: relative;
    z-index: 9;
    background-color: #E5E5E5;
    height: 100px;
    border-radius:0 0 24px 24px;
  }
  .seek img {
    float: right;
    margin:1px;
    padding: 20px;
    background-color:#C79B5E ;
    height: 100%;
    padding-left: 25px;
    border-radius: 0 0 24px 0;
  }
  .input-field{
    width: 600px;
    height: 80%;
    position: relative;
    left: 20px;
    top: 20px;
    border-radius:20px;
  }
</style>