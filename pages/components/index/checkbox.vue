<template>
  <div>
    <el-checkbox v-model="simple">Simple Checkbox</el-checkbox>
    {{ simple }}
    <el-checkboxes v-model="value" :options="options" />
    {{ value }}
    <el-checkboxes v-model="valueObject" :options="options" :by-object="true" />
    {{ valueObject }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      simple: false,
      value: [2, 4],
      valueObject: [{ name: 'Option 3', value: 3 }],
      options: [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 },
        { name: 'Option 4', value: 4 },
      ],
    }
  },
}
</script>
