import { Character } from "../character/Character";
import { Item } from "./Item";

export class Potion extends Item {
  protected callback: (target: Character) => void;

  constructor(name: string, callback: (target: Character) => void) {
    super("Armor", name);
    this.callback = callback;
  }

  use(target: Character): void {
    this.callback(target);
  }
}
