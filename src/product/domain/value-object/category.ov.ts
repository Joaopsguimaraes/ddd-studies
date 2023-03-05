import ValueObject from '../../../@shared/value-object';

enum ProductCategoriesReference {
  TV = 'Televisores',
  CELLPHONES = 'Celulares',
  LAPTOPS = 'Laptops',
  TABLETS = 'Tablets',
  GAMING = 'Gaming'
}

class ProductCategories extends ValueObject<ProductCategoriesReference> {
  private constructor(value: ProductCategoriesReference) {
    super(value);
    this.validate();
  }

  public static create(value: ProductCategoriesReference): ProductCategories {
    return new ProductCategories(value);
  }

  private validate(): void {
    const isValid: boolean =
      this.value === ProductCategoriesReference.TV ||
      this.value === ProductCategoriesReference.TABLETS ||
      this.value === ProductCategoriesReference.CELLPHONES ||
      this.value === ProductCategoriesReference.LAPTOPS ||
      this.value === ProductCategoriesReference.GAMING;

    if (!isValid) {
      throw new Error('Invalid category');
    }
  }

  public static createTelevision(): ProductCategories {
    return new ProductCategories(ProductCategoriesReference.TV);
  }

  public static createTablet(): ProductCategories {
    return new ProductCategories(ProductCategoriesReference.TABLETS);
  }

  public static createCellphones(): ProductCategories {
    return new ProductCategories(ProductCategoriesReference.TABLETS);
  }
  public static createLaptops(): ProductCategories {
    return new ProductCategories(ProductCategoriesReference.LAPTOPS);
  }
  public static createGaming(): ProductCategories {
    return new ProductCategories(ProductCategoriesReference.GAMING);
  }
}

export { ProductCategoriesReference, ProductCategories };
