<template>
  <div>
    <el-modal name="testModal" title="Title" @showing="handleShowing">
      {{ name }}
    </el-modal>
    <el-button @click="handleClick">Show</el-button>
    <el-button v-modal="'testModal'">Directive</el-button>
    <el-button v-modal="{ name: 'testModal', params: { name: 'Directive' } }">
      Directive Object
    </el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
    }
  },
  methods: {
    handleShowing(params) {
      this.name = params == null ? 'EMPTY' : params.name
    },
    handleClick() {
      this.$modal.show('testModal', {
        name: 'Test Modal Content',
      })
    },
  },
}
</script>
