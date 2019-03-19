<template>
  <section class="container">
    <el-button :to="{ name: 'components-index-heading' }">Heading</el-button>
    <el-button :to="{ name: 'components-index-button' }">Button</el-button>
    <el-button :to="{ name: 'components-index-input' }">Input</el-button>
    <el-button :to="{ name: 'components-index-dropdown' }">Dropdown</el-button>
    <hr style="margin: 20px 0" />
    <nuxt-child></nuxt-child>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}
</style>
