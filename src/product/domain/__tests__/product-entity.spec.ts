import { Product } from '../entity/product';
import { ProductCategories } from '../value-object/category.ov';

describe('Product entity unit test', (): void => {
  it('should create a product', (): void => {
    const expectedName: string = 'Notebook G15 32Gb memory 1Tb SSD';
    const expectedPrice: number = 1000;
    const expectedCategory: ProductCategories =
      ProductCategories.createLaptops();
    const expectedStatusActive: boolean = true;
    const expectedCost: number = 400;

    const product: Product = Product.new({
      name: expectedName,
      cost: expectedCost,
      price: expectedPrice,
      category: expectedCategory
    });

    expect(product).toBeInstanceOf(Product);
    expect(product.name).toStrictEqual(expectedName);
    expect(product.cost).toStrictEqual(expectedCost);
    expect(product.price).toStrictEqual(expectedPrice);
    expect(product.category).toStrictEqual(expectedCategory);
    expect(product.isActive).toStrictEqual(expectedStatusActive);
  });
  it('should inative a product', (): void => {
    const expectedName: string = 'Notebook G15 32Gb memory 1Tb SSD';
    const expectedPrice: number = 1000;
    const expectedCategory: ProductCategories =
      ProductCategories.createLaptops();
    const expectedStatusActive: boolean = false;
    const expectedCost: number = 400;

    const product: Product = Product.new({
      name: expectedName,
      cost: expectedCost,
      price: expectedPrice,
      category: expectedCategory
    });

    expect(product).toBeInstanceOf(Product);
    expect(product.name).toStrictEqual(expectedName);
    expect(product.cost).toStrictEqual(expectedCost);
    expect(product.price).toStrictEqual(expectedPrice);
    expect(product.category).toStrictEqual(expectedCategory);
    expect(product.isActive).toStrictEqual(true);
    product.inative();
    expect(product.isActive).toStrictEqual(expectedStatusActive);
  });
  it('should throw an error when create a product with invalid name', (): void => {
    const expectedName: string = '';
    const expectedPrice: number = 1000;
    const expectedCategory: ProductCategories =
      ProductCategories.createLaptops();
    const expectedCost: number = 400;

    expect((): void => {
      Product.new({
        name: expectedName,
        cost: expectedCost,
        price: expectedPrice,
        category: expectedCategory
      });
    }).toThrowError();
  });
  it('should throw an error when create a product with invalid price', (): void => {
    const expectedName: string = 'Notebook G15 32Gb memory 1Tb SSD';
    const expectedPrice: number = 0;
    const expectedCategory: ProductCategories =
      ProductCategories.createLaptops();
    const expectedCost: number = 400;

    expect((): void => {
      Product.new({
        name: expectedName,
        cost: expectedCost,
        price: expectedPrice,
        category: expectedCategory
      });
    }).toThrowError();
  });
  it('should throw an error when create a product with invalid cost', (): void => {
    const expectedName: string = 'Notebook G15 32Gb memory 1Tb SSD';
    const expectedPrice: number = 1000;
    const expectedCategory: ProductCategories =
      ProductCategories.createLaptops();
    const expectedCost: number = 0;

    expect((): void => {
      Product.new({
        name: expectedName,
        cost: expectedCost,
        price: expectedPrice,
        category: expectedCategory
      });
    }).toThrowError();
  });
  it('should throw an error when create a product with invalid category', (): void => {
    const expectedName: string = 'Notebook G15 32Gb memory 1Tb SSD';
    const expectedPrice: number = 1000;
    const expectedCategory: ProductCategories = null;
    const expectedCost: number = 400;

    expect((): void => {
      Product.new({
        name: expectedName,
        cost: expectedCost,
        price: expectedPrice,
        category: expectedCategory
      });
    }).toThrowError();
  });
  it('should throw an error when create a product with invalid category', (): void => {
    const expectedName: string = 'Notebook G15 32Gb memory 1Tb SSD';
    const expectedPrice: number = 1000;
    const expectedCost: number = 400;

    expect((): void => {
      Product.new({
        name: expectedName,
        cost: expectedCost,
        price: expectedPrice,
        category: null
      });
    }).toThrowError();
  });
});
