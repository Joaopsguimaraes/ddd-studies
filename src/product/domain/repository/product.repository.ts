import { Product } from '../entity/product';
import { RepositoryInterface } from '../../../@shared/repository-interface';

export interface ProductRepository extends RepositoryInterface<Product> {
  product: Product[];
}
