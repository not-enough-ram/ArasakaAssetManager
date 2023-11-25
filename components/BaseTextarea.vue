<template>
  <textarea
    :value="modelValue"
    @input="updateValue($event.target.value)"
    :placeholder="placeholder"
    :rows="rows"
    class="bg-bg w-full h-full border-2 border-primary text-primary placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all duration-200 ease-in-out p-2"
    :style="{ maxHeight, maxWidth }"
    :class="isValid ? '' : 'border-error'"
  ></textarea>
</template>

<script>
export default {
  name: 'BaseTextarea',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    rows: {
      type: [String, Number],
      default: 4,
    },
    maxHeight: {
      type: String,
      default: '100%',
    },
    maxWidth: {
      type: String,
      default: '100%',
    },
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('update:modelValue', value);
    },
  },
};
</script>

<style scoped></style>
