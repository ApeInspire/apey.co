# apey.co — 完整项目上下文

## 项目概述

**apey.co** 是 Ape（ApeInspire）的个人数字工坊（Workshop），专注于对 AI 的全面探索、学习和使用。

- **工作室**：ApeInspire
- **网站**：apey.co
- **网名**：Ape
- **定位**：对 AI 的全面探索、学习和使用
- **标语**：To know to act（英文）/ 知行合一（中文）

## 核心哲学

```
不是创业，不是副业，是个人兴趣项目。
兴趣驱动，不以盈利为目的。
探索、学习、创造 = 体验本身，跟旅行一样。
过程就是目的，不是为了留下痕迹。

不要让商业模式限制了创新。
不要让盈利限制了冒险尝试的想法。

最坏的结果：没人用、不营利，但一年 365 篇文章 → 一本有影响力的电子书。
```

## 飞轮模型

```
兴趣 → 输出 → 自反馈 → 更多输出 → 外在反馈（自然来）

自反馈：写作过程本身 = 想清楚、学到东西、发现未知
外反馈：读者、用户，来得慢，是副产品

自反馈是引擎，外反馈是副产品。
不需要外反馈才开始，输出本身就是收获。
先建立自反馈，再建立外在反馈。
```

## 网站结构

```
apey.co
├── /（英文首页：见解列表）
├── /zh/（中文首页：见解列表）
├── /blog/{slug}/（英文文章）
├── /zh/blog/{slug}/（中文文章）
├── /mvp/（MVP 产品 — Coming Soon）
└── /mvp/{slug}/（具体 MVP 产品）
```

## 技术架构

```
前端：React 19 + TypeScript + Tailwind CSS v4
构建：Vite（MPA 多页应用）
部署：Cloudflare Pages
后端：Cloudflare Workers（将来需要时）
数据库：D1（轻量）/ Supabase（需要时）
AI：Workers AI（轻量）/ OpenAI/Anthropic（复杂任务）
存储：R2
分析：Cloudflare Web Analytics
域名：Cloudflare Registrar（apey.co）
```

### 为什么选这套技术栈

- **React**：AI 训练语料最多，生成准确率最高
- **TypeScript**：类型安全，AI 生成更准确
- **Tailwind**：AI 生成最准确的 CSS 方案
- **Vite**：最快构建，AI 熟悉度高
- **Cloudflare**：免费层最慷慨，全家桶一站式，成本最低
- **SVG 图表**：AI 生成 SVG 比 Mermaid 更准确，零依赖

## 内容策略

### 见解（Insights）

**定位**：AI 行业、产品、开发、趋势、商业分析

**写作风格**：
- 像人在说话，不像机器写的
- 用"我"不用"笔者"，用"你"不用"您"
- 直接说观点，不铺垫
- 1000-2000 字

**多语言**：
- 中文主写，AI 翻译英文
- 中文版：/zh/blog/{slug}/
- 英文版：/blog/{slug}/

**SEO**：
- 不焦虑流量，不讨好算法
- 写真正有价值的内容
- AI 时代，内容质量 > 域名相关性

### MVP（最小可行产品）

**定位**：基于深度分析后的市场试探

**特点**：
- 最小：能验证假设的最小版本
- 可用：能让人体验，不是概念
- 公开：放在 /mvp/ 下，透明输出
- 快速：低成本，快速迭代
- 可弃：没反应就放弃，不执着

**跟见解的关系**：
- 见解：思考、分析、输出观点
- MVP：动手做、落地、验证
- 见解驱动 MVP，MVP 验证见解

## 项目形态

**apey.co = Ape 的工坊（Workshop）**

不是创业，不是副业，不是博客站，不是工具站。
是：一个有技术背景的人，在 AI 时代探索价值在哪里。

对标：Martin Fowler、Kevin Kelly 思想家路径。
通过写作建立个人平台和影响力。
机会会在探索中自然出现（咨询、演讲、合作、付费内容）。

## 实际成本数据

| 数据 | 数值 |
|------|------|
| AI 模型 | mimo-v2.5-pro |
| 套餐 | Lite（¥39/月，41 亿 Credits） |
| 总时间 | ~3 小时（不含等待） |
| Token 消耗 | ~6.15 亿（套餐的 15%） |
| 实际成本 | ~¥5.85 |
| 请求数 | ~1,000+ 次 |
| 产出 | 完整多语言网站（博客 + MVP + SEO + 分析） |

## 第一篇文章结构

标题：I Built a Website Through Conversation With AI / 我跟 AI 对话建了一个网站

章节：
1. 背景 — mimo-v2.5-pro、Lite 套餐、实际成本数据
2. 为什么选 TypeScript — AI 生成最准确，训练语料最多
3. 为什么选 Cloudflare — 免费层最慷慨、一站式、经济性最好
4. AI 干了什么 — 技术活全是它的
5. 我干了什么 — 决策、判断、纠错
6. Logo 的故事 — 甲骨文「探」字，手伸入穴中
7. AI 做不了什么 — 决策、品味、判断
8. 数据 — 3 小时、¥5.85、6.15 亿 tokens
9. 这意味着什么 — 开发者角色在变

## Logo 设计过程

```
迭代过程：
1. 卡通猿人 → 太幼稚
2. 线条画猿人 → 像老头
3. 甲骨文「猿」→ 太规矩
4. 甲骨文「探」→ 最终定稿

最终设计：
- 甲骨文风格的「探」字
- 穴（洞穴）+ 手（伸入穴中）
- 白色线条 + 深色背景
- 极简、黑白、中国风格
- 含义：探索、伸手入穴、寻找未知
```

## 品牌设计

### Logo

- **设计**：探字的极简版 — 手伸入穴中
- **配色**：白色线条 + 深色背景
- **风格**：极简、黑白、线条画
- **文件**：public/logo.svg（页面用）、public/favicon.svg（TAB 用）

### 关键词

```
AI, 科技, 行业, 产品, 开发, 系统, 工程, 影响
```

## 已完成的工作

### 网站基础

- [x] 项目初始化（Vite + React + TypeScript + Tailwind）
- [x] 多语言架构（中英文切换）
- [x] 博客系统（见解列表 + 文章页）
- [x] MVP 页面（Coming Soon）
- [x] Logo 设计（探字极简版）
- [x] Favicon
- [x] SEO meta 标签
- [x] 响应式设计
- [x] 部署到 Cloudflare Pages

### 内容

- [x] 第一篇文章：我跟 AI 对话建了一个网站（中英文）
  - 包含完整数据：3 小时、¥5.85、6.15 亿 tokens
  - 包含 Logo 设计过程（甲骨文「探」字）
  - 包含技术选型、平台选型、AI 能力边界
- [ ] 第二篇文章：待定

### 技术组件

- [x] Layout（页面布局）
- [x] Header（导航栏 + 语言切换）
- [x] Footer（页脚，支持多语言）
- [x] BlogList（文章列表）
- [x] BlogCard（文章卡片，支持多语言链接）
- [x] BlogLayout（文章布局）
- [x] Diagram（SVG 图表组件）
- [x] ArticleFeedback（文章反馈组件）
- [x] CookieConsent（Cookie 同意）
- [x] analytics（分析追踪模块）
- [x] i18n（多语言配置）
- [x] MvpLayout（MVP 布局）

## 待办事项

### 短期

- [ ] 写第二篇文章
- [ ] 优化文章语言风格（更自然、更口语化）
- [ ] 添加更多文章到见解列表

### 中期

- [ ] 建立反馈系统（文章反馈 + 工具需求投票）
- [ ] 集成 Cloudflare Web Analytics
- [ ] 开始做第一个 MVP

### 长期

- [ ] 积累 365+ 篇文章
- [ ] 整理成电子书
- [ ] 建立个人品牌影响力

## 关键决策记录

### 2026-06-07

1. **域名选择**：apey.co（从 apehub.io、ape.link 等候选中选出，最短、品牌化、.co 商业属性）
2. **定位调整**：从"工具站"→"AI 探索平台"→"对 AI 的全面探索、学习和使用"
3. **内容策略**：见解（博客）+ MVP，不以盈利为目的
4. **移除工具**：工具同质化严重，AI 能生成任何静态工具，工具不是壁垒
5. **技术栈**：React + Vite + Tailwind + Cloudflare
6. **多语言**：中文主写，AI 翻译英文
7. **Logo**：甲骨文「探」字，手伸入穴中，白色线条+深色背景
8. **飞轮模型**：自反馈是引擎，外反馈是副产品
9. **项目形态**：Ape's Workshop，对标思想家路径

## 核心洞察

1. **AI 不是辅助开发，是 AI 做开发**：人的角色是决策者、判断者、验证者
2. **工具价值在消失**：AI 能生成任何静态工具，工具本身不是壁垒
3. **写作是思考过程**：不是为了流量，是为了想清楚
4. **先启动，后定位**：不要过度分析，先做起来
5. **自反馈优先**：写作过程本身就是收获，不需要等外部反馈
6. **Logo 设计**：甲骨文是最佳 logo 来源——象形文字，有文化内涵，极简可表达

## 文件结构

```
apey.co/
├── index.html                              # 英文首页
├── zh/index.html                           # 中文首页
├── blog/
│   └── how-i-built-a-website-with-ai/
│       ├── index.html                      # 英文文章入口
│       ├── main.tsx                        # 英文文章渲染
│       ├── content.ts                      # 英文文章内容
│       └── diagram.tsx                     # 文章图表
├── zh/blog/
│   └── how-i-built-a-website-with-ai/
│       ├── index.html                      # 中文文章入口
│       ├── main.tsx                        # 中文文章渲染
│       └── content.ts                      # 中文文章内容
├── mvp/
│   ├── index.html                          # MVP 首页（Coming Soon）
│   ├── main.tsx                            # MVP 首页渲染
│   └── first-product/
│       ├── index.html                      # MVP 产品入口
│       └── main.tsx                        # MVP 产品渲染
├── src/
│   ├── main.tsx                            # 英文首页入口
│   ├── zh/main.tsx                         # 中文首页入口
│   ├── i18n.ts                             # 多语言配置
│   ├── vite-env.d.ts                       # TypeScript 类型声明
│   ├── shared/
│   │   ├── Header.tsx                      # 导航栏 + 语言切换
│   │   ├── Footer.tsx                      # 页脚（支持多语言）
│   │   ├── Layout.tsx                      # 页面布局
│   │   ├── constants.ts                   # 网站常量 + 关键词
│   │   ├── analytics.ts                   # 分析追踪模块
│   │   ├── analyticsConfig.ts             # 分析配置
│   │   └── CookieConsent.tsx             # Cookie 同意组件
│   ├── blog/
│   │   ├── BlogLayout.tsx                 # 文章布局
│   │   ├── BlogList.tsx                   # 文章列表
│   │   ├── BlogCard.tsx                   # 文章卡片（支持多语言链接）
│   │   ├── Diagram.tsx                    # SVG 图表组件
│   │   ├── ArticleFeedback.tsx            # 文章反馈组件
│   │   └── blogConfig.ts                 # 博客配置 + 分类
│   ├── mvp/
│   │   ├── mvpConfig.ts                  # MVP 配置
│   │   └── MvpLayout.tsx                 # MVP 布局
│   └── styles/
│       └── global.css                     # 全局样式 + 博客排版
├── public/
│   ├── logo.svg                           # Logo（白色线条+深色背景）
│   ├── favicon.svg                        # Favicon（同 logo）
│   ├── robots.txt                         # 爬虫配置
│   └── sitemap.xml                        # 站点地图
├── docs/
│   └── techstack.md                       # 技术栈文档
├── CLAUDE.md                              # AI 指令文件
├── CONTEXT.md                             # 项目上下文（本文件）
├── vite.config.ts                         # Vite MPA 配置
├── tsconfig.json                          # TypeScript 配置
└── package.json                           # 项目配置
```

## 给下一个 AI 的说明

这是一个正在进行的项目。apey.co 是一个个人兴趣项目，专注于对 AI 的全面探索、学习和使用。

**核心原则**：
- 兴趣驱动，不以盈利为目的
- 探索、学习、创造 = 体验本身
- 先启动，后定位
- 自反馈优先

**当前状态**：
- 网站已部署在 Cloudflare Pages
- 第一篇文章已完成（中英文），包含完整数据：3 小时、¥5.85、6.15 亿 tokens
- Logo 已定稿（甲骨文「探」字）
- 技术架构已建立
- 需要继续写内容、做 MVP

**下一步**：
- 写第二篇文章
- 建立反馈系统
- 开始做第一个 MVP
- 集成 Cloudflare Web Analytics

**注意事项**：
- 写作风格要自然、口语化，不像机器写的
- 中文主写，AI 翻译英文
- 不要过度分析，先做起来
- 不要让商业模式限制创新
- 自反馈是引擎，外反馈是副产品
- 对标 Martin Fowler、Kevin Kelly 思想家路径
- Logo 是甲骨文「探」字，不要改
- 文章要有真实数据支撑，不要标题党
