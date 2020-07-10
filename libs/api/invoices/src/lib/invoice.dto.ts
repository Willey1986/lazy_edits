import { Company, LineItem } from '@invoices/api-interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class InvoiceDto {
  @ApiProperty({
    required: false,
  })
  id: string;
  @ApiProperty()
  company: Company;
  @ApiProperty()
  lineItems: LineItem[];
}
