<template lang="pug">
  .custom_input
    label(:for='id') {{ label }}
    input(:id='id' :value='value' @input='$emit("input", $event.target.value)')
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    value: String
  }
}
</script>

