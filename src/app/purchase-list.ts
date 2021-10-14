export class PurchaseList {
  public id!: number;
  public supplier!: string;
  public date!: Date;
  public totalValue!: number;

  constructor(id: number, supplier: string, date: Date, totalValue: number) {
    this.id = id;
    this.supplier = supplier;
    this.date = date;
    this.totalValue = totalValue;
  }
}
