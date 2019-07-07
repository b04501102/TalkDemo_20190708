<template lang="pug">
  .business_card
    .name {{ name }}
    .title {{ title }}
    .email {{ email }}
</template>

<script>
export default {
  props: {
    name: String,
    title: String,
    email: String
  }
}
</script>

