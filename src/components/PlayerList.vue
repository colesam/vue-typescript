<template>
  <ul>
    <li v-for="player in players" :key="player.id">{{ player.name }}</li>
  </ul>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Person } from "@/classes/types/Person";

@Component
export default class PlayerList extends Vue {
  @Prop() private players!: Person[];
}
</script>
