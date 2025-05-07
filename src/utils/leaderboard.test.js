import { describe, it, expect, beforeEach } from 'vitest';
import { saveScore, getLeaderboard, isHighScore } from './leaderboard';

beforeEach(() => {
  localStorage.clear();
});

describe('Leaderboard', () => {
  it('saves a score entry with name and score', () => {
    saveScore('Emma', 180);
    const entries = getLeaderboard();
    expect(entries).toEqual([{ name: 'Emma', score: 180 }]);
  });
});

it('returns scores sorted descending', () => {
    saveScore('Bob', 120);
    saveScore('Alice', 180);
    const entries = getLeaderboard();
    expect(entries).toEqual([
      { name: 'Alice', score: 180 },
      { name: 'Bob', score: 120 }
    ]);
  });

describe('isHighScore', () => {
  it('returns true if fewer than 10 scores', () => {
    const scores = [{ name: 'A', score: 100 }];
    expect(isHighScore(50, scores)).toBe(true);
  });

  it('returns true if score is higher than the lowest', () => {
    const scores = Array.from({ length: 10 }, (_, i) => ({ name: `P${i}`, score: i * 10 }));
    expect(isHighScore(95, scores)).toBe(true); // Lowest is 0
  });

  it('returns false if score is lower than or equal to lowest', () => {
    const scores = [
      { name: 'A', score: 50 },
      { name: 'B', score: 60 },
      { name: 'C', score: 70 },
      { name: 'D', score: 80 },
      { name: 'E', score: 90 },
      { name: 'F', score: 100 },
      { name: 'G', score: 110 },
      { name: 'H', score: 120 },
      { name: 'I', score: 130 },
      { name: 'J', score: 140 }
    ];
    expect(isHighScore(50, scores)).toBe(false); // 50 is not higher than 50
  });
});
