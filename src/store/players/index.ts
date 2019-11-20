import { Module } from "vuex";
import { PlayerState } from "./PlayerState";
import { RootState } from "../RootState";
import Person from "@/classes/types/Person";

export const state: PlayerState = {
  players: [new Person("Sam Cole", 23), new Person("Kenzie Hale", 23)],
  playersExist: true
};

export const players: Module<PlayerState, RootState> = {
  namespaced: true,
  state
};
