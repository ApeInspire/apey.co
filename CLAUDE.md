# apey.co — ApeInspire 工具平台

## 技术栈

- React 19 + TypeScript strict mode
- Vite 6（MPA 多页应用）
- Tailwind CSS v4（CSS-based 配置）
- 部署：Cloudflare Pages

## 架构

MPA 结构，HTML 在项目根目录，TS 在 src/：

```
tools/{tool-name}/
└── index.html              ← SEO meta + 入口（引用 src 下的 TS）

src/tools/{tool-name}/
├── main.tsx                ← 挂载 Layout + 组件
├── {ToolName}.tsx          ← 工具组件
└── helpers.ts              ← 纯函数逻辑（零 DOM/React 依赖）
```

共享组件在 `src/shared/`，工具注册在 `src/shared/constants.ts`。

## 新增工具流程

1. 创建 `tools/{tool-name}/index.html` — 复制已有工具，改 title/description/canonical/og，script src 指向 `../../src/tools/{tool-name}/main.tsx`
2. 创建 `src/tools/{tool-name}/main.tsx` — `createRoot` + Layout + 工具组件
3. 创建 `src/tools/{tool-name}/{ToolName}.tsx` — React 组件，用 Tailwind + 共享 UI
4. 创建 `src/tools/{tool-name}/helpers.ts` — 纯函数，export 接口
5. 更新 `vite.config.ts` — `rollupOptions.input` 加一行
6. 更新 `src/shared/constants.ts` — TOOLS 数组加一条
7. 更新 `public/sitemap.xml` — 加 URL

## 代码规范

- 双引号，分号
- TypeScript strict，所有类型显式声明
- 组件用函数式 + hooks
- helpers.ts 是纯函数：只接收输入返回输出，不访问 DOM、不 import React
- 样式只用 Tailwind utility classes，不用自定义 CSS
- 所有处理在客户端完成，不调用任何 API

## 共享组件

| 组件 | 用途 |
|------|------|
| Layout | Header + main + footer 包裹 |
| Header | 导航栏，从 constants.ts 读取工具列表 |
| Footer | 页脚 |
| ToolCard | 首页工具卡片 |
| ToolPageHeader | 工具页标题 + 描述 |
| TextArea | 输入/输出文本框 |
| CopyButton | 复制到剪贴板 |
| AdSlot | 广告位组件（懒加载，非侵入式） |
| CookieConsent | GDPR Cookie 同意弹窗 |
| analytics | 行为追踪模块（事件追踪、多供应商） |

## 广告系统

非侵入式广告，不影响用户体验。三个广告位：

| 位置 | 何时显示 | 原则 |
|------|----------|------|
| toolBanner | 工具页标题下方 | 小横幅，不挡操作区 |
| toolSidebar | 桌面端右侧边栏 | 仅 lg+ 屏幕，移动端隐藏 |
| toolFooter | 工具输出下方 | 用户完成操作后才看到 |

**禁止**：弹窗、插页广告、输入输出之间插入广告、自动播放视频广告。

配置在 `src/shared/adConfig.ts`，支持 AdSense / EthicalAds / Carbon Ads。
当前默认 `provider: "placeholder"`，上线时切换为实际供应商。

新增工具时按 ParagraphFormatter 的模式插入 3 个 `<AdSlot>` 即可。

## 分析追踪

隐私优先，追踪行为模式不追踪内容。

**追踪事件**（通过 `trackToolUse`）：
- `input` — 用户输入（仅记录长度，不记录内容）
- `copy` — 复制输出
- `option` — 切换选项

**供应商支持**：Cloudflare Web Analytics（推荐，免费无限，Pages 自动注入）/ Plausible / Umami / GA4 / 自定义 endpoint
**Cookie 同意**：Cloudflare 无需同意（无 Cookie），其他供应商首次访问 1.5s 后显示

Cloudflare Web Analytics 在 Dashboard 开启即生效，无需改代码。自定义事件追踪配置在 `src/shared/analyticsConfig.ts`。
新增工具时在组件中调用 `trackToolUse(toolName, action, props)` 追踪关键行为。

## 构建

```bash
npm run dev      # 本地开发
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```
