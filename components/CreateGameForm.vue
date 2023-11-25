<script setup lang="ts">
import useConsoleMessages from '@/composables/useConsoleMessages';

const { addMessage } = useConsoleMessages();

const props = defineProps({
  title: String,
  gameMaster: String,
  players: Array as () => Array<{ value: string; valid: boolean }>,
  description: String,
});

const formData = ref({
  title: { value: props.title || '', valid: true },
  gameMaster: { value: props.gameMaster || '', valid: true },
  players: {
    value: props.players || [{ value: '', valid: true }],
    valid: true,
  },
  description: { value: props.description || '', valid: true },
  image: { value: null as File | null, valid: true },
});

function addPlayer() {
  if (formData.value.players.value.length < 10) {
    formData.value.players.value.push({ value: '', valid: true });
  }
}

function removePlayer(index: number) {
  if (formData.value.players.value.length > 1) {
    formData.value.players.value.splice(index, 1);
  }
}

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  formData.value.image.value = file || null;
}

function validateForm() {
  let formIsValid = true;
  let invalidPlayerFound = false;

  if (!formData.value.title.value) {
    addFieldErrorMessage('Title');
    formData.value.title.valid = false;
    formIsValid = false;
  }

  if (!formData.value.gameMaster.value) {
    addFieldErrorMessage('Game Master');
    formData.value.gameMaster.valid = false;
    formIsValid = false;
  }

  for (const player of formData.value.players.value) {
    if (!player.value) {
      invalidPlayerFound = true;
      player.valid = false;
      formIsValid = false;
    }
  }

  if (invalidPlayerFound) {
    addFieldErrorMessage('Name');
  }

  if (!formData.value.description.value) {
    addFieldErrorMessage('Description');
    formData.value.description.valid = false;
    formIsValid = false;
  }

  return formIsValid;
}

function submitForm() {
  const formIsValid = validateForm();

  if (formIsValid) {
    const cleanedFormData = {
      title: formData.value.title.value,
      gameMaster: formData.value.gameMaster.value,
      players: formData.value.players.value.map((player) => player.value),
      description: formData.value.description.value,
      image: formData.value.image.value,
    };

    console.log('Submitting form:', cleanedFormData);

    addMessage({ type: 'success', content: 'Data submitted successfully!' });
  }
}
function validateField(field: { value: string; valid: boolean }) {
  field.valid = field.value.trim() !== '';
}
function handleInput(
  newValue: string,
  field: { value: string; valid: boolean }
) {
  // Update the modelValue first
  field.value = newValue;
  // Validate the field
  validateField(field);
}
function addFieldErrorMessage(fieldName: string) {
  addMessage({
    type: 'error',
    content: `<ERROR> ${fieldName} is missing a value`,
  });
}

const playerCount = computed(() =>
  formData.value.players.value.length.toString()
);
</script>

<template>
  <div class="border-2 border-primary p-5 max-w-360">
    <form @submit.prevent="submitForm" class="space-y-4">
      <BaseInput
        type="text"
        v-model="formData.title.value"
        :is-valid="formData.title.valid"
        placeholder="Title..."
        @update:modelValue="(newValue) => handleInput(newValue, formData.title)"
      />
      <BaseInput
        type="text"
        v-model="formData.gameMaster.value"
        :is-valid="formData.gameMaster.valid"
        placeholder="Game Master..."
        @update:modelValue="
          (newValue) => handleInput(newValue, formData.gameMaster)
        "
      />
      <div class="flex w-full justify-between">
        <span class="text-primary"
          >Players:
          <Typewriter
            :text="playerCount"
            :typingDelay="150"
            class="inline-block"
          >
            <template #default="{ animatedText }">
              <span class="text-primary">{{ animatedText }}</span>
            </template> </Typewriter
          >/10
        </span>
        <BaseButton type="button" @click="addPlayer">Add Player</BaseButton>
      </div>
      <div
        v-for="(player, index) in formData.players.value"
        :key="`player-${index}`"
        class="flex items-center space-x-2"
      >
        <BaseInput
          type="text"
          v-model="player.value"
          :is-valid="player.valid"
          :placeholder="`Player ${index + 1} Name...`"
          @update:modelValue="(newValue) => handleInput(newValue, player)"
        />
        <BaseButton type="button" @click="removePlayer(index)"
          >Remove</BaseButton
        >
      </div>
      <BaseTextarea
        v-model="formData.description.value"
        :is-valid="formData.description.valid"
        placeholder="Description..."
        :maxHeight="'350px'"
        :maxWidth="'600px'"
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

<style scoped></style>
