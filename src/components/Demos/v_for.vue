<template lang="pug">
  .v_for
    .row.align-items-center.justify-content-center
      label.col(for='v_for') length of array
      input.col-sm-5(type='range' id='v_for' v-model='length')   
      label.col {{ length }}
    .row
      .demo_block.component.col.m-1.align-items-center.justify-content-center(v-for='item in Number(length)') {{ item }}
</template>
<script>
export default {
  data() {
    return {
      length: 1
    }
  }
}
</script>

<style lang="scss" scoped>
.component {
  @include inset_shadow_with_border($cyan);
}
</style>


