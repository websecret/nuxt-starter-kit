<template>
  <div>
    <el-breadcrumbs :items="items" />
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
