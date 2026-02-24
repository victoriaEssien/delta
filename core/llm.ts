import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { buildCommitPrompt } from '../prompts/commit-message';

dotenv.config();

// Initialize Gemini API client
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error('GEMINI_API_KEY is not set in environment variables');
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });

/**
 * Generates a conventional commit message using Google Gemini AI
 * @param diff - The staged Git diff
 * @param type - Optional commit type to enforce
 * @returns The generated commit message
 */
export async function generateLLMCommit(diff: string, type?: string): Promise<string> {
  try {
    const prompt = buildCommitPrompt(diff, type);
    
    const result = await model.generateContent(prompt);
    const response = result.response;
    const message = response.text().trim();
    
    // Validate that we got a non-empty response
    if (!message) {
      throw new Error('LLM returned an empty commit message');
    }
    
    // Remove any quotes or markdown formatting that might have been added
    let cleanMessage = message.replace(/^["'`]+|["'`]+$/g, '');
    cleanMessage = cleanMessage.replace(/^```\w*\n?|```$/g, '');
    
    return cleanMessage;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to generate commit message: ${error.message}`);
    }
    throw new Error('Failed to generate commit message: Unknown error');
  }
}