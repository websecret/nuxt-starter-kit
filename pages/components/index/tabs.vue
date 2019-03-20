<template>
  <div>
    <el-tabs v-model="value">
      <el-tab name="first">First</el-tab>
      <el-tab name="second">Second</el-tab>
      <el-tab name="third">Third</el-tab>
    </el-tabs>
    {{ value }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'first',
    }
  },
}
</script>
