import { Product } from '../../domain/entity/product';
import { ProductRepository } from './../../domain/repository/product.repository';

export class InMemoryProductRepository implements ProductRepository {
  product: Product[] = [];

  async save(aProduct: Product): Promise<void> {
    if (!this.product) this.product = [];

    this.product.push(aProduct);
  }
  async update(aProduct: Product): Promise<void> {
    if (!this.product) throw new Error('Product not found');

    const index = this.product.findIndex(
      (product) => product.id === aProduct.id
    );
    if (index === -1) throw new Error('Product not found');

    this.product[index] = aProduct;
  }
  async findById(anId: string): Promise<Product> {
    if (!this.product) throw new Error('Product not found');

    const product = this.product.find((product) => product.id === anId);
    if (!product) throw new Error('Product not found');

    return product;
  }
  async delete(anId: string): Promise<void> {
    if (!this.product) throw new Error('Product not found');

    const index = this.product.findIndex((product) => product.id === anId);
    if (index === -1) throw new Error('Product not found');

    this.product.splice(index, 1);
  }
  async findAll(): Promise<Product[]> {
    return this.product;
  }
}
