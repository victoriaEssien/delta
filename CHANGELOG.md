# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-02-24

### Added
- Initial release of Delta
- AI-powered commit message generation using Google Gemini
- Support for conventional commit types (feat, fix, chore, etc.)
- CLI command: `delta commit`
- Optional type flag: `delta commit -t <type>`
- Colored terminal output
- Error handling for common issues (no staged files, not in Git repo)
- Comprehensive documentation

### Features
- Analyzes Git diffs to generate meaningful commit messages
- Follows conventional commit format
- Simple installation via npm
- BYOK (Bring Your Own Key) model for Gemini API

[1.0.0]: https://github.com/victoriaEssien/delta/releases/tag/v1.0.0
