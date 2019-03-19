<template>
  <div>
    <el-select v-model="value" :options="options" />
    {{ value }}
    <el-select v-model="valueObject" :options="options" :by-object="true" />
    {{ valueObject }}
    <el-select
      v-model="valueOtherObject"
      :options="otherOptions"
      :by-object="true"
      object-name="title"
      object-value="id"
    />
    {{ valueOtherObject }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 2,
      valueObject: { name: 'Option 3', value: 3 },
      valueOtherObject: null,
      options: [
        { name: 'Option 1', value: 1 },
        { name: 'Option 2', value: 2 },
        { name: 'Option 3', value: 3 },
        { name: 'Option 4', value: 4 },
      ],
      otherOptions: [
        { title: 'Option 1', id: 1 },
        { title: 'Option 2', id: 2 },
        { title: 'Option 3', id: 3 },
        { title: 'Option 4', id: 4 },
      ],
    }
  },
}
</script>
