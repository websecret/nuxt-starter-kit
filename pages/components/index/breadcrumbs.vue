<template>
  <div>
    <el-heading :level="4">Simple</el-heading>
    <el-breadcrumbs :items="items" />

    <el-heading :level="4">Custom Separator</el-heading>
    <el-breadcrumbs :items="items">
      <span slot="separator">
        >
      </span>
    </el-breadcrumbs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { name: 'Index', href: '#' },
        { name: 'Child', to: { name: 'index' } },
        {
          name: 'Child of Child',
          to: { name: 'components-index-breadcrumbs' },
        },
      ],
    }
  },
}
</script>
