<template>
  <component
    :is="is"
    v-bind="bind"
    class="el-button"
    :class="classes"
    @click="handleClick"
  >
    <svg-icon
      v-if="iconPrepend"
      width="24"
      height="24"
      class="el-button__icon el-button__icon--prepend"
      :name="iconPrepend"
    />
    <span class="el-button__text"><slot></slot></span>
    <svg-icon
      v-if="iconAppend"
      width="24"
      height="24"
      class="el-button__icon el-button__icon--append"
      :name="iconAppend"
    />
    <span v-if="loading" class="el-button__loader">
      <ball-clip-rotate-multiple-loader
        color="inherit"
        size="16px"
      ></ball-clip-rotate-multiple-loader>
    </span>
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
    iconPrepend: {
      type: String,
      default: null,
    },
    iconAppend: {
      type: String,
      default: null,
    },
    submit: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    is() {
      if (this.to) {
        return 'nuxt-link'
      } else if (this.href) {
        return 'a'
      }
      return 'button'
    },
    bind() {
      const result = {}
      if (this.to) {
        result.to = this.to
        result['active-class'] = 'el-button--active'
        result['exact-active-class'] = 'el-button--exact-active'
      } else if (this.href) {
        result.href = this.href
      } else if (this.submit) {
        result.type = 'submit'
      }
      if (this.disabled || this.loading) {
        result.disabled = true
      }
      return result
    },

    classes() {
      return {
        [`el-button--color-${this.color}`]: this.color,
        [`el-button--size-${this.size}`]: this.size,
        'el-button--loading': this.loading,
        'el-button--rounded': this.rounded,
        'el-button--block': this.block,
      }
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
.el-button {
  $block-name: &;

  font-family: inherit;

  display: inline-block;
  position: relative;
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  padding: 10px;
  background-color: #ffffff;
  border: 1px #000 solid;
  color: #000;
  cursor: pointer;
  border-radius: 4px;
  text-decoration: none;

  &:hover,
  &:focus {
    border-color: #555;
    color: #555;
  }

  &:active {
  }

  &--active {
    font-weight: bold;
  }

  &__text {
    color: inherit;
    transition: inherit;
  }

  &__icon {
    width: 24px;
    height: 24px;
    margin: -7px -5px;
    &--prepend {
      margin-right: 4px;
    }
    &--append {
      margin-left: 4px;
    }
  }

  &:disabled {
    pointer-events: none;
    color: #777;
    border-color: #777;
  }

  &--size {
    &-sm {
      font-size: 12px;
      padding: 5px 7px;
    }
    &-lg {
      font-size: 16px;
      padding: 14px;
    }
  }

  &__loader {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    line-height: inherit;
    background: rgba(255, 255, 255, 0.8);
    .vue-loaders {
      top: 50%;
      margin-top: -8px;
      left: 50%;
      margin-left: -8px;
      display: block;
    }
  }

  &--loading {
    #{$block-name} {
      &__loader {
        display: block;
      }
    }
  }

  &--rounded {
    border-radius: 18px;
  }

  &--block {
    display: block;
    width: 100%;
  }
}
</style>
