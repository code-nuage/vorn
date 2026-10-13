export abstract class Item {
  protected readonly type: string;
  protected readonly name: string;
  
  constructor(type: string, name: string) {
    this.type = type;
    this.name = name;
  }
}
