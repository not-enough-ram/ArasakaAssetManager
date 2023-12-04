<template>
  <div v-if="menuIsOpen" class="absolute bottom-12" ref="menuRef" @click.stop>
    <nav class="border-primary border-2 p-2 border-b-0 w-52">
      <ul class="flex flex-col w-full">
        <li class="flex flex-col justify-center">
          <div>
            <div class="logo-container">
              <ArasakaLogo />
            </div>
            <h2 class="text-primary font-arasaka text-xl">Asset Manager</h2>
          </div>
        </li>
        <li
          class="hover:inverted"
          v-if="authenticated"
          @click="navigateTo('/createcontent')"
        >
          Add Stuff
        </li>
        <li
          class="hover:inverted"
          v-if="authenticated"
          @click="navigateTo('/profile')"
        >
          Profile
        </li>
        <li class="hover:inverted" @click="navigateTo('/contact')">Contact</li>
        <li class="hover:inverted" @click="navigateTo('/about')">About</li>
        <li
          class="hover:inverted"
          v-if="!authenticated"
          @click="navigateTo('/login')"
        >
          Login
        </li>
        <li class="hover:inverted" @click="navigateTo('/')">Home</li>
      </ul>
    </nav>
  </div>
  <div
    class="sticky bottom-0 p-2 border-primary border-2 border-b-0"
    ref="buttonRef"
  >
    <BaseButton @click="toggleMenu($event)">Menu</BaseButton>
  </div>
</template>

<script setup lang="ts">
const menuIsOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const toggleMenu = (event?: MouseEvent) => {
  if (event) {
    event.stopPropagation();
  }
  menuIsOpen.value = !menuIsOpen.value;
};
const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    menuIsOpen.value = false;
  }
};
onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside);
});
const authenticated = true;
</script>

<style scoped>
.logo-container {
  overflow: hidden;
  height: 81px;
}
li {
  width: 100%;
  display: flex;
  flex-direction: row;
  cursor: pointer;
}
li:not(:last-child) {
  border-bottom: 2px solid;
}
.name {
  font-family: cedge1, serif;
  color: var(--color-primary);
}
</style>
