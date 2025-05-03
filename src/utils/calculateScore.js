// utils/calculateScore.js
export function calculateScore(timeTakenInSeconds) {
    const base = 100;
    const bonus = Math.max(0, 140 - Math.floor(timeTakenInSeconds));
    return {
      base,
      bonus,
      total: base + bonus
    };
  }
  