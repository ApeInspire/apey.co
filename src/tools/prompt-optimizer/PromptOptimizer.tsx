import { useState, useCallback } from "react";
import { ToolPageHeader } from "../../shared/ToolPageHeader";
import { TextArea } from "../../shared/TextArea";
import { CopyButton } from "../../shared/CopyButton";
import { buildUserPrompt, getExampleGoals } from "./helpers";

interface Props {
  lang?: "en" | "zh";
}

export function PromptOptimizer({ lang = "en" }: Props) {
  const [goal, setGoal] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isZh = lang === "zh";
  const examples = getExampleGoals(lang);

  const handleOptimize = useCallback(async () => {
    if (goal.trim().length === 0) return;
    setLoading(true);
    setError("");
    setOutput("");

    const userPrompt = buildUserPrompt(goal);
    setOutput(userPrompt);

    try {
      const res = await fetch("/api/optimize", {
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
      setError(
        isZh
          ? "网络错误。请检查连接后重试。"
          : "Network error. Check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }, [goal, lang]);

  return (
    <div>
      <ToolPageHeader
        title={isZh ? "AI 提示词优化器" : "AI Prompt Optimizer"}
        description={
          isZh
            ? "描述你想要 AI 完成的任务，获得结构化的、可执行的 System Prompt。"
            : "Describe what you want an AI to do. Get back a structured, executable System Prompt."
        }
      />

      <div className="mb-6">
        <TextArea
          label={isZh ? "你想要 AI 完成什么任务？" : "What do you want the AI to do?"}
          value={goal}
          onChange={setGoal}
          placeholder={
            isZh
              ? "例如：根据自然语言描述生成 SQL 查询，遇到模糊需求先提问确认。"
              : "e.g. 'Write SQL queries from natural language descriptions. The AI should ask clarifying questions before generating queries.'"
          }
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
          {loading ? (isZh ? "优化中..." : "Optimizing...") : (isZh ? "优化" : "Optimize")}
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
              {isZh ? "生成的 System Prompt" : "Generated System Prompt"}
            </label>
            <CopyButton text={output} />
          </div>
          <TextArea value={output} onChange={() => {}} readOnly rows={12} />
        </div>
      )}

      <div className="mt-8 p-4 bg-bg-secondary rounded-lg">
        <h2 className="text-sm font-semibold mb-2">{isZh ? "试试这些示例" : "Example goals to try"}</h2>
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
