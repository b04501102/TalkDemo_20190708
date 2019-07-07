<template lang="pug">
  ul.timeline
    li.timeline_item(v-for='event in events') {{ event.date }} {{ event.title }}
</template>
<script>
export default {
  props: {
    events: Array
  }
}
</script>
