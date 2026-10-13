import { Item } from "../item/Item";

export class Inventory {
  protected items: Array<Item>;

  constructor() {
    this.items = new Array();
  }
}
