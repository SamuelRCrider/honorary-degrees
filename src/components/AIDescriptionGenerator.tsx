import { useState } from "react";
import { generateDescription } from "../lib/openai";
import { useDegreeStore } from "../store/useDegreeStore";

export default function AIDescriptionGenerator() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const setDescription = useDegreeStore((state) => state.setDescription);

  const handleGenerateDescription = async () => {
    if (!prompt.trim()) {
      setError("Please enter a prompt to generate a description.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const generatedDescription = await generateDescription(prompt);
      setDescription(generatedDescription);
    } catch (err) {
      setError("Failed to generate description. Please try again later.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-indigo-800">
        AI Description Generator
      </h3>
      <p className="mb-4 text-gray-600">
        Let our AI help you craft the perfect honorary degree description. Just
        provide a prompt about the field of study, achievements, or qualities
        you want to highlight.
      </p>

      <div className="mb-4">
        <label
          htmlFor="prompt"
          className="block mb-2 font-medium text-gray-700"
        >
          Your Prompt
        </label>
        <textarea
          id="prompt"
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          rows={3}
          placeholder="e.g., Create a description for an honorary doctorate in environmental science for someone who has worked on climate change initiatives"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <button
        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 disabled:opacity-50"
        onClick={handleGenerateDescription}
        disabled={isLoading || !prompt.trim()}
      >
        {isLoading ? "Generating..." : "Generate Description"}
      </button>

      <div className="mt-4 text-sm text-gray-500">
        <p>
          The generated description will automatically be added to your degree
          form.
        </p>
      </div>
    </div>
  );
}
