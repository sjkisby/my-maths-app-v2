export function saveScore(name, score) {
    const current = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    current.push({ name, score });
    localStorage.setItem('leaderboard', JSON.stringify(current));
}
  
export function getLeaderboard() {
    const current = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    return current.sort((a, b) => b.score - a.score);
}

/**
 * Returns true if the score qualifies as a high score.
 * @param {number} score - The score to check.
 * @param {Array<{ name: string, score: number }>} scores - Existing high scores.
 * @returns {boolean}
 */
export function isHighScore(score, scores) {
    if (scores.length < 5) return true;
  
    const lowestHighScore = Math.min(...scores.map(s => s.score));
    return score > lowestHighScore;
}

/**
 * Clears the leaderboard.
 */
export function clearLeaderboard() {
    localStorage.removeItem('leaderboard');
}