export class Item {
  public id!: number;
  public unitCode!: string;
  public productDescription!: string;
  public category!: number;
  public supplier!: number;
  public minOrder!: number;
  public unitCost!: number;
  public marketPrice!: number;
  public predictedPrice!: number;
  constructor(id: number, productDescription: string,unitCode: string,minOrder: number,unitCost: number,marketPrice: number,predictedPrice: number,category:number,supplier:number) {
    this.id = id;
    this.unitCode = unitCode; 
    this.productDescription = productDescription;
    this.minOrder = minOrder;
    this.unitCost = unitCost;
    this.marketPrice = marketPrice;
    this.predictedPrice = predictedPrice;
    this.supplier = supplier;
    this.category = category;
  

  }
}
