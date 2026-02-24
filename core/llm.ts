import dotenv from 'dotenv';
dotenv.config();

export async function generateLLMCommit(diff: string, type?: string) {
  // Placeholder: send diff + type to LLM API and return message
  // Copilot can handle actual API integration
  return `feat: example commit message based on diff`;
}