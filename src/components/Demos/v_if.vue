<template lang="pug">
  .v_if
    .row.align-items-center.justify-content-center
      label
        input(type='checkbox' name='checkbox' v-model='isVisible')
        span.check
    .row.demo_block.component.m-1.align-items-center.justify-content-center(v-if='isVisible') v-if
    .row.demo_block.component.m-1.align-items-center.justify-content-center(v-show='isVisible') v-show
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
    }
  }
}
</script>

<style lang="scss" scoped>
input[type='checkbox'] {
  display: block;
  text-align: center;
  position: absolute;
  opacity: 0;
  &:checked ~ .check {
    &:before {
      background: rgba(0, 176, 255, 1);
      box-shadow: 0 0 10px rgba(0, 176, 255, 1),
                  0 0 15px rgba(0, 176, 255, 1),
                  0 0 20px rgba(0, 176, 255, 1),
                  0 0 25px rgba(0, 176, 255, 1),
                  0 0 0 2px rgba(0, 176, 255, 1);
    }
  }
}
.check {
  position: relative;
  display: block;
  width: 50px;
  height: 50px;
  background: linear-gradient(#000, #333);
  border-radius: 50%;
  margin: 10px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #1b1b1b;
    transition: 0.5s;
    z-index: 3;
  }
  &:after {
    content: '';
    position: absolute;
    top: 6px;
    left: 6px;
    right: 6px;
    bottom: 6px;
    background-color: #222;
    border-radius: 50%;
    z-index: 2;
    border: 2px solid #161616;
  }
}
.component {
  @include inset_shadow_with_border($pink);
}
</style>


