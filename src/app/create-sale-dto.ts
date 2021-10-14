import { SaleItemDto } from './sale-item-dto';

export class CreateSaleDto {
  customerId!: number;
  saleItems!: SaleItemDto[];
}
