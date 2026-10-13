import { Item } from "./Item";

export class Armor extends Item {
  protected defense: number;

  constructor(name: string, defense: number) {
    super("Armor", name);
    this.defense = defense;
  }
}
