import { CharacterClass } from "./CharacterClass";
import type { Inventory } from "../inventory/Inventory";

export class Character {
  protected name: string;
  protected hp: number;
  protected ap: number;
  protected characterClass: CharacterClass;
  protected inventory: Inventory;

  constructor(name: string, hp: number, ap: number, characterClass: CharacterClass, inventory: Inventory) {
    this.name = name;
    this.hp = hp;
    this.ap = ap;
    this.characterClass = characterClass;
    this.inventory = inventory;
  }
}
