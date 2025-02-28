import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return this.productRepository.save(product);
  }

  async delete(id: string): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException('Product not found');
  }

  async filter(
    name?: string,
    minPrice?: number,
    maxPrice?: number,
    sort?: string
  ) {
    const query = this.productRepository.createQueryBuilder('product');
  
    if (name) {
      query.andWhere('product.name ILIKE :name', { name: `%${name}%` });
    }
  
    if (minPrice !== undefined) {
      query.andWhere('product.price >= :minPrice', { minPrice });
    }
  
    if (maxPrice !== undefined) {
      query.andWhere('product.price <= :maxPrice', { maxPrice });
    }
  
    // Ensure sort is always a valid value
    const sortOrder = sort?.toLowerCase() === 'desc' ? 'DESC' : 'ASC';
  
    console.log(`Sorting by price: ${sort}`); // Debugging output
  
    query.orderBy('product.price', sortOrder);
  
    return query.getMany();
  }
  

  // async filter(name?: string, minPrice?: number, maxPrice?: number, sort?: string) {
  //   const query = this.productRepository.createQueryBuilder('product');
  //   if (name) {
  //     query.andWhere('product.name ILIKE :name', { name: `%${name}%` });
  //   }
  //   if (minPrice !== undefined) {
  //     query.andWhere('product.price >= :minPrice', { minPrice });
  //   }
  //   if (maxPrice !== undefined) {
  //     query.andWhere('product.price <= :maxPrice', { maxPrice });
  //   }

  //   console.log(sort)
  //   if (sort && (sort.toLowerCase() === 'asc' || sort.toLowerCase() === 'desc')) {
  //     query.orderBy('product.price', sort.toUpperCase() as 'ASC' | 'DESC');
  //   }
  //   return query.getMany();
  // }

}
