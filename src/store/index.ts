// See: https://codeburst.io/vuex-and-typescript-3427ba78cfa8 for setup

import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types/RootState";
import { player } from "./modules/player";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: {
    player
  }
};

export default new Vuex.Store<RootState>(store);
