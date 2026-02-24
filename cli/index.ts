#!/usr/bin/env node
import { Command } from 'commander';
import chalk from 'chalk';
import { generateCommitMessage } from '../core/commit';

const program = new Command();

program
  .name('delta')
  .description('AI-powered Git companion for commit messages, branches, and PRs')
  .version('1.0.0');

program
  .command('commit')
  .description('Generate a commit message based on staged changes')
  .option('-t, --type <type>', 'Specify commit type (feat, fix, chore, etc.)')
  .action(async (options) => {
    try {
      console.log(chalk.gray('\n🔍 Analyzing staged changes...\n'));
      
      const commitMessage = await generateCommitMessage(options.type);
      
      console.log(chalk.green('✓ Generated commit message:\n'));
      console.log(chalk.bold.white(commitMessage));
      console.log(chalk.gray('\nTo use this message:'));
      console.log(chalk.gray(`  git commit -m "${commitMessage}"`));
      console.log();
    } catch (error) {
      console.error(chalk.red('\n✗ Error:'), error instanceof Error ? error.message : 'Unknown error');
      process.exit(1);
    }
  });

program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}