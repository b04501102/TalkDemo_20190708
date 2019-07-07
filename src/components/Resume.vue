<template lang="pug">
  .resume
    .name {{ name }}
    .title {{ title }}
    .self_introduction {{ self_introduction }}
    .email {{ email }}
    .experience
      Timeline(:events='experience')
</template>

<script>
import Timeline from '@/components/Timeline'
export default {
  props: {
    name: String,
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
