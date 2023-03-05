import { Entity } from '../../../@shared/entity';
import { Replace } from './../../../@shared/replace';
import { ProductCategories } from '../value-object/category.ov';
import { UniqueEntityID } from '../../../@shared/unique-entity-id';

export type ProductProperties = {
  name: string;
  cost: number;
  price: number;
  stock: number;
  category: ProductCategories;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  isActive: boolean;
};

export class Product extends Entity<ProductProperties> {
  constructor(public readonly props: ProductProperties, anId?: UniqueEntityID) {
    super(props, anId);
    this.validate(props);
  }

  public static new(
    props: Replace<
      ProductProperties,
      { createdAt?: Date; updatedAt?: Date; stock?: number; isActive?: boolean }
    >
  ): Product {
    const todaysDate = new Date();

    return new Product({
      ...props,
      createdAt: todaysDate,
      updatedAt: todaysDate,
      stock: 0,
      isActive: true
    });
  }

  public updateProduct(
    product: Replace<
      ProductProperties,
      { createdAt?: Date; updatedAt?: Date; stock?: number; isActive?: boolean }
    >
  ) {
    const todaysDate = new Date();

    this.props.updatedAt = todaysDate;
    this.props.name = product.name;
    this.props.cost = product.cost;
    this.props.price = product.price;
    this.props.category = product.category;
    this.props.stock = product.stock;

    return this;
  }

  public inative() {
    const todayDate = new Date();

    this.props.isActive = false;
    this.props.updatedAt = todayDate;
  }

  public changePrice(price: number): void {
    const todayDate = new Date();

    this.props.price = price;
    this.props.updatedAt = todayDate;
  }

  public get name(): string {
    return this.props.name;
  }

  public get cost(): number {
    return this.props.cost;
  }

  public get price(): number {
    return this.props.price;
  }

  public get category(): ProductCategories {
    return this.props.category;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public get isActive(): boolean {
    return this.props.isActive;
  }

  private validate(props: ProductProperties): boolean {
    if (props.category.value.length === 0 || props.category.value === null) {
      throw new Error('Category is required');
    }
    if (props.name.length === 0 || props.name === null) {
      throw new Error('Name is required');
    }
    if (props.price <= 0 || props.price === null) {
      throw new Error('Price must be greater than zero');
    }
    if (props.cost <= 0 || props.cost === null) {
      throw new Error('Cost must be greater than zero');
    }
    return true;
  }
}
