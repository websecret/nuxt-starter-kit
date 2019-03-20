<template>
  <label class="el-radio">
    <input
      class="el-radio__field"
      type="radio"
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
.el-radio {
  $block-name: &;
}
</style>
