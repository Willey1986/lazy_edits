import { ApiProperty } from '@nestjs/swagger';

export class UpdateCompanyDto {
  @ApiProperty({ required: false })
  companyName: string;

  @ApiProperty({ required: false })
  street: string;

  @ApiProperty({ required: false })
  city: string;

  @ApiProperty({ required: false })
  country: string;

  @ApiProperty({ required: false })
  contact: string;

  @ApiProperty({ required: false })
  vatNo: string;
}
