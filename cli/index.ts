#!/usr/bin/env node
import { Command } from 'commander';
import { generateCommitMessage } from '../core/commit';

const program = new Command();

program
  .command('commit')
  .description('Generate a commit message based on staged changes')
  .option('-t, --type <type>', 'Specify commit type (feat, fix, chore, etc.)')
  .action(async (options) => {
    const commitMessage = await generateCommitMessage(options.type);
    console.log('\nGenerated commit message:\n');
    console.log(commitMessage);
  });

program.parse(process.argv);