import { generateCommitMessage } from '../core/commit';

test('generates commit message', async () => {
  const msg = await generateCommitMessage('feat');
  expect(msg).toContain('feat:');
});