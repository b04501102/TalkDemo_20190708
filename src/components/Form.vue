<template lang="pug">
  form.card.align-items-center.justify-content-center.bg-transparent.container
    Input.w-100(id='name' label='Name' :value='fields.name' v-model='fields.name')
    Input.w-100(type='url' id='image' label='Image' :value='fields.image' v-model='fields.image')
    Input.w-100(id='title' label='Title' :value='fields.title' v-model='fields.title')
    Textarea.w-100(id='self_introduction' label='Self Introduction' :value='fields.self_introduction' v-model='fields.self_introduction')
    Input.w-100(id='email' label='E-mail' :value='fields.email' v-model='fields.email')
</template>

<script>
import Input from '@/components/Input.vue'
import Textarea from '@/components/Textarea.vue'

export default {
  props: {
    fields: Object
  },
  components: {
    Input,
    Textarea
  }
}
</script>
