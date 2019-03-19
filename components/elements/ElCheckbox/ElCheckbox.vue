<template>
  <label class="el-checkbox">
    <input
      class="el-checkbox__field"
      type="checkbox"
      :checked="_value"
      @input="e => change(e.target.checked)"
    />
    <slot></slot>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: [Boolean, String, Number],
      required: true,
    },
    checkedValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    uncheckedValue: {
      type: [Boolean, String, Number],
      default: false,
    },
  },
  computed: {
    _value() {
      return this.value === this.checkedValue
    },
  },
  methods: {
    change(checked) {
      this.$emit('input', checked ? this.checkedValue : this.uncheckedValue)
    },
  },
}
</script>

<style lang="scss" scoped>
.el-checkbox {
  $block-name: &;
}
</style>
