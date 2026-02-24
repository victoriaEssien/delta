import simpleGit from 'simple-git';
import { generateLLMCommit } from './llm';

export async function generateCommitMessage(type?: string) {
  const git = simpleGit();

  // 1. Get staged diff
  const diff = await git.diff(['--staged']);

  if (!diff) return 'No changes staged.';

  // 2. Generate commit message from LLM
  const commitMessage = await generateLLMCommit(diff, type);

  return commitMessage;
}