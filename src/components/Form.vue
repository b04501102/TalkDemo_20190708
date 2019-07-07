<template lang="pug">
  form
    Input(id='name' label='Name' :value='fields.name' v-model='fields.name')
    Input(id='title' label='Title' :value='fields.title' v-model='fields.title')
    Input(id='email' label='E-mail' :value='fields.email' v-model='fields.email')
</template>

<script>
import Input from '@/components/Input.vue'

export default {
  props: {
    fields: Object
  },
  components: {
    Input
  }
}
</script>
