<template>
  <div>
    <template v-for="(item, index) in items">
      <slot v-if="index !== 0" name="separator"> / </slot>
      <el-breadcrumbs-item :key="index" v-bind="item">
        {{ item.name }}
      </el-breadcrumbs-item>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.el-breadcrumbs {
  $block-name: &;
}
</style>
