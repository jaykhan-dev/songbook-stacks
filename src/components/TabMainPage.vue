<template>
  <div class="flex space-x-4">
    <button @click="currentTabComponent = 'TabOne'">
      <p class="activeStyle">TAB1</p>
    </button>
    <button @click="currentTabComponent = 'TabTwo'">tab 2</button>
    <button @click="currentTabComponent = 'TabThree'">tab 3</button>
  </div>

  <keep-alive>
    <component :is="currentTabComponent" :style="activeStyle"></component>
  </keep-alive>
</template>

<script>
// import TabOne from "./TabOne.vue";
// import TabTwo from "./TabTwo.vue";
// import TabThree from "./TabThree.vue";
import { ref, reactive } from "vue";

export default {
  name: "App",
  components: {
    // TabOne,
    // TabTwo,
    // TabThree,
  },
  setup() {
    const isActive = ref(true);
    const currentTabComponent = ref("TabOne");
    const activeStyle = reactive({
      color: "blue",
    });
    return {
      isActive,
      currentTabComponent,
      activeStyle,
    };
  },
};
</script>

<style>
.activeStyle {
  color: black;
}
.activeStyle:active {
  color: blue;
}
</style>
