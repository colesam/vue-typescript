<template>
  <div class="App">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, namespace } from "vuex-class";
import { Person } from "@/classes/types/Person";
import HelloWorld from "./components/HelloWorld.vue";

const playerModule = namespace("player");

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  @State("version") version!: string;
  @playerModule.State("players") players!: Person[];
}
</script>

<style scoped>
/* Using tailwind inside style tags */
.App {
  @apply flex;
  @apply flex-col;
  @apply items-center;
  @apply pt-10;
}
</style>
