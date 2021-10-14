import { PurchaseItemDto } from './purchase-item-dto';

export class CreatePurchaseDto {
  supplierId!: number;
  purchaseItems!: PurchaseItemDto[];
}
