<template lang="pug">
  .custom_input.row.m-3
    label.col.text-left(:for='id') {{ label }}
    input.col-sm-8.bg-transparent.text-light(:type='type' :id='id' :value='value' @input='$emit("input", $event.target.value)')
</template>

<script>
export default {
  props: {
    type: String,
    id: String,
    label: String,
    value: String
  }
}
</script>


