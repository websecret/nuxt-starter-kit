<template>
  <portal to="modal">
    <div class="el-modal" :class="{ 'el-modal--visible': visible && !loading }">
      <div v-click-outside="handleClickOutside" class="el-modal__box">
        <div class="el-modal__head">
          <div class="el-modal__title">
            <slot name="title">{{ title }}</slot>
          </div>
        </div>
        <div class="el-modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </portal>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    show(params) {
      this.$emit('showing', params)
      this.visible = true
      this.$emit('shown', params)
    },
    handleClickOutside(e) {
      if (e.target.classList.contains('el-modal')) {
        this.hide()
      }
    },
    hide() {
      this.$emit('hiding')
      this.visible = false
      this.$emit('hide')
    },
  },
}
</script>

<style lang="scss" scoped>
.el-modal {
  $block-name: &;

  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  text-align: center;
  font-size: 0;
  background-color: rgba(100, 100, 100, 0.8);
  z-index: 6500;
  visibility: hidden;
  backface-visibility: hidden;
  opacity: 0;
  transform: scale(0);
  transition: visibility 0s ease 0.25s, transform 0s ease 0.25s,
    opacity 0.25s ease, width 0s ease 0.25s, height 0s ease 0.25s;
  &:before {
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    content: '';
  }
  &__box {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    white-space: normal;
    vertical-align: middle;
    padding: 15px 20px;
    width: 1120px;
    opacity: 0;
    transform: scale(0.6);
    transition: transform 0.25s ease, opacity 0.25s ease;
    background-color: #fff;
  }
  &__head {
    font-size: 16px;
  }
  &__body {
    position: relative;
    box-sizing: border-box;
    font-size: 16px;
  }
  /* opened popup */
  &--visible {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    transition: transform 0s ease, opacity 0.25s ease;
    .el-modal {
      &__box {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
}
</style>
