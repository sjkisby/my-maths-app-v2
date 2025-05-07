// utils/calculatePoints.js
export function calculatePoints(timeTakenInSeconds) {
    const base = 100;
    const bonus = Math.max(0, 100 - Math.floor(timeTakenInSeconds));
    return {
      base,
      bonus,
      total: base + bonus
    };
  }
  