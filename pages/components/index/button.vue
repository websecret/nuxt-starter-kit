<template>
  <div>
    <el-heading :level="4">Simple</el-heading>
    <el-button>I am Button</el-button>
    <el-button :rounded="true">Rounded</el-button>

    <el-heading :level="4">Sizes</el-heading>
    <el-button size="sm">Small</el-button>
    <el-button size="lg">Large</el-button>

    <el-heading :level="4">Block</el-heading>
    <el-button :block="true">Block</el-button>

    <el-heading :level="4">With Icon</el-heading>
    <el-button icon-prepend="websecret-dark">Icon Prepend</el-button>
    <el-button icon-append="websecret-dark">Icon Append</el-button>

    <el-heading :level="4">State</el-heading>
    <el-button :disabled="true">Disabled</el-button>
    <el-button :loading="true">Loading</el-button>
  </div>
</template>
