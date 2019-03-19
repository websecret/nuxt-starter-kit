<template>
  <div>
    <div>
      <el-input v-model="value" placeholder="Placeholder" />
      <el-input
        v-model="maskValue"
        :mask="['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/]"
        placeholder="Mask"
      />
      <el-input v-model="dateValue" type="date" placeholder="Date" />
      <el-input v-model="value" type="textarea" placeholder="Textarea" />
      <el-input
        v-model="value"
        placeholder="Errors"
        :errors="['Error 1', 'Error2']"
      />
    </div>
    {{ value }}
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
