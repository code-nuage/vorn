import { Item } from "./Item";

export class Weapon extends Item {
  protected strength: number;

  constructor(name: string, strength: number) {
    super("Weapon", name);
    this.strength = strength;
  }
}
