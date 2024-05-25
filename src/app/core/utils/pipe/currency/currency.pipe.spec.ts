import { CurrencyWithUnitPipe } from "./currency.pipe";


describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyWithUnitPipe();
    expect(pipe).toBeTruthy();
  });
});
