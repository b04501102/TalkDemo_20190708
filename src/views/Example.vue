<template lang='pug'>
  .home.container-fluid
    .row
      .col-sm-8.d-flex.align-items-center.justify-content-center
        transition(name="slide-fade" mode="out-in" @after-leave='() => this.transiting = false')
          BusinessCard(v-if='mode===0' 
                      :name='fields.name' 
                      :title='fields.title' 
                      :self_introduction='fields.self_introduction' 
                      :email='fields.email')
          Resume(v-if='mode===1' 
                :name='fields.name' 
                :image='fields.image'
                :title='fields.title' 
                :self_introduction='fields.self_introduction' 
                :email='fields.email'
                :experience='fields.experience')
      Form.col-sm-4(:fields='fields' v-model='fields')
</template>

<script>
// @ is an alias to /src
import Form from '@/components/Form.vue'
import BusinessCard from '@/components/BusinessCard.vue'
import Resume from '@/components/Resume.vue'

const modes = [
  {
    name: 'Business Card'
  },
  {
    name: 'Resume'
  }
]

export default {
  name: "home",
  data() {
    return {
      fields: {
        name: 'Rainforest',
        image: null,
        title: 'R&D Engineer',
        self_introduction: '喜愛寫程式、有質感的事物或用程式做出有質感的事物',
        email: 'rainforestnick@gmail.com',
        experience: [
          {
            date: '2016.07',
            title: '台大土木CAE暑期實習',
            description: '負責 Coursera 影片剪輯、石化管線資料庫視覺化網站的修改、以及拿災害相關文獻做斷詞及詞頻統計以建立語料庫'
          },
          {
            date: '2016.09',
            title: '畢業專題遊戲開發',
            description: '負責遊戲中戰鬥機制程式編寫'
          },
          {
            date: '2018.07',
            title: '衛武資訊研發部門 研發工程師',
            description: '負責產品 iOS, 網頁端開發'
          }
        ]
      },
      mode: 0,
      transiting: false
    }
  },
  mounted() {
    window.addEventListener('wheel', this.wheelEvt)
  },
  methods: {
    wheelEvt(event) {
      if(event.deltaY > 0 && !this.transiting) { this.mode = (this.mode+1) % modes.length }
      else if(event.deltaY < 0 && !this.transiting) { this.mode = (modes.length + this.mode-1) % modes.length }
      this.transiting = true
    }
  },
  components: {
    Form,
    BusinessCard,
    Resume
  }
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

