<template>
  <div class="el-checkboxes">
    <div v-for="option in options" :key="option[objectValue]">
      <component
        :is="is"
        :value="
          multiple
            ? _value.indexOf(option[objectValue]) !== -1
            : _value === option[objectValue]
        "
        @input="e => change(option[objectValue], e)"
      >
        {{ option[objectName] }}
      </component>
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
    multiple: {
      type: Boolean,
      default: false,
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
        return this.multiple
          ? this.value.map(v => v[this.objectValue])
          : this.value[this.objectValue]
      }
      return this.value
    },
    is() {
      return this.multiple ? 'el-checkbox' : 'el-radio'
    },
  },
  methods: {
    change(value, checked) {
      if (this.multiple) {
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
      } else {
        this.$emit(
          'input',
          this.byObject
            ? this.options.find(o => o[this.objectValue] === value)
            : value,
        )
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.el-checkboxes {
  $block-name: &;
}
</style>
