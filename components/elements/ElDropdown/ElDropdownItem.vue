<template>
  <component :is="is" v-bind="bind" class="el-dropdown__item">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: null,
    },
    href: {
      type: String,
      default: null,
    },
  },
  computed: {
    is() {
      if (this.to) {
        return 'nuxt-link'
      } else if (this.href) {
        return 'a'
      }
      return 'span'
    },
    bind() {
      const result = {}
      if (this.to) {
        result.to = this.to
        result['active-class'] = 'el-dropdown__item--active'
        result['exact-active-class'] = 'el-dropdown__item--exact-active'
      } else if (this.href) {
        result.href = this.href
      }
      return result
    },
  },
}
</script>

<style lang="scss" scoped>
.el-dropdown__item {
  $block-name: &;

  color: #000;
  text-decoration: none;
  padding: 4px 10px;
  display: block;
  font-size: 14px;

  &:hover {
    background-color: #eee;
  }
}
</style>
