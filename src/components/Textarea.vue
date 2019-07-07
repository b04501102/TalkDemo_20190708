<template lang="pug">
  .custom_input.row.m-3
    label.col.text-left(:for='id') {{ label }}
    textarea.col-sm-8.bg-transparent.text-light(:id='id' :value='value' @input='$emit("input", $event.target.value)')
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


