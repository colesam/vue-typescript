<template>
  <div class="App">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { PlayerState } from "@/store/players/PlayerState";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  @State("players") playerState: any;
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
