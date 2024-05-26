import { ProcessFailure } from '@core/exception/exception';
import { Either } from './either';

describe('Either', () => {
  it('should return isleft equal to true for a left value', () => {
    const result = Either.left({ kind: 'error' });

    expect(result.isLeft()).toBeTruthy();
    expect(result.isRight()).toBeFalsy();
  });
  it('should return isRight equal to true for a right value', () => {
    const result = Either.right(5);

    expect(result.isRight()).toBeTruthy();
    expect(result.isLeft()).toBeFalsy();
  });
});
describe('fold', () => {
  it('should return expected left for a left value', () => {
    const result = Either.left({ kind: 'error1' });

    result.fold(
      (error) => expect(error.kind).toEqual('error1'),
      () => fail('should be error'),
    );
  });
  it('should return expected right for a right value', () => {
    const result = Either.right(5);

    result.fold(
      (error) => fail(error),
      (value) => expect(value).toEqual(5),
    );
  });
});
describe('getOrElse', () => {
  it('should getOrElse return default value for left', () => {
    const result = Either.left({ kind: 'error1' });

    expect(result.getOrElse(0)).toEqual(0);
  });
  it('should getOrElse return a right value for right', () => {
    const result = Either.right(5);

    expect(result.getOrElse(0)).toEqual(5);
  });
});
describe('map', () => {
  it('should return fail mapped value for a left initial value', () => {
    const result: Either<ProcessFailure, number> = createApiFailure(404);
    const mappedResult = result.map((value) => value * 2);

    mappedResult.fold(
      (error) => expect(error.kind).toEqual('ApiFailure'),
      () => fail('should be error'),
    );
  });
  it('should return success mapped value for a initial valid value', () => {
    const result = Either.right(5);
    const mappedResult = result.map((value) => value * 2);

    mappedResult.fold(
      (error) => fail(error),
      (value) => expect(value).toEqual(10),
    );
  });
});
describe('flatmap', () => {
  it('should return first error after flatmap for a left initial value', () => {
    const result: Either<ProcessFailure, number> = createApiFailure(404);
    const mappedResult = result.flatMap((value) => Either.right(value * 2));

    mappedResult.fold(
      (error) => expect(error.kind).toEqual('ApiFailure'),
      () => fail('should be error'),
    );
  });
  it('should return success mapped value after flatmap for a initial valid value', () => {
    const result = Either.right(5);
    const mappedResult = result.flatMap((value) => Either.right(value * 2));

    mappedResult.fold(
      (error) => fail(error),
      (value) => expect(value).toEqual(10),
    );
  });
});
describe('aaa', () => {
  const result: Either<SyncFailure, SyncResult> = syncProducts(products);

  const handleFailure = (failure: SyncFailure) => {
    switch (failure.kind) {
      case 'AnonymousUserFailure':
        return 'please make a login to can sync products';
      case 'ApiFailure':
        return failure.message;
      case 'UnexpectedFailure':
        return 'An unexpected error has ocurred';
    }
  };

  result.fold(
    (failure) => console.log(handleFailure(failure)),
    (result) => console.log({ result }),
  );
});

function createApiFailure(arg0: number): Either<ProcessFailure, number> {
  throw new Error('Function not implemented.');
}

function syncProducts(products: any): Either<SyncFailure, syncResult> {
  throw new Error('Function not implemented.');
}
