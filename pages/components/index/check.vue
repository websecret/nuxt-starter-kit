<template>
  <div>
    <el-heading :level="3">Radio</el-heading>
    <el-heading :level="4">Simple</el-heading>
    <el-radio v-model="simple">Simple Radio</el-radio>
    {{ simple }}
    <el-heading :level="4">Multiple</el-heading>
    <el-check v-model="checkboxValue" :options="options" />
    {{ checkboxValue }}
    <el-heading :level="4">Multiple Object</el-heading>
    <el-check
      v-model="checkboxValueObject"
      :options="options"
      :by-object="true"
    />
    {{ checkboxValueObject }}

    <el-heading :level="3">Checkbox</el-heading>
    <el-heading :level="4">Simple</el-heading>
    <el-checkbox v-model="simple">Simple Checkbox</el-checkbox>
    {{ simple }}
    <el-heading :level="4">Multiple</el-heading>
    <el-check v-model="value" :options="options" :multiple="true" />
    {{ value }}
    <el-heading :level="4">Multiple Object</el-heading>
    <el-check
      v-model="valueObject"
      :options="options"
      :by-object="true"
      :multiple="true"
    />
    {{ valueObject }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      simple: false,
      checkboxValue: 2,
      checkboxValueObject: { name: 'Option 3', value: 3 },
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
