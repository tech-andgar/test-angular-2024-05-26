import { BaseEntity } from '@domain-core/entity/base-entity';

/**
 * Adapter class to convert Model to Entity.
 */
export interface BaseEntityAdapter {
  /**
   * Converts the model to Entity.
   */
  toEntity(): BaseEntity;
}
