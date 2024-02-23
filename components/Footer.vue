<template>
  <div
    v-if="menuIsOpen"
    class="menu absolute bg-bg z-10 bottom-12"
    ref="menuRef"
    @click.stop
  >
    <nav class="border-primary border-2 p-2 border-b-0 w-52">
      <ul class="flex flex-col w-full">
        <li
          class="hover:inverted w-full flex cursor-pointer"
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
    class="fixed bottom-0 p-2 border-primary border-2 border-b-0 flex justify-center w-52 bg-bg"
    ref="buttonRef"
  >
    <BaseButton class="border-0" @click="toggleMenu($event)">Menu</BaseButton>
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
li:not(:last-child) {
  border-bottom: 2px solid;
}
</style>
