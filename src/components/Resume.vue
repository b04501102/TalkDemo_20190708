<template lang="pug">
  .resume.container.bg-light.p-3.m-3
    .row.mb-3
      .col
        //- img.head_shot(:src='image')
        .head_shot(:style='{ backgroundImage: "url(" + image + ")" }')
      .col-sm-8.d-flex.flex-column.align-items-start.justify-content-center
        h2.name {{ name }}
        .title {{ title }}
        .self_introduction {{ self_introduction }}
    .row
      .col
        .email {{ email }}
      .col-sm-8
        .experience
          Timeline(:events='experience')
</template>

<script>
import Timeline from '@/components/Timeline'
export default {
  props: {
    name: String,
    image: String,
    title: String,
    self_introduction: String,
    email: String,
    experience: Array
  },
  components: {
    Timeline
  }
}
</script>
<style lang="scss" scoped>
.resume {
  @include size(80%, 500px);
  color: $dark;
  .head_shot {
    @include size(200px);
    background-size: cover;
    background-position: 50% 50%;
  }
  .name {
    font-family: 'Abril Fatface', cursive;
  }
}
</style>

