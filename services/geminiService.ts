
import { GoogleGenAI, Type } from "@google/genai";
import { DevRelInitiative } from "../types";

export const analyzeDevRelStrategy = async (initiatives: DevRelInitiative[]): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    Analyze the following DevRel initiatives based on their Reach, Closeness (Gap bridging), and Developer Happiness.
    Data: ${JSON.stringify(initiatives)}
    
    Provide a professional summary of the strategy balance.
    Identify if there's a lack of broad reach (discovery) or a lack of deep intimacy (loyalty).
    Suggest 3 actionable improvements to bridge the developer-ecosystem gap further.
    Format your response in Markdown.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });
    return response.text || "Unable to generate analysis at this time.";
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    return "The AI analyst is currently offline. Please check your data manually.";
  }
};
