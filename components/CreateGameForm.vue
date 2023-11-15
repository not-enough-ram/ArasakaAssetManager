<script setup lang="ts">
const props = defineProps({
  title: String,
  gameMaster: String,
  players: Array as () => Array<string>,
  description: String,
});

const formData = ref({
  title: props.title || "",
  gameMaster: props.gameMaster || "",
  players: props.players || [],
  description: props.description || "",
  image: null as File | null,
});

function addPlayer() {
  formData.value.players.push("");
}

function removePlayer(index: number) {
  formData.value.players.splice(index, 1);
}

function handleFileUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  formData.value.image = file || null;
}

function submitForm() {
  // Process form data here
  console.log(formData.value);
}
</script>

<template>
  <div class="w-full h-full flex justify-center inset-0">
  <div class="w-1/3 border-2 border-primary p-5">
  <form @submit.prevent="submitForm" class="space-y-4">
    <BaseInput
      type="text"
      v-model="formData.title"
      placeholder="Title..."
    />
    <BaseInput
      type="text"
      v-model="formData.gameMaster"
      placeholder="Game Master..."
    />

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
      <BaseButton
        type="button"
        @click="removePlayer(index)"
      >
        Remove
      </BaseButton>
    </div>
    <BaseButton
      type="button"
      @click="addPlayer"
    >
      Add Player
    </BaseButton>
    <BaseTextarea
      v-model="formData.description"
      placeholder="Description..."
      rows="4"
      :minHeight="'150px'"
      :minWidth="'400px'"
    />

    <BaseInput
      type="file"
      @change="handleFileUpload"
      class="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
    />
    <BaseButton type="submit">
      Submit
    </BaseButton>
  </form>
</div>
</div>
</template>

<style scoped></style>
