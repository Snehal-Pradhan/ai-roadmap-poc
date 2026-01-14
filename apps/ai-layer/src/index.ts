import dotenv from 'dotenv';
dotenv.config()

import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not defined in environment variables");
}

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash",
  apiKey: apiKey as string,
  temperature: 0,
});

