import { Module, GetterTree } from "vuex";
import { PlayerState } from "@/store/types/PlayerState";
import { RootState } from "@/store/types/RootState";
import { Person } from "@/classes/types/Person";

export const state: PlayerState = {
  players: {
    1: new Person(1, "Sam Cole", 23),
    2: new Person(2, "Kenzie Hale", 23)
  },
  playersExist: true
};

export const getters: GetterTree<PlayerState, RootState> = {
  playerList: ({ players }: PlayerState): Person[] => Object.values(players)
};

export const player: Module<PlayerState, RootState> = {
  namespaced: true,
  state,
  getters
};
