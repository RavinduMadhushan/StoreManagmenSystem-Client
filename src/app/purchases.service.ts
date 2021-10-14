export class Purchase {
  public id!: number;
  public itemName!: string;
  public quantity!: number;
  public date!:number

  constructor(id: number, itemName: string,quntity: number,date:number) {
    this.id = id;
    this.itemName = itemName;
    this.quantity = quntity;
    this.date=date;
  }
}
