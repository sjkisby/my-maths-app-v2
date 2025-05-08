import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LeaderboardScreen from './LeaderboardScreen';

describe('LeaderboardScreen', () => {
  it('renders the leaderboard title', () => {
    render(<LeaderboardScreen scores={[]} />);
    expect(screen.getByText(/leaderboard/i)).toBeInTheDocument();
  });

  it('displays scores sorted from highest to lowest', () => {
    const scores = [
      { name: 'Alice', score: 120 },
      { name: 'Bob', score: 180 },
      { name: 'Charlie', score: 150 }
    ];

    render(<LeaderboardScreen scores={scores} />);

    const items = screen.getAllByTestId('leaderboard-item');
    const texts = items.map((el) => el.textContent);

    expect(texts).toEqual([
      expect.stringContaining('Bob'),
      expect.stringContaining('Charlie'),
      expect.stringContaining('Alice')
    ]);
  });

  it('shows a message if there are no scores', () => {
    render(<LeaderboardScreen scores={[]} />);
    expect(screen.getByText(/no scores yet/i)).toBeInTheDocument();
  });
});
