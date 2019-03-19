<template>
  <component :is="is" v-bind="bind" class="el-breadcrumbs__item">
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
        result['active-class'] = 'el-breadcrumbs__item--active'
        result['exact-active-class'] = 'el-breadcrumbs__item--exact-active'
      } else if (this.href) {
        result.href = this.href
      }
      return result
    },
  },
}
</script>

<style lang="scss" scoped>
.el-breadcrumbs__item {
  $block-name: &;

  display: inline-block;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &--active {
    color: #555;
    pointer-events: none;
  }
}
</style>
