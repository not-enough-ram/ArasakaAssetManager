<script setup lang="ts">
import useConsoleMessages from '@/composables/useConsoleMessages';
const { addMessage } = useConsoleMessages();

const props = defineProps({
  title: String,
  description: String,
  image: File,
});

const formData = ref({
  title: props.title || '',
  description: props.description || '',
  image: null as File | null,
});

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  formData.value.image = file || null;
}

function submitForm() {
  let formIsValid = true;

  if (!formData.value.title) {
    addMessage({ type: 'error', content: 'ERROR: Title is missing a value.' });
    formIsValid = false;
  }

  if (!formData.value.description) {
    addMessage({
      type: 'error',
      content: 'ERROR: Description is missing a value.',
    });
    formIsValid = false;
  }

  if (!formData.value.image) {
    addMessage({ type: 'error', content: 'ERROR: Image is missing.' });
    formIsValid = false;
  }

  if (formIsValid) {
    console.log('Form data:', formData.value);

    addMessage({ type: 'success', content: 'Data submitted successfully!' });
  }
}
</script>

<template>
  <div class="border-2 border-primary p-5 card-assets">
    <form
      @submit.prevent="submitForm"
      class="space-y-4 flex flex-col justify-between h-full"
    >
      <BaseInput type="text" v-model="formData.title" placeholder="Title..." />
      <BaseTextarea
        v-model="formData.description"
        placeholder="Description..."
        :maxHeight="'350px'"
        :maxWidth="'600px'"
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
