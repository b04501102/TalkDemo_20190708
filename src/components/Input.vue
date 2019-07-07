<template lang="pug">
  .custom_input.row
    label.col(:for='id') {{ label }}
    input.col(:id='id' :value='value' @input='$emit("input", $event.target.value)')
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

