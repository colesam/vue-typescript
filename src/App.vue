<template>
  <div class="App">
    <img alt="Vue logo" src="./assets/logo.png" />
    <PlayerList :players="players" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, namespace } from "vuex-class";
import { Person } from "@/classes/types/Person";
import PlayerList from "./components/PlayerList.vue";

const playerModule = namespace("player");

@Component({
  components: {
    PlayerList
  }
})
export default class App extends Vue {
  @State("version") version!: string;
  @playerModule.Getter("playerList") players!: Person[];
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
