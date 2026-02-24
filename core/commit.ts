import simpleGit from 'simple-git';
import { generateLLMCommit } from './llm';

/**
 * Generates a commit message based on staged changes using AI
 * @param type - Optional commit type to enforce (feat, fix, chore, etc.)
 * @returns The generated commit message
 * @throws Error if not in a Git repository or Git operations fail
 */
export async function generateCommitMessage(type?: string): Promise<string> {
  try {
    const git = simpleGit();

    // Check if we're in a Git repository
    const isRepo = await git.checkIsRepo();
    if (!isRepo) {
      throw new Error('Not a Git repository. Please run this command inside a Git repository.');
    }

    // Get staged diff
    const diff = await git.diff(['--staged']);

    // Check if there are any staged changes
    if (!diff || diff.trim().length === 0) {
      throw new Error('No changes staged for commit. Use "git add" to stage files first.');
    }

    // Generate commit message from LLM
    const commitMessage = await generateLLMCommit(diff, type);

    return commitMessage;
  } catch (error) {
    // Re-throw with clear error message
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Failed to generate commit message: Unknown error');
  }
}