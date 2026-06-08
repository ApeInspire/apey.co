import { useState } from "react";
import { trackEvent } from "../shared/analytics";

interface ArticleFeedbackProps {
  articleId: string;
  lang?: "en" | "zh";
}

const TEXT = {
  en: { question: "Helpful?", yes: "Yes", no: "No", thanks: "Thanks for the feedback!" },
  zh: { question: "有帮助吗？", yes: "有", no: "没有", thanks: "感谢反馈！" },
};

export function ArticleFeedback({ articleId, lang = "en" }: ArticleFeedbackProps) {
  const [voted, setVoted] = useState(false);
  const t = TEXT[lang];

  const handleVote = (helpful: boolean) => {
    trackEvent("article_feedback", { article: articleId, helpful: String(helpful) });
    setVoted(true);
  };

  if (voted) {
    return <span className="text-sm text-text-secondary">{t.thanks}</span>;
  }

  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-text-secondary">{t.question}</span>
      <button
        onClick={() => handleVote(true)}
        className="px-2.5 py-1 text-xs border border-border rounded hover:border-primary hover:text-primary transition-colors"
      >
        {t.yes}
      </button>
      <button
        onClick={() => handleVote(false)}
        className="px-2.5 py-1 text-xs border border-border rounded hover:border-border hover:text-text-secondary transition-colors"
      >
        {t.no}
      </button>
    </div>
  );
}
