<script setup lang="ts">
import useConsoleMessages from '@/composables/useConsoleMessages';
const { addMessage } = useConsoleMessages();

const props = defineProps({
  title: String,
  description: String,
  image: File,
});

const formData = ref({
  title: { value: props.title || '', valid: true },
  description: { value: props.description || '', valid: true },
  image: { value: props.image || null, valid: true },
});

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  formData.value.image.value = file || null;
  formData.value.image.valid = !!file;
}

function validateField(field: { value: string | File; valid: boolean }) {
  field.valid = !!field.value;
}

function submitForm() {
  let formIsValid = true;

  validateField(formData.value.title);
  validateField(formData.value.description);

  if (!formData.value.title.valid) {
    addMessage({ type: 'error', content: 'Title is missing a value.' });
    formIsValid = false;
  }

  if (!formData.value.description.valid) {
    addMessage({
      type: 'error',
      content: 'Description is missing a value.',
    });
    formIsValid = false;
  }

  if (!formData.value.image.valid) {
    addMessage({ type: 'error', content: 'Image is missing.' });
    formIsValid = false;
  }

  if (formIsValid) {
    const cleanedFormData = {
      title: formData.value.title.value,
      description: formData.value.description.value,
      image: formData.value.image.value,
    };

    console.log('Form data:', cleanedFormData);

    addMessage({
      type: 'success',
      content: '<SUCCESS> Data submitted successfully!',
    });
  }
}

function handleInput(
  newValue: string,
  field: { value: string; valid: boolean }
) {
  field.value = newValue;
  validateField(field);
}
</script>

<template>
  <div class="border-2 border-primary p-5 card-assets">
    <form
      @submit.prevent="submitForm"
      class="space-y-4 flex flex-col justify-between h-full"
    >
      <BaseInput
        type="text"
        v-model="formData.title.value"
        :is-valid="formData.title.valid"
        placeholder="Title..."
        @update:modelValue="(newValue) => handleInput(newValue, formData.title)"
      />
      <BaseTextarea
        v-model="formData.description.value"
        placeholder="Description..."
        :maxHeight="'350px'"
        :maxWidth="'600px'"
        :is-valid="formData.description.valid"
        @update:modelValue="
          (newValue: string) => handleInput(newValue, formData.description)
        "
      />
      <div class="w-full mb-12 cursor-pointer">
        <input
          type="file"
          @change="handleFileUpload"
          class="text-sm file:mr-4 file:py-2 file:px-4 file:border-2 file:border-primary file:text-sm file:font-semibold file:bg-bg file:text-primary"
        />
      </div>
      <div class="w-full flex justify-center items-center">
        <span class="icon-floppy-disk mr-4 text-2xl"></span>
        <BaseButton type="submit">Submit</BaseButton>
      </div>
    </form>
  </div>
</template>

<style scoped>
#file-upload-button {
  cursor: pointer;
}
.card-assets {
  width: 360px;
  height: 460px;
}
</style>
