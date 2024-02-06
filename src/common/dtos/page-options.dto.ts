// import { IPaginationOptions } from 'nestjs-typeorm-paginate';
// import { EnumFieldOptional, NumberFieldOptional } from '../decorators';
// import { ApiProperty } from '@nestjs/swagger';
// import { IsOptional } from 'class-validator';
//
// export enum Order {
//   Desc = 'DESC',
//   Asc = 'ASC',
// }
//
// export class PageOptionsDto {
//   @EnumFieldOptional(() => Order, {
//     default: Order.Desc,
//   })
//   readonly order: Order = Order.Desc;
//
//   @NumberFieldOptional({
//     minimum: 1,
//     default: 1,
//     int: true,
//   })
//   readonly page: number = 1;
//
//   @NumberFieldOptional({
//     minimum: 1,
//     maximum: 100,
//     default: 20,
//     int: true,
//   })
//   readonly take: number = 20;
//
//   @ApiProperty({ type: String, default: '', required: false })
//   @IsOptional()
//   readonly keyword?: string = '';
//
//   get skip(): number {
//     return (this.page - 1) * this.take;
//   }
//
//   get paginationOptions(): IPaginationOptions {
//     return {
//       limit: this.take,
//       page: this.page,
//     };
//   }
// }
