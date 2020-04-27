<template>
  <div>
    <div class="level-two-special">
      <div v-for="(item,index) in category"
           class="level-two-special-item"
           :class="{active: index === currentIndex}"
           @click="itemclick(index)"
      >
        <div>{{item}}</div>
      </div>
    </div>
    <level-three class="three"
                 :categoryTwo="categoryTwo[currentIndex].list"
    />
  </div>
</template>

<script>
  import LevelThree from "./LevelThree";

  export default {
    name: "LevelTwoSpecial",
    components: {
      LevelThree
    },
    props: {
      category: {
        type: Array,
        default() {
          return []
        }
      },
    },
    data() {
      return {
        currentIndex: 0,
        categoryTwo: [
          {},
          {
            name:'HealthCare',
            list:['全部','百万医疗','重疾险','医美险','手术意外险']
          },
          {
            name:'Accident',
            list:['全部','团体意外','交通意外','学生平安','户外运动']
          },
          {
            name:'Life',
            list:['全部','寿险']
          },
          {
            name:'Travel',
            list: ['全部','境内旅游','境外旅游']
          },
          {
            name:'Property',
            list:['全部','家庭财产','企业财产','账户安全']
          },
          {
            name:'Liability',
            list:['全部','雇主责任']
          },
          {
            name:'Vehicle',
            list: ['全部','私家车辆','机构车辆']
          },
        ],
      }
    },
    methods: {
      itemclick(index){
        this.currentIndex = index;
        this.$emit('LevelTwoSpecialClick',index)
        if(index === 0) {
          this.$router.push({path: '/product',query:{ insurance:'insurance'}})//上次写到这里了！！！！！
        }
      }
    }
  }
</script>

<style scoped>
.level-two-special {
  position: relative;
  line-height: 60px ;
  width: 360px;
  font-size: 30px;
  background-color: white;
  z-index: 9;
  text-align: center;
  box-shadow: #6c757d 0 1px 5px;
}
.level-two-special-item {
  height: 60px;
  box-shadow: #6c757d 0 0.3px 1px;
}
.active {
  color: white;
  background-color: #E5C59C;
}
</style>