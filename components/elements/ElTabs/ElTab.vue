<template>
  <div class="el-tab" v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    isActive() {
      return this.$parent.value === this.name
    },
  },
}
</script>

<style lang="scss" scoped>
.el-tab {
  $block-name: &;

  border: 1px #000 solid;
  border-top: none;
  padding: 10px;
}
</style>
