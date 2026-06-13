export function buildUserPrompt(goal: string): string {
  return `I want an AI to do the following task:

${goal.trim()}

Generate a System Prompt for this.`;
}

export function getExampleGoals(lang: string): string[] {
  if (lang === "zh") {
    return [
      "写一篇关于AI对教育影响的短文，面向家长读者",
      "分析两段代码的差异并解释哪个更好",
      "把复杂的技术文档改写成非技术人员能看懂的语言",
    ];
  }
  return [
    "Write a short article about AI impact on education, for parent readers",
    "Analyze the difference between two code snippets and explain which is better",
    "Rewrite a complex technical document into language a non-technical person can understand",
  ];
}
