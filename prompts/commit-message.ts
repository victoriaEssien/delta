/**
 * Constructs a prompt for the LLM to generate a conventional commit message
 * based on Git diff output.
 * 
 * @param diff - The staged Git diff
 * @param type - Optional commit type to enforce (feat, fix, chore, etc.)
 * @returns The formatted prompt string
 */
export function buildCommitPrompt(diff: string, type?: string): string {
  const typeConstraint = type 
    ? `You MUST use the commit type "${type}".`
    : `Choose the most appropriate commit type from: feat, fix, chore, docs, style, refactor, test, perf, ci, build.`;

  return `You are a Git commit message expert. Analyze the following Git diff and generate a single-line conventional commit message.

REQUIREMENTS:
1. Follow the format: <type>: <description>
2. ${typeConstraint}
3. Keep the description concise (50-72 characters max)
4. Use imperative mood ("add feature" not "added feature")
5. Start with lowercase after the colon
6. NO period at the end
7. Focus on WHAT changed and WHY, not HOW

COMMIT TYPES:
- feat: New feature for the user
- fix: Bug fix
- chore: Routine tasks, maintenance, dependencies
- docs: Documentation changes
- style: Code style/formatting (no logic change)
- refactor: Code restructuring (no behavior change)
- test: Adding or updating tests
- perf: Performance improvements
- ci: CI/CD pipeline changes
- build: Build system or external dependencies

GIT DIFF:
\`\`\`
${diff}
\`\`\`

Generate ONLY the commit message (one line, no explanation, no quotes):`;
}
