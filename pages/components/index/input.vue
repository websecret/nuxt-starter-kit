<template>
  <div>
    <el-heading :level="4">Simple</el-heading>
    <el-input v-model="value" placeholder="Placeholder" />

    <el-heading :level="4">Mask</el-heading>
    <el-input
      v-model="maskValue"
      :mask="['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/]"
      placeholder="Mask"
    />

    <el-heading :level="4">Date</el-heading>
    <el-input v-model="dateValue" type="date" placeholder="Date" />

    <el-heading :level="4">Textarea</el-heading>
    <el-input v-model="value" type="textarea" placeholder="Textarea" />

    <el-heading :level="4">With Errors</el-heading>
    <el-input
      v-model="value"
      placeholder="Errors"
      :errors="['Error 1', 'Error2']"
    />

    <div>
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      maskValue: null,
      dateValue: null,
    }
  },
}
</script>
