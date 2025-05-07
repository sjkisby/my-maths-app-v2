import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ScoreSubmitScreen from './ScoreSubmitScreen';

describe('ScoreSubmitScreen', () => {
  it('renders score and submits name to leaderboard', async () => {
    const saveScoreMock = vi.fn();
    const onDoneMock = vi.fn();

    render(
      <ScoreSubmitScreen points={180} saveScore={saveScoreMock} onDone={onDoneMock} />
    );

    expect(screen.getByText(/🏁 New HIGH score:/i)).toBeInTheDocument();
    expect(screen.getByText('180')).toBeInTheDocument();

    await userEvent.type(screen.getByLabelText(/your name/i), 'Alice');
    await userEvent.click(screen.getByRole('button', { name: /Save to Leaderboard/i }));

    expect(saveScoreMock).toHaveBeenCalledWith('Alice', 180);
    expect(onDoneMock).toHaveBeenCalled();
  });
});
