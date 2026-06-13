interface Env {
  AI: Ai;
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const body = await request.json() as { goal: string; lang?: string };
  const { goal, lang = "en" } = body;

  if (!goal || typeof goal !== "string" || goal.trim().length === 0) {
    return new Response(
      JSON.stringify({ error: "Goal is required." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  if (goal.length > 2000) {
    return new Response(
      JSON.stringify({ error: "Goal must be under 2000 characters." }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const systemPrompt = lang === "zh"
    ? `你是一个 AI 提示词工程师。用户描述他们想让 AI 完成的任务。你的输出是 AI 可直接执行的 System Prompt（Markdown 格式）。

结构：
1. **Role** — AI 的角色和身份
2. **Task** — 具体要完成什么
3. **Constraints** — 边界和限制
4. **Output Format** — 期望的输出格式

要求：具体、可执行、不模糊。只输出 System Prompt，不要加解释。`
    : `You are a prompt engineer. The user describes what they want an AI to do. Output a System Prompt (in Markdown) that an AI can execute directly.

Structure:
1. **Role** — Who the AI is and its identity
2. **Task** — What exactly to accomplish
3. **Constraints** — Boundaries and limitations
4. **Output Format** — Expected output structure

Requirements: Specific, executable, unambiguous. Output only the System Prompt, no explanation.`;

  try {
    const response = await env.AI.run("@cf/meta/llama-4-scout-17b-16e-instruct", {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: goal },
      ],
      max_tokens: 512,
      temperature: 0.7,
    });

    const prompt = (response as { response?: string }).response?.trim() || "";

    if (!prompt) {
      return new Response(
        JSON.stringify({ error: "AI returned an empty response. Try rephrasing your goal." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(JSON.stringify({ prompt }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    const stack = e instanceof Error ? e.stack : "";
    console.error("AI.run failed:", message, stack);
    if (message.includes("4006") || message.includes("quota") || message.includes("allocation")) {
      return new Response(
        JSON.stringify({ error: "Daily free quota reached. Try again tomorrow." }),
        { status: 429, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ error: "AI service temporarily unavailable. Try again." }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }
};
