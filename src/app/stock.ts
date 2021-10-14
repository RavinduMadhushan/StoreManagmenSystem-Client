import { Item } from './item';
export class Stock {
  public id!: number;
  public quntity!: number;
  public name!: string;
  public predictedQuantity!:number;
  public item!: Item;

  constructor(id: number, qunity: number, name: string,predictedQuantity:number) {
    this.id = id;
    this.quntity = qunity;
    this.name = name;
    this.predictedQuantity=predictedQuantity
  }
}
