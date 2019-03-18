<template>
  <div>
    <div>
      <el-dropdown :items="items" name="Dropdown"></el-dropdown>

      <el-dropdown name="Dropdown Separator">
        <template>
          <el-dropdown-item>First</el-dropdown-item>
          <el-dropdown-item>Second</el-dropdown-item>
          <el-dropdown-separator />
          <el-dropdown-item>Third</el-dropdown-item>
        </template>
      </el-dropdown>

      <el-dropdown :items="items">
        <el-button slot="activator" icon-append="websecret-dark">
          Custom Activator
        </el-button>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Value 1', to: { name: 'components-index-dropdown' } },
        { name: 'Value 2', to: '/' },
        { name: 'Value 3', to: '/' },
      ],
    }
  },
}
</script>
