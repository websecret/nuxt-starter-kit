<template>
  <div>
    <p>
      <el-button>I am Button</el-button>
    </p>
    <p>
      <el-button :rounded="true">Rounded</el-button>
    </p>
    <p>
      <el-button size="sm">Small</el-button>
      <el-button size="lg">Large</el-button>
    </p>
    <p>
      <el-button :block="true">Block</el-button>
    </p>
    <p>
      <el-button icon-prepend="websecret-dark">Icon Prepend</el-button>
      <el-button icon-append="websecret-dark">Icon Append</el-button>
    </p>
    <p>
      <el-button :disabled="true">Disabled</el-button>
      <el-button :loading="true">Loading</el-button>
    </p>
  </div>
</template>
