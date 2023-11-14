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
  <form @submit.prevent="submitForm" class="space-y-4">
    <input
      type="text"
      v-model="formData.title"
      placeholder="Title"
      class="border p-2 rounded"
    />
    <input
      type="text"
      v-model="formData.gameMaster"
      placeholder="Game Master"
      class="border p-2 rounded"
    />

    <div
      v-for="(player, index) in formData.players"
      :key="index"
      class="flex items-center space-x-2"
    >
      <input
        type="text"
        v-model="formData.players[index]"
        placeholder="Player Name"
        class="border p-2 rounded flex-grow"
      />
      <BaseButton
        type="button"
        @click="removePlayer(index)"
        class="bg-red-500 text-white p-2 rounded"
      >
        Remove
      </BaseButton>
    </div>
    <BaseButton
      type="button"
      @click="addPlayer"
      class="bg-blue-500 text-white p-2 rounded"
    >
      Add Player
    </BaseButton>
    <textarea
      v-model="formData.description"
      placeholder="Description"
      class="border p-2 rounded h-32"
    ></textarea>

    <input
      type="file"
      @change="handleFileUpload"
      class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
    />
    <BaseButton type="submit" class="bg-green-500 text-white p-2 rounded">
      Submit
    </BaseButton>
  </form>
</template>

<style scoped></style>
