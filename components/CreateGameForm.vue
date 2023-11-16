<script setup lang="ts">
const props = defineProps({
  title: String,
  gameMaster: String,
  players: Array as () => Array<string>,
  description: String,
});

const formData = ref({
  title: props.title || '',
  gameMaster: props.gameMaster || '',
  players: props.players || [''],
  description: props.description || '',
  image: null as File | null,
});

function addPlayer() {
  if (formData.value.players.length === 10) {
    return;
  }
  formData.value.players.push('');
}

function removePlayer(index: number) {
  if (formData.value.players.length > 1) {
    formData.value.players.splice(index, 1);
  }
}

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  formData.value.image = file || null;
}

function submitForm() {
  // Process form data here
  console.log(formData.value);
}
const playerCount = computed(() => formData.value.players.length.toString());
</script>

<template>
  <div class="w-1/3 border-2 border-primary p-5">
    <form @submit.prevent="submitForm" class="space-y-4">
      <BaseInput type="text" v-model="formData.title" placeholder="Title..." />
      <BaseInput
        type="text"
        v-model="formData.gameMaster"
        placeholder="Game Master..."
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
        v-for="(player, index) in formData.players"
        :key="index"
        class="flex items-center space-x-2"
      >
        <BaseInput
          type="text"
          v-model="formData.players[index]"
          placeholder="Player Name..."
        />
        <BaseButton type="button" @click="removePlayer(index)"
          >Remove</BaseButton
        >
      </div>
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
</style>
