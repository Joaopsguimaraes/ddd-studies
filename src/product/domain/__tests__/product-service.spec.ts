import { ProductCategories } from '../value-object/category.ov';
import { ProductService } from '../service/product-service';
import { Product } from '../entity/product';

describe('Product service unit test', (): void => {
  it('should change the prices of all products', (): void => {
    const expectedNotebookPrice: number = 2200;
    const expectedCellphonePrice: number = 1100;

    const notebook: Product = Product.new({
      name: 'Notebook G15 32Gb memory 1Tb SSD',
      cost: 1500,
      price: 2000,
      category: ProductCategories.createLaptops()
    });
    const cellphone: Product = Product.new({
      name: 'Cellphone Samsung Galaxy S20',
      cost: 400,
      price: 1000,
      category: ProductCategories.createCellphones()
    });

    const products: Product[] = [notebook, cellphone];

    const productsWithIncreasedPrice: Product[] = ProductService.increasePrice(
      products,
      10
    );
    expect(productsWithIncreasedPrice[0].price).toBe(expectedNotebookPrice);
    expect(productsWithIncreasedPrice[1].price).toBe(expectedCellphonePrice);
  });
});
