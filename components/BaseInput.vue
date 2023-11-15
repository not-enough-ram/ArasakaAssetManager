<template>
    <div class="relative">
      <input
        :type="type"
        :value="modelValue"
        @input="updateValue"
        :placeholder="placeholder"
        class="w-full h-8 px-4 bg-bg border-2 border-primary text-primary placeholder-gray-600 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 ease-in-out"
      />
      <div class="absolute inset-0 pointer-events-none border-2 border-transparent transition-all duration-200 ease-in-out group-hover:border-highlight"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseInput',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String,
        default: ""
      },
      modelValue: {
        type: [String, Number, Array, File],
        default: ''
      },
    },
    methods: {
      updateValue(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
  </script>