import { openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';

import { customMiddleware } from './custom-middleware';

const openai = new OpenAI({ apiKey: process.env.API_KEY, baseURL: process.env.API_URL, defaultQuery: { 'api-version': process.env.API_VERSION }, defaultHeaders: { 'api-key': process.env.CUSTOM_API_KEY }, });

export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: openai(apiIdentifier),
    middleware: customMiddleware,
  });
};
