<template>
  <div class="tabs">
    <div
      class="tabs__header flex my-2 items-center lg:overflow-x-auto overflow-x-scroll p-2 border-b dark:border-gray-500"
    >
      <div
        v-for="title in tabTitles"
        :key="title"
        @click="
          {
            selectedTitle = title;
          }
        "
        :class="{
          selected: title == selectedTitle,
        }"
        class="p-2"
      >
        <p
          active
          class="hover:text-green-600 duration-300 cursor-pointer text-2xl font-bold"
        >
          {{ title }}
        </p>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  setup(props, { slots }) {
    const tabTitles = ref(slots.default().map((tab) => tab.props.title));
    const selectedTitle = ref(tabTitles.value[0]);

    provide("selectedTitle", selectedTitle);
    return {
      selectedTitle,
      tabTitles,
    };
  },
  methods: {},
};
</script>

<style></style>
