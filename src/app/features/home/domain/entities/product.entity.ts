import { BaseEntity } from '@domain-core/entity/base-entity';

/**
 * Represents a Product Entity.
 */
export class ProductEntity extends BaseEntity {
  name: string;
  number: string;
  balance: string;
  detail: string;

  /**
   * Constructs a [ProductEntity] instance.
   */
  constructor({
    name,
    number,
    balance,
    detail,
  }: {
    name: string;
    number: string;
    balance: string;
    detail: string;
  }) {
    super();
    this.name = name;
    this.number = number;
    this.balance = balance;
    this.detail = detail;
  }
}
