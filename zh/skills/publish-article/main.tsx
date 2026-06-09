import { createRoot } from "react-dom/client";
import { SkillsLayout } from "../../../src/skills/SkillsLayout";
import { initAnalytics } from "../../../src/shared/analytics";
import "../../../src/styles/global.css";

initAnalytics();

function SkillPageZh() {
  return (
    <SkillsLayout lang="zh">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs text-text-secondary mb-3">
          <span className="px-2 py-0.5 bg-bg-secondary rounded">写作</span>
          <time>2026-06-09</time>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold leading-tight">/publish-article</h1>
        <p className="text-sm text-text-secondary mt-2">
          将 AI 对话转化为结构化文章，可直接发布到 apey.co。
        </p>
      </header>

      <div className="prose prose-sm max-w-none space-y-6">
        <section>
          <h2>何时使用</h2>
          <p>当用户说以下内容时触发：</p>
          <ul>
            <li>"publish this conversation"</li>
            <li>"write an article about this"</li>
            <li>"整理成文章"</li>
            <li>"turn this into a blog post"</li>
            <li>"可以把这段对话整理成文章吗"</li>
          </ul>
        </section>

        <section>
          <h2>工作流</h2>

          <h3>第 1 步：收集</h3>
          <p>读取捕获文件（如果存在）、对话上下文和博客配置。识别核心论点、证据、叙事弧线和需要丢弃的无关分支。</p>

          <h3>第 2 步：大纲 — 选择模板</h3>
          <p>向用户推荐一个模板并展示大纲。三种模板可选：</p>
          <ul>
            <li><strong>模板 A — 洞察型：</strong> 适用于发现新认知的对话。结构：结论→证据→含义→限制→要点。</li>
            <li><strong>模板 B — 过程型：</strong> 适用于构建/学习/实践类对话。结构：做了什么→步骤+教训→惊喜→数据→关键收获。</li>
            <li><strong>模板 C — 分析型：</strong> 适用于比较工具/方案/决策的对话。结构：问题→标准→选项→判断→反思。</li>
          </ul>

          <h3>第 3 步：撰写</h3>
          <p>生成 <code>content.ts</code> 文件——导出 <code>meta</code> 和 <code>sections</code> 的 TypeScript 文件。强制写作风格：</p>
          <ul>
            <li>第一人称："我"不用"笔者"</li>
            <li>直接陈述：开门见山，不铺垫</li>
            <li>短段落。每段一个想法。</li>
            <li>1000-2000 字。约 15 个段落。</li>
            <li>数据优于形容词："3 小时，¥5.85"而非"又快又便宜"</li>
            <li>KK 语调：观察者视角、具体、略带惊奇、不说教</li>
          </ul>

          <h3>第 4 步：打磨</h3>
          <p>展示完整文章。向用户询问结构、流畅度、遗漏的角度和语调。根据反馈迭代。</p>

          <h3>第 5 步：发布</h3>
          <p>写入文件到 apey.co。</p>
          <p><strong>新建文件：</strong></p>
          <ol>
            <li><code>blog/{'{slug}'}/index.html</code> — SEO 元数据</li>
            <li><code>blog/{'{slug}'}/main.tsx</code> — 渲染 BlogLayout + sections</li>
            <li><code>blog/{'{slug}'}/content.ts</code> — 生成的文章</li>
          </ol>
          <p><strong>修改文件：</strong></p>
          <ol>
            <li><code>vite.config.ts</code> — 添加 rollupOptions.input</li>
            <li><code>src/blog/main.tsx</code> — 添加 posts 数组条目</li>
            <li><code>public/sitemap.xml</code> — 添加 URL</li>
          </ol>
        </section>

        <section>
          <h2>捕获机制</h2>
          <p>对话中可选捕获。当用户说"记住这个点"、"save for article"或"mark this"时，AI 追加到 <code>Scout/.claude/article-capture/{'{topic}'}.md</code>。每条一行，含时间戳和摘要。</p>
          <p>如果没有捕获文件，AI 直接从完整对话上下文中提取。</p>
        </section>

        <section className="mt-8 p-4 bg-bg-secondary rounded-lg border border-border">
          <h3 className="text-sm font-semibold mb-2">安装</h3>
          <p className="text-xs text-text-secondary mb-2">
            将技能文件复制到你的 Claude Code skills 目录：
          </p>
          <pre className="text-xs bg-bg p-3 rounded overflow-x-auto"><code>mkdir -p .claude/skills/publish-article/templates
curl -o .claude/skills/publish-article/SKILL.md https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/SKILL.md
curl -o .claude/skills/publish-article/templates/insight.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/insight.ts
curl -o .claude/skills/publish-article/templates/process.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/process.ts
curl -o .claude/skills/publish-article/templates/analysis.ts https://raw.githubusercontent.com/ApeInspire/Scout/master/.claude/skills/publish-article/templates/analysis.ts</code></pre>
          <p className="text-xs text-text-secondary mt-2">
            然后在任意 Claude Code 会话中使用：<code className="text-text">/publish-article</code>
          </p>
        </section>

        <section className="mt-4 text-xs text-text-secondary">
          <p>
            源文件：{" "}
            <a href="https://github.com/ApeInspire/Scout/tree/master/.claude/skills/publish-article" className="text-primary hover:underline">
              Scout/.claude/skills/publish-article
            </a>
          </p>
        </section>
      </div>
    </SkillsLayout>
  );
}

createRoot(document.getElementById("root")!).render(<SkillPageZh />);
