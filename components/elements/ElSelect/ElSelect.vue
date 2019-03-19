<template>
  <select
    class="el-select"
    :value="_value"
    @input="e => change(e.target.value)"
  >
    <option v-if="allowNull" :value="null">
      -Не выбран-
    </option>
    <option
      v-for="option in options"
      :key="option[objectValue]"
      :value="option[objectValue]"
    >
      {{ option[objectName] }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    byObject: {
      type: Boolean,
      default: false,
    },
    objectName: {
      type: String,
      default: 'name',
    },
    objectValue: {
      type: String,
      default: 'value',
    },
    allowNull: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    _value() {
      if (this.value == null) return null
      if (this.byObject) {
        return this.value[this.objectValue]
      }
      return this.value
    },
  },
  methods: {
    change(value) {
      let _value = value
      if (this.byObject) {
        _value = this.options.find(o => '' + o[this.objectValue] === value)
      }
      this.$emit('input', _value)
    },
  },
}
</script>

<style lang="scss" scoped>
.el-select {
  $block-name: &;

  display: inline-block;
  border: 1px #000 solid;
  color: #000;
  padding: 6px 8px;
  font-size: 14px;
  border-radius: 2px;
}
</style>
