import { Module } from "vuex";
import { PlayerState } from "@/store/types/PlayerState";
import { RootState } from "@/store/types/RootState";
import { Person } from "@/classes/types/Person";

export const state: PlayerState = {
  players: [new Person("Sam Cole", 23), new Person("Kenzie Hale", 23)],
  playersExist: true
};

export const player: Module<PlayerState, RootState> = {
  namespaced: true,
  state
};
