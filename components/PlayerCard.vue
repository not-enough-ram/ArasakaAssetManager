<template>
  <div class="border-2 border-primary mb-8">
    <div class="">
      <div class="flex flex-row">
        <div class="h-1/3 w-1/3 border-primary border-r-2">
          <img
            :src="playerAvatar"
            alt="Player's Avatar"
            class="w-full h-full"
          />
        </div>
        <div class="flex flex-col">
          <h3 class="text-5xl m-5">{{ player.name }}</h3>
          <ul>
            <li class="text-2xl ml-5">Team: {{ player.team }}</li>
            <li class="text-2xl ml-5">Position: {{ player.position }}</li>
            <li class="text-2xl ml-5">Points: {{ player.points }}</li>
          </ul>
        </div>
      </div>
      <Typewriter
        :text="player.description"
        :typingDelay="5"
        :showBlinker="false"
        class="inline-block border-t-2 border-primary w-full"
      >
        <template #default="{ animatedText }">
          <p
            class="text-primary whitespace-normal p-5 h-52 overflow-y-scroll custom-scroll-bar m-1.5 ml-0"
          >
            {{ animatedText }}
          </p>
        </template>
      </Typewriter>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Ref } from 'vue';

interface PlayerData {
  name: string;
  team: string;
  position: string;
  points: number;
  avatar?: string;
  description: string;
}

const props = defineProps<{
  name: string;
  team: string;
  position: string;
  points: number;
  avatar?: string;
  description: string;
}>();

const player: Ref<PlayerData> = ref({
  name: props.name,
  team: props.team,
  position: props.position,
  points: props.points,
  avatar: props.avatar,
  description: props.description,
});

const imagePaths = ref<string[]>([]);

onMounted(async () => {
  const placeholderImages: Record<string, () => Promise<any>> =
    import.meta.glob('@/assets/images/placeholders/*.png');

  for (const path in placeholderImages) {
    const importedImage = await placeholderImages[path]();
    const typedImage: string = importedImage.default;
    imagePaths.value.push(typedImage);
  }
});

const playerAvatar = computed(() => {
  return player.value.avatar || getRandomPlaceholder();
});

function getRandomPlaceholder(): string {
  const randomIndex = Math.floor(Math.random() * imagePaths.value.length);
  return imagePaths.value[randomIndex];
}
</script>

<style scoped>
.avatar {
  width: 100px;
  height: 100px;
}
</style>
