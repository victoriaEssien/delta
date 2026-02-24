# Security Policy

## Supported Versions

Currently supported version with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability in Delta, please report it responsibly:

### How to Report

**Please do NOT open a public issue for security vulnerabilities.**

Instead:
1. Email the details to: [INSERT YOUR EMAIL]
2. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes (optional)

### What to Expect

- **Acknowledgment**: Within 48 hours
- **Updates**: Regular updates on the status
- **Fix Timeline**: We aim to patch critical vulnerabilities within 7 days
- **Credit**: You'll be credited in the release notes (if you wish)

## Security Best Practices

### For Users

1. **Never commit your `.env` file** - Keep your API keys private
2. **Use environment variables** - Don't hardcode sensitive data
3. **Keep Delta updated** - Run `npm update -g delta-git-ai` regularly
4. **Review generated messages** - Always review before committing

### For Contributors

1. **Don't commit secrets** - Check for API keys, tokens, passwords
2. **Validate user input** - Sanitize all user-provided data
3. **Review dependencies** - Check for known vulnerabilities with `npm audit`
4. **Follow secure coding practices** - Use TypeScript strict mode, validate types

## Known Limitations

- **API Keys**: Users must secure their own Gemini API keys
- **Git Data**: Delta reads staged Git diffs which may contain sensitive information
- **Network Requests**: API calls are made to Google's servers (uses HTTPS)

## Dependencies

Run `npm audit` regularly to check for vulnerabilities in dependencies.

## Questions?

For security-related questions, contact: [INSERT YOUR EMAIL]

For general questions, open a public issue on GitHub.
