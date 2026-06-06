import { createRoot } from "react-dom/client";
import { Layout } from "../../shared/Layout";
import { ParagraphFormatter } from "./ParagraphFormatter";
import { initAnalytics } from "../../shared/analytics";
import "../../styles/global.css";

initAnalytics();

createRoot(document.getElementById("root")!).render(
  <Layout>
    <ParagraphFormatter />
  </Layout>
);
