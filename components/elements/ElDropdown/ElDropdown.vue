<template>
  <div
    v-click-outside="handleClickOutside"
    class="el-dropdown"
    :class="classes"
    @click="handleClick"
  >
    <slot name="activator">
      <el-button>{{ _value }}</el-button>
    </slot>
    <div class="el-dropdown__menu">
      <slot>
        <el-dropdown-item
          v-for="(item, index) in items"
          :key="index"
          v-bind="item"
          @click.native="handleItemClick(item)"
        >
          {{ item.name }}
        </el-dropdown-item>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      opened: false,
    }
  },

  computed: {
    classes() {
      return {
        'el-dropdown--opened': this.opened,
      }
    },
    isSelect() {
      return this.$options.propsData.hasOwnProperty('value')
    },
    _value() {
      if (this.isSelect) {
        const value = this.items.find(i => i.value === this.value)
        if (value !== null) {
          return value.name
        }
      }
      return this.name
    },
  },

  methods: {
    handleClick() {
      this.open()
    },
    handleClickOutside() {
      this.close()
    },
    open() {
      this.opened = !this.opened
    },
    close() {
      this.opened = false
    },
    handleItemClick(item) {
      if (this.isSelect) {
        this.$emit('input', item.value)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.el-dropdown {
  $block-name: &;

  position: relative;
  display: inline-block;

  &--opened {
    #{$block-name} {
      &__menu {
        display: inline-block;
      }
    }
  }

  &__menu {
    display: none;
    border: 1px #000 solid;
    border-top: none;
    border-radius: 0 0 4px 4px;
    position: absolute;
    left: 0;
    top: 100%;
    background: #fff;
    margin-top: -4px;
    overflow: hidden;
  }
}
</style>
