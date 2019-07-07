<template lang="pug">
  form.card.align-items-center.justify-content-center.bg-transparent.container
    Input.w-100(id='name' label='Name' :value='fields.name' v-model='fields.name')
    Input.w-100(id='title' label='Title' :value='fields.title' v-model='fields.title')
    Input.w-100(id='email' label='E-mail' :value='fields.email' v-model='fields.email')
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
