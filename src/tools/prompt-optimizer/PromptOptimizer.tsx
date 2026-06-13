import { useState, useCallback } from "react";
import { ToolPageHeader } from "../../shared/ToolPageHeader";
import { TextArea } from "../../shared/TextArea";
import { CopyButton } from "../../shared/CopyButton";
import { buildUserPrompt, getExampleGoals } from "./helpers";

export function PromptOptimizer() {
  const [goal, setGoal] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [lang] = useState("en");

  const examples = getExampleGoals(lang);

  const handleOptimize = useCallback(async () => {
    if (goal.trim().length === 0) return;
    setLoading(true);
    setError("");
    setOutput("");

    const userPrompt = buildUserPrompt(goal);
    setOutput(userPrompt);

    try {
      const res = await fetch("https://apey-co.pages.dev/api/optimize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal: userPrompt, lang }),
      });

      const data = await res.json() as { prompt?: string; error?: string };

      if (!res.ok) {
        setError(data.error || "Request failed.");
        return;
      }

      if (data.prompt) {
        setOutput(data.prompt);
      }
    } catch {
      setError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }, [goal, lang]);

  return (
    <div>
      <ToolPageHeader
        title="AI Prompt Optimizer"
        description="Describe what you want an AI to do. Get back a structured, executable System Prompt."
      />

      <div className="mb-6">
        <TextArea
          label="What do you want the AI to do?"
          value={goal}
          onChange={setGoal}
          placeholder="e.g. 'Write SQL queries from natural language descriptions. The AI should ask clarifying questions before generating queries.'"
          rows={5}
        />
      </div>

      <div className="mb-6">
        <button
          onClick={handleOptimize}
          disabled={loading || goal.trim().length === 0}
          className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg
                     hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed
                     transition-colors"
        >
          {loading ? "Optimizing..." : "Optimize"}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 border border-red-300 bg-red-50 text-red-700 text-sm rounded-lg">
          {error}
        </div>
      )}

      {output && !error && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-text">
              Generated System Prompt
            </label>
            <CopyButton text={output} />
          </div>
          <TextArea value={output} onChange={() => {}} readOnly rows={12} />
        </div>
      )}

      <div className="mt-8 p-4 bg-bg-secondary rounded-lg">
        <h2 className="text-sm font-semibold mb-2">Example goals to try</h2>
        <ul className="space-y-1.5">
          {examples.map((ex, i) => (
            <li key={i}>
              <button
                onClick={() => setGoal(ex)}
                className="text-sm text-primary hover:text-primary-hover text-left transition-colors"
              >
                &quot;{ex}&quot;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
