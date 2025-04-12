import OpenAI from "openai";

// In a real application, this would be fetched from an environment variable
// For demo purposes, we're using a placeholder that would be replaced in production
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || "your-api-key";

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true, // Only for demo purposes
});

export async function generateDescription(prompt: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a creative diploma description writer. Write formal, impressive-sounding academic descriptions for honorary degrees.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "gpt-3.5-turbo",
    });

    return (
      completion.choices[0]?.message?.content ||
      "Unable to generate description."
    );
  } catch (error) {
    console.error("Error generating description:", error);
    return "Error generating description. Please try again.";
  }
}
