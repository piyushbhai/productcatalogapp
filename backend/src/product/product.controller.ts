import { Controller, Get, Post, Body, Delete, Param,Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Post()
  async createProduct(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productService.create(productData);
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string): Promise<void> {
    return this.productService.delete(id);
  }

  @Get('filter')
  filter(
    @Query('name') name?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('sort') sort?: string
  ) {
    return this.productService.filter(name, minPrice, maxPrice,sort);
  }
}
