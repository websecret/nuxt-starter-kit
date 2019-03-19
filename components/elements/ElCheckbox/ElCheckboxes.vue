<template>
  <div class="el-checkboxes">
    <div v-for="option in options" :key="option[objectValue]">
      <el-checkbox
        :value="_value.indexOf(option[objectValue]) !== -1"
        @input="e => change(option[objectValue], e)"
      >
        {{ option[objectName] }}
      </el-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
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
      if (this.value == null) return []
      if (this.byObject) {
        return this.value.map(v => v[this.objectValue])
      }
      return this.value
    },
  },
  methods: {
    change(value, checked) {
      let _value = this._value.concat()
      if (checked) {
        _value.push(value)
      } else {
        const index = _value.findIndex(v => v === value)
        _value.splice(index, 1)
      }
      if (this.byObject) {
        _value = _value.map(v =>
          this.options.find(o => o[this.objectValue] === v),
        )
      }
      this.$emit('input', _value)
    },
  },
}
</script>

<style lang="scss" scoped>
.el-checkboxes {
  $block-name: &;
}
</style>
