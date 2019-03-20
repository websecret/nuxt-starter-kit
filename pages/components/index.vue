<template>
  <section class="container">
    <el-button :to="{ name: 'components-index-heading' }">Heading</el-button>
    <el-button :to="{ name: 'components-index-button' }">Button</el-button>
    <el-button :to="{ name: 'components-index-input' }">Input</el-button>
    <el-button :to="{ name: 'components-index-select' }">Select</el-button>
    <el-button :to="{ name: 'components-index-check' }">Check</el-button>
    <el-button :to="{ name: 'components-index-dropdown' }">Dropdown</el-button>
    <el-button :to="{ name: 'components-index-breadcrumbs' }">
      Breadcrumbs
    </el-button>
    <el-button :to="{ name: 'components-index-tabs' }">Tabs</el-button>
    <el-button :to="{ name: 'components-index-modal' }">Modal</el-button>
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
