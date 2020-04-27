<template>
  <div class="product-collapse">
    <collapse v-model="activeNames">
      <collapse-item title="投保须知" name="1" >{{info}}
        <div class="link-one"><a href="https://github.com/">点击查看完整信息</a></div>
      </collapse-item>
      <collapse-item title="浩保行平台协议" name="2">{{info}}</collapse-item>
      <collapse-item title="保险条款" name="3" >{{info}}</collapse-item>
      <collapse-item title="投保人声明" name="4" >{{info}}</collapse-item>
    </collapse>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Collapse, CollapseItem } from 'vant';


  Vue.use(Collapse);
  Vue.use(CollapseItem);
  export default {
    name: "ProductCollapse",
    components: {
      Collapse,
      CollapseItem
    },
    data() {
      return {
        activeNames: ['1'],
        info:'《山海经》全书记载了约40个邦国，550座山，300条水道，100多位历史人物，400多个神怪畏兽，该书总体按照地区不按时间把这些事物一一记录。所记事物大部分由南开始（《大荒经》由东开始，故有学者认为是南、西、北、东的方位顺序与远古上南下北同，故《大荒经》由东开始，则可能是后人的改动调整），然后向西，再向北，最后到达大陆（九州）中部。九州四围被东海、西海、南海、北海所包围。古代中国也一直把《山海经》作历史看待，是中国各代史家的必备参考书。由于该书成书年代久远，连司马迁写《史记》时也认为：“至《禹本纪》，《山海经》所有怪物，余不敢言之也。”对古代历史、地理、植物、动物、文化、交通、民俗、神话等研究，均有重要的参考价值。关于《山海经》全书涉及的地域范围及相关物事虚实，历来众说纷纭。很多学者都认为是一次国家地理大普查之后的文献记载，有一些确实能确定下来，比如黄河、渭河、华山等等，地理位置与现实的大体一致。事实上，即是是《五藏山经》，也与整体格局和现实的山川不合，至今为止，尚未有谁能令人信服地将这些山川一一坐实。然而，《五藏山经》所描述的山川有些是存在的，特别是《中山经》里的山，《五藏山经》（即“山经”）本是以一些真实的山川为基础来叙事的，但说到荒远无稽的极地，已是无能为力，只能凭借想象向壁虚构了'
      };
    },
  }
</script>

<style scoped>
  .product-collapse {
    width: 90%;
    margin: 20px auto;
  }
  .link-one a{
    display: block;
    color: #E46D3B;
    font-size: 20px;
    padding-top: 20px;
    text-align: center;
  }
</style>