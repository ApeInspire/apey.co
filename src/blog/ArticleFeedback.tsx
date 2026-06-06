import { useState } from "react";
import { trackEvent } from "../shared/analytics";

interface ArticleFeedbackProps {
  articleId: string;
}

export function ArticleFeedback({ articleId }: ArticleFeedbackProps) {
  const [voted, setVoted] = useState(false);

  const handleVote = (helpful: boolean) => {
    trackEvent("article_feedback", {
      article: articleId,
      helpful: String(helpful),
    });
    setVoted(true);
  };

  if (voted) {
    return (
      <div className="py-4 text-sm text-text-secondary">
        Thanks for your feedback!
      </div>
    );
  }

  return (
    <div className="py-4 flex items-center gap-4 text-sm">
      <span className="text-text-secondary">Was this helpful?</span>
      <button
        onClick={() => handleVote(true)}
        className="px-3 py-1 border border-border rounded hover:bg-bg-secondary transition-colors"
      >
        Yes
      </button>
      <button
        onClick={() => handleVote(false)}
        className="px-3 py-1 border border-border rounded hover:bg-bg-secondary transition-colors"
      >
        No
      </button>
    </div>
  );
}
