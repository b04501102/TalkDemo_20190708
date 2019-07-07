<template lang="pug">
  ul.timeline.container
    li.timeline_item.row.align-items-center.justify-content-center.mb-3(v-for='event in events')
      .timeline_item_date.col-sm-6.text-right {{ event.date }}
      .col-sm-6.text-left
        h5.timeline_item_title {{ event.title }}
        .timeline_item_description {{ event.description }}
</template>
<script>
export default {
  props: {
    events: Array
  }
}
</script>

<style lang="scss" scoped>
.timeline {
  @include size(100%);
  &:before {
    content: '';
    border: solid 1px $dark;
    border-style: dashed;
    @include size(2px, 100%);
    position: absolute;
    right: 50%;
    transform: translateX(-50%);
  }
  .timeline_item {
    &:before {
      content: '';
      @include size(10px);
      position: absolute;
      background-color: $dark;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
    }
  }
}
</style>

