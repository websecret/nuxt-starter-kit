<template>
  <div class="el-input">
    <textarea
      v-if="type === 'textarea'"
      class="el-input__field"
      :placeholder="placeholder"
      :value="_value"
      @input="e => change(e.target.value)"
    />
    <masked-input
      v-else-if="mask"
      class="el-input__field"
      :type="type"
      :placeholder="placeholder"
      :value="_value"
      :mask="mask"
      @input="change"
    />
    <flat-pickr
      v-else-if="type === 'date'"
      class="el-input__field"
      :placeholder="placeholder"
      :value="_value"
      :config="flatPickrConfig"
      @input="change"
    />
    <input
      v-else
      class="el-input__field"
      :type="type"
      :placeholder="placeholder"
      :value="_value"
      @input="e => change(e.target.value)"
    />
    <div class="el-input__errors">
      <div
        v-for="(error, index) in errors"
        :key="index"
        class="el-input__error"
      >
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import FlatPickrRu from 'flatpickr/dist/l10n/ru.js'

export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: null,
    },
    mask: {
      type: Array,
      default: null,
    },
    errors: {
      type: Array,
      default: null,
    },
  },
  computed: {
    _value() {
      if (this.value == null) return ''
      return this.value
    },
    flatPickrConfig() {
      return {
        locale: FlatPickrRu.ru,
      }
    },
  },
  methods: {
    change(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.el-input {
  $block-name: &;

  display: inline-block;

  &__field {
    border: 1px #000 solid;
    padding: 4px 6px;
    border-radius: 2px;
    font-size: 14px;
  }

  &__errors {
    font-size: 12px;
    color: #f00;
  }
}
</style>
