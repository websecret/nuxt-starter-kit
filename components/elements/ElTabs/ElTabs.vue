<template>
  <div class="el-tabs">
    <ul class="el-tabs__list">
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="el-tabs__list-item"
        :class="{ 'el-tabs__list-item--active': tab.name === value }"
      >
        <a
          class="el-tabs__list-item__link"
          href="#"
          @click.prevent="change(tab.name)"
          >{{ tab.name }}</a
        >
      </li>
    </ul>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    change(value) {
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.el-tabs {
  $block-name: &;

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    &-item {
      display: inline-block;
      border: 1px #777 solid;
      border-bottom: 0;
      border-radius: 4px 4px 0 0;
      &__link {
        display: inline-block;
        padding: 6px 10px;
        text-decoration: none;
        color: #777;
      }
      &--active {
        border-color: #000;
        #{$block-name}__list-item__link {
          color: #000;
          pointer-events: none;
        }
      }
    }
  }
}
</style>
