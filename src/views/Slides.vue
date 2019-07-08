<template lang='pug'>
  .reveal
    .slides
      section
        h1 前端框架初探
        h3.speaker Rainforest
      section
        h2 Co-writing & Discussion
        img(src='https://i.imgur.com/qcf2UDx.png' width='40%')

      section
        h2 前端優勢
        ul
          li 門檻低
          li 跨平台
          li 傳播方便

      section 
        section
          h2 前端攻城獅養成計畫
          h3 前端三本柱
          img(src='https://i.imgur.com/OXKr2VH.png')
        section
          h3 前端框架
          img(src='https://i.imgur.com/1EUlgLN.png')
        section
          a(href='https://github.com/goodjack/developer-roadmap-chinese' target='_blank') 2019 年成為 Web 開發人員的路線圖
          img(src='https://i.imgur.com/ubb7XvN.png')
      section 
        h2 MVVM, Model-View-ViewModel
        ul
          li 資料與視圖分離
          li View 只負責如何呈現，介面的部分
          li ViewModel 實現資料及介面之間的邏輯關係
          li Model 存取資料
      section
        section
          a(href='https://cli.vuejs.org/zh/' target='_blank')
            h2 Vue CLI
          .row
            ul.col-sm-5
              li template → HTML
              li script → JavaScript
              li style → CSS
            .col-sm-6
              img(src='https://i.imgur.com/dnG1lPO.png')
        section
          h3 template
          ul
            li v-bind
            li v-for
            li v-if / v-show
            li v-on
        section
          .row
            .col-sm-6
              h4 template - v-bind
              VBIND
            .col-sm-6
              h4 template - v-model
              VMODEL
        section
          h4 template - v-for
          VFOR
        section
          h4 template - v-if / v-show
          VIF
        section
          h4 template - v-on
        section
          h3 script
          img(src='https://i.imgur.com/vS4mUkt.png')
        section
          h4 Life cycle
            img(src='https://i.imgur.com/RKILNRL.png')
      section 
        h2 Live Coding
</template>

<script>
// @ is an alias to /src
import Reveal from 'reveal.js/js/reveal'

import VBIND from '@/components/Demos/v_bind.vue'
import VMODEL from '@/components/Demos/v_model.vue'
import VFOR from '@/components/Demos/v_for.vue'
import VIF from '@/components/Demos/v_if.vue'

export default {
  mounted() {
    Reveal.initialize({
      controls: true,
      progress: true,
      // center: true,
      hash: true,
      slideNumber: true,
      overview: true,
      help: true,
      dependencies: [
        { src: 'plugin/highlight/highlight.js', async: true },
      ]
    })
  },
  components: {
    VBIND,
    VMODEL,
    VFOR,
    VIF
  }
};
</script>

<style lang="scss" scoped>
@import url('../../node_modules/reveal.js/css/reveal.css');
@import url('../../node_modules/reveal.js/css/theme/black.css');

.reveal {
  height: 90vh;
}
.speaker {
  position: relative;
  display: inline-block;
  &:before {
    content: 'Rainforest';
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-40%, 0);
    display: block;
    @include size(90%, 40%);
    background-color: rgba(#B2DFDB, 0.6);
    color: transparent;
  }
}
</style>

