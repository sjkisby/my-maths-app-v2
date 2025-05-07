// __tests__/calculateScore.test.js
import { calculatePoints } from './calculatePoints';

describe('calculatePoints', () => {
  it('gives full bonus points for fast answer', () => {
    expect(calculatePoints(0)).toEqual({ base: 100, bonus: 100, total: 200 });
  });

  it('gives partial bonus points for slower answer', () => {
    expect(calculatePoints(50)).toEqual({ base: 100, bonus: 50, total: 150 });
  });

  it('gives partial bonus points for slower answer', () => {
    expect(calculatePoints(75)).toEqual({ base: 100, bonus: 25, total: 125 });
  });

  it('gives no bonus points after 100s', () => {
    expect(calculatePoints(150)).toEqual({ base: 100, bonus: 0, total: 100 });
  });
});
