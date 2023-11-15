<template>
    <textarea
      :value="modelValue"
      @input="updateValue($event.target.value)"
      :placeholder="placeholder"
      :rows="rows"
      class="bg-bg border-2 border-primary text-primary placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 ease-in-out p-2"
      :style="{ minHeight, minWidth }"
    ></textarea>
  </template>
  
  <script>
  export default {
    name: 'BaseTextarea',
    props: {
      modelValue: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      rows: {
        type: [String, Number],
        default: 4
      },
      minHeight: {
        type: String,
        default: '100px'
      },
      minWidth: {
        type: String,
        default: '300px'
      }
    },
    methods: {
      updateValue(value) {
        this.$emit('update:modelValue', value);
      }
    }
  }
  </script>
  
  <style scoped>

  </style>
  