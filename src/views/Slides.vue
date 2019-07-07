<template lang='pug'>
  .reveal
    .slides
      section
        h1 前端框架初探
        
      section
        h2 Co-writing & Discussion
        img(src='https://i.imgur.com/qcf2UDx.png')

      section
        h2 前端優勢
        ul
          li 門檻低
          li 跨平台
          li 傳播方便

      section 
        h2 前端攻城獅養成計畫
        section
          h3 前端三本柱
          img(src='https://i.imgur.com/OXKr2VH.png')
        section
          h3 前端框架
          img(src='https://i.imgur.com/1EUlgLN.png')
        section
          a(href='https://github.com/goodjack/developer-roadmap-chinese' target='_blank') 2019 年成為 Web 開發人員的路線圖
          img(src='https://i.imgur.com/ubb7XvN.png')
</template>

<script>
// @ is an alias to /src
import Reveal from 'reveal.js/js/reveal'

export default {
  mounted() {
    Reveal.initialize({
      controls: true,
      progress: true,
      center: true,
      hash: true
    })
  }
};
</script>

<style lang="scss" scoped>
@import url('../../node_modules/reveal.js/css/reveal.css');
@import url('../../node_modules/reveal.js/css/theme/black.css');

.reveal {
  height: 90vh;
}
</style>

