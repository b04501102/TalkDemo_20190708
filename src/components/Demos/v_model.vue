<template lang="pug">
  .v_model
    .row.demo_block.parent_component.m-5.align-items-center.justify-content-center
      b.col Parent Component
      Input.col(id='parent' label='data' :value='data' v-model='data')
    .row.demo_block.child_component.m-5.align-items-center.justify-content-center
      b.col Child Component
      Input.col(id='child' label='props' :value='data' v-model='data')
</template>
<script>
import Input from '@/components/Input.vue'
export default {
  data() {
    return {
      data: ''
    }
  },
  components: {
    Input
  }
}
</script>
<style lang="scss" scoped>
.parent_component {
  @include inset_shadow_with_border($teal);
  position: relative;
  &:after {
    content: '↑↓';
    font-size: 100px;
    font-weight: bold;
    position: absolute;
    bottom: -30%;
  }
}
.child_component {
  @include inset_shadow_with_border($purple);
}
</style>


