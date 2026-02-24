# Delta Git AI

> AI-powered Git companion that generates conventional commit messages, branch names, and PR descriptions

Delta streamlines your Git workflow by using AI to analyze your code changes and automatically generate clean, professional, and consistent commit messages following conventional commit standards.

## Features

- **AI-Powered Commit Messages** - Analyzes staged changes and generates meaningful conventional commits
- **Fast & Simple** - Clean CLI interface with minimal setup
- **Type Enforcement** - Optionally specify commit types (feat, fix, chore, etc.)
- **Beautiful Output** - Colored terminal output for better readability
- **Conventional Commits** - Follows industry-standard commit message format

## Installation

```bash
npm install -g delta-git-ai
```

## Setup

1. Get a [Google Gemini API key](https://aistudio.google.com/app/api-keys) (free)

2. Create a `.env` file in your project root or home directory:

```bash
GEMINI_API_KEY=your_api_key_here
```

## Usage

### Generate Commit Message

Stage your changes and run:

```bash
delta commit
```

Output:

```text

🔍 Analyzing staged changes...

✓ Generated commit message:

feat: add user authentication with JWT

To use this message:
  git commit -m "feat: add user authentication with JWT"

```

### Specify Commit Type

Force a specific commit type:

```bash
delta commit -t fix
delta commit -t chore
delta commit -t docs
```

### Available Commit Types

- `feat` - New feature
- `fix` - Bug fix
- `chore` - Maintenance tasks
- `docs` - Documentation changes
- `style` - Code style/formatting
- `refactor` - Code restructuring
- `test` - Adding/updating tests
- `perf` - Performance improvements
- `ci` - CI/CD changes
- `build` - Build system changes

## How It Works

1. **Analyzes** your staged Git changes (`git diff --staged`)
2. **Sends** the diff to Google Gemini AI with a specialized prompt
3. **Generates** a concise, conventional commit message
4. **Displays** the message for you to copy and use

## Requirements

- Node.js 16+
- Git repository
- Google Gemini API key

## Development

```bash
# Clone repository
git clone https://github.com/victoriaEssien/delta.git
cd delta

# Install dependencies
npm install

# Build
npm run build

# Link locally
npm link

# Test
delta commit
```

## Roadmap

- [ ] PR title and description generation
- [ ] Branch name suggestions
- [ ] Interactive mode to edit messages
- [ ] Support for multiple LLM providers
- [ ] VS Code extension
- [ ] Configuration file support

## License

MIT

## Author

Victoria Essien
