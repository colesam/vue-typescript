import { Person } from "@/classes/types/Person";

export interface PlayerState {
  players: { [key: number]: Person };
  playersExist: boolean;
}
