import { sum, mul, sub, div } from './utils';

describe('Ost Front-end Code Test', () => {
  describe('helpers', () => {
    describe('utils', () => {
      it('Adding 1 + 1 equals 2', () => {
        expect(sum(1, 1)).toBe(2)
      });

      it('Multiplying 1 * 1 equals 1', () => {
        expect(mul(1, 1)).toBe(1)
      });

      it('Subtracting 1 - 1 equals 0', () => {
        expect(sub(1, 1)).toBe(0)
      });

      it('Dividing 1 / 1 equals 1', () => {
        expect(div(1, 1)).toBe(1)
      });
    });
  });    
});
