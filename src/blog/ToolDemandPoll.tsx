import { useState } from "react";
import { trackEvent } from "../shared/analytics";

interface ToolDemandPollProps {
  topic: string;
}

export function ToolDemandPoll({ topic }: ToolDemandPollProps) {
  const [voted, setVoted] = useState(false);

  const handleVote = (need: boolean) => {
    trackEvent("tool_demand", {
      topic,
      need: String(need),
    });
    setVoted(true);
  };

  if (voted) {
    return (
      <div className="py-4 text-sm text-text-secondary">
        Thanks! Your feedback helps me decide what to build next.
      </div>
    );
  }

  return (
    <div className="py-4 flex items-center gap-4 text-sm">
      <span className="text-text-secondary">Need a tool for this?</span>
      <button
        onClick={() => handleVote(true)}
        className="px-3 py-1 border border-border rounded hover:bg-bg-secondary transition-colors"
      >
        Yes, I need it
      </button>
      <button
        onClick={() => handleVote(false)}
        className="px-3 py-1 border border-border rounded hover:bg-bg-secondary transition-colors"
      >
        Not really
      </button>
    </div>
  );
}
