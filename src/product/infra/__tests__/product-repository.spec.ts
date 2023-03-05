import { ProductCategories } from '../../domain/value-object/category.ov';
import { InMemoryProductRepository } from '../repository/product-repository';
import { Product } from '../../domain/entity/product';

describe('Product repository unit test', (): void => {
  it('should save a product in product repository', async (): Promise<void> => {
    const productRepository: InMemoryProductRepository =
      new InMemoryProductRepository();

    const product: Product = Product.new({
      name: 'Notebook Gamming Nitro 5 32gb 1tb',
      cost: 5000,
      price: 7000,
      category: ProductCategories.createLaptops()
    });

    await productRepository.save(product);

    expect(productRepository.product).toEqual([product]);
  });

  it('should update a product in product repository', async (): Promise<void> => {
    const productRepository: InMemoryProductRepository =
      new InMemoryProductRepository();

    const product: Product = Product.new({
      name: 'Notebook Gamming Nitro 5 32gb 1tb',
      cost: 5000,
      price: 7000,
      category: ProductCategories.createLaptops()
    });

    await productRepository.save(product);

    const productUpdated: Product = product.updateProduct({
      name: 'Notebook Gamming Nitro 5 32gb 1tb intel i7',
      cost: 5000,
      price: 7000,
      category: ProductCategories.createLaptops()
    });

    await productRepository.update(productUpdated);

    expect(productRepository.product).toEqual([productUpdated]);
  });

  it('should delete a product in product repository', async (): Promise<void> => {
    const productRepository: InMemoryProductRepository =
      new InMemoryProductRepository();

    const productNotebook: Product = Product.new({
      name: 'Notebook Gamming Nitro 5 32gb 1tb',
      cost: 5000,
      price: 7000,
      category: ProductCategories.createLaptops()
    });

    const productCellphone: Product = Product.new({
      name: 'Samsung Galaxy S20',
      cost: 2000,
      price: 3500,
      category: ProductCategories.createCellphones()
    });

    await productRepository.save(productNotebook);
    await productRepository.save(productCellphone);

    await productRepository.delete(productNotebook.id);

    expect(productRepository.product).toHaveLength(1);
    expect(productRepository.product).toEqual([productCellphone]);
  });

  it('should get a product in product repository', async (): Promise<void> => {
    const productRepository: InMemoryProductRepository =
      new InMemoryProductRepository();

    const productNotebook: Product = Product.new({
      name: 'Notebook Gamming Nitro 5 32gb 1tb',
      cost: 5000,
      price: 7000,
      category: ProductCategories.createLaptops()
    });

    const productCellphone: Product = Product.new({
      name: 'Samsung Galaxy S20',
      cost: 2000,
      price: 3500,
      category: ProductCategories.createCellphones()
    });

    await productRepository.save(productNotebook);
    await productRepository.save(productCellphone);

    const productFounded: Product = await productRepository.findById(
      productNotebook.id
    );

    expect(productFounded).toEqual(productNotebook);
  });

  it('should get all products in product repository', async (): Promise<void> => {
    const productRepository: InMemoryProductRepository =
      new InMemoryProductRepository();

    const productNotebook: Product = Product.new({
      name: 'Notebook Gamming Nitro 5 32gb 1tb',
      cost: 5000,
      price: 7000,
      category: ProductCategories.createLaptops()
    });

    const productCellphone: Product = Product.new({
      name: 'Samsung Galaxy S20',
      cost: 2000,
      price: 3500,
      category: ProductCategories.createCellphones()
    });

    const productTablet: Product = Product.new({
      name: 'Ipad Pro 2020 M1',
      cost: 5000,
      price: 8500,
      category: ProductCategories.createTablet()
    });

    await productRepository.save(productNotebook);
    await productRepository.save(productCellphone);
    await productRepository.save(productTablet);

    const productsFounded: Product[] = await productRepository.findAll();

    expect(productsFounded).toEqual([
      productNotebook,
      productCellphone,
      productTablet
    ]);
    expect(productsFounded).toHaveLength(3);
  });
});
