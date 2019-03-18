<template>
  <component
    :is="is"
    class="el-heading"
    :class="[`el-heading--level-${level}`]"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    level: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    is() {
      return 'h' + this.level
    },
  },
}
</script>

<style lang="scss" scoped>
.el-heading {
  $block-name: &;

  margin: 20px 0 10px;
  font-weight: bold;

  &--level {
    &-1 {
      font-size: 28px;
    }
    &-2 {
      font-size: 24px;
    }
    &-3 {
      font-size: 20px;
    }
    &-4 {
      font-size: 18px;
    }
    &-5 {
      font-size: 16px;
    }
    &-6 {
      font-size: 16px;
      font-weight: normal;
    }
  }
}
</style>
