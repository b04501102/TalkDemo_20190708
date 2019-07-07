<template lang="pug">
  .business_card.card.m-3
    .card-body.d-flex.flex-column.align-items-start.justify-content-center
      .name.card-title {{ name }}
      .title.card-subtitle {{ title }}
      .email.card-text {{ email }}
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

<style lang="scss" scoped>
.business_card {
  color: $dark;
  width: 400px;
  height: 225px;
}
</style>
