export class SaleList {
  public id!: number;
  public customer!: string;
  public date!: Date;
  public totalValue!: number;

  constructor(id: number, supplier: string, date: Date, totalValue: number) {
    this.id = id;
    this.customer = supplier;
    this.date = date;
    this.totalValue = totalValue;
  }
}
