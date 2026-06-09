import { useState } from "react";
import InfoDialog from "./components/InfoDialog";
import ColorPrinciplesSection from "./components/sections/ColorPrinciplesSection";
import DepthPrinciplesSection from "./components/sections/DepthPrinciplesSection";
import FinishPrinciplesSection from "./components/sections/FinishPrinciplesSection";
import HierarchySection from "./components/sections/HierarchySection";
import SpacingSection from "./components/sections/SpacingSection";
import TypographyPrinciplesSection from "./components/sections/TypographyPrinciplesSection";

type PrincipleId = "hierarchy" | "spacing" | "color" | "typography" | "depth" | "finish";

const navItems: { id: PrincipleId; label: string; summary: string }[] = [
  { id: "hierarchy", label: "视觉层级", summary: "主次与弱化" },
  { id: "spacing", label: "留白间距", summary: "分组与呼吸感" },
  { id: "color", label: "色彩系统", summary: "色阶与状态" },
  { id: "typography", label: "字体排印", summary: "字号与行宽" },
  { id: "depth", label: "光影层次", summary: "阴影与远近" },
  { id: "finish", label: "细节打磨", summary: "质感与空状态" },
];

const sectionById = {
  hierarchy: HierarchySection,
  spacing: SpacingSection,
  color: ColorPrinciplesSection,
  typography: TypographyPrinciplesSection,
  depth: DepthPrinciplesSection,
  finish: FinishPrinciplesSection,
};

export default function App() {
  const [activeTab, setActiveTab] = useState<PrincipleId>("hierarchy");
  const [infoOpen, setInfoOpen] = useState(false);
  const ActiveSection = sectionById[activeTab];

  const selectTab = (id: PrincipleId, scroll = true) => {
    setActiveTab(id);

    if (scroll) {
      requestAnimationFrame(() => {
        document.getElementById("principles")?.scrollIntoView({ block: "start" });
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* 导航 */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 text-sm font-bold text-white shadow-sm shadow-indigo-200">
              R
            </span>
            <span className="text-sm font-bold tracking-tight">
              Refactoring<span className="text-indigo-600"> UI</span>
              <span className="ml-2 hidden font-normal text-slate-400 sm:inline">
                设计原则示例
              </span>
            </span>
          </a>
          <div className="flex items-center gap-5">
            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((n) => (
                <button
                  key={n.id}
                  onClick={() => selectTab(n.id)}
                  className={`text-sm font-medium transition ${
                    activeTab === n.id
                      ? "text-indigo-600"
                      : "text-slate-500 hover:text-indigo-600"
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </nav>
            <div className="group relative pl-1">
              <button
                type="button"
                onClick={() => setInfoOpen(true)}
                aria-label="查看项目信息"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm ring-1 ring-slate-200 transition hover:text-indigo-600 hover:ring-indigo-200"
              >
                <svg className="h-4.5 w-4.5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M18 10A8 8 0 1 1 2 10a8 8 0 0 1 16 0ZM9.25 8.75A.75.75 0 0 1 10 8h.01a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5ZM10 6.75A.875.875 0 1 0 10 5a.875.875 0 0 0 0 1.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <span className="pointer-events-none absolute right-0 top-11 hidden whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-medium text-white shadow-lg group-hover:block group-focus-within:block">
                关于项目
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(99,102,241,0.10),transparent)]" />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 text-center sm:pb-24 sm:pt-28">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3.5 py-1.5 text-xs font-semibold text-indigo-600 ring-1 ring-indigo-100">
            ✨ 灵感来自 Adam Wathan & Steve Schoger 的《Refactoring UI》
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl">
            设计无需天赋，
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              只需正确的方法
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
            6 个核心设计原则，每个都配有可交互的「优化前 / 优化后」对比示例。
            切换开关，亲眼看看小小的改动如何让界面焕然一新。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => selectTab(activeTab)}
              className="rounded-xl bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700"
            >
              开始浏览 ↓
            </button>
            <a
              href="https://www.refactoringui.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-7 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
            >
              了解原书
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {navItems.map((n, i) => (
              <button
                key={n.id}
                id={`${n.id}-tab`}
                onClick={() => selectTab(n.id)}
                aria-controls={`${n.id}-panel`}
                aria-selected={activeTab === n.id}
                className={`group rounded-xl p-4 text-left shadow-sm ring-1 transition hover:-translate-y-0.5 hover:shadow-md ${
                  activeTab === n.id
                    ? "bg-indigo-50 ring-indigo-200"
                    : "bg-white ring-slate-200/80 hover:ring-indigo-200"
                }`}
              >
                <p className="font-mono text-xs text-indigo-400">
                  0{i + 1}
                </p>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    activeTab === n.id
                      ? "text-indigo-700"
                      : "text-slate-800 group-hover:text-indigo-600"
                  }`}
                >
                  {n.label}
                </p>
                <p className="mt-1 text-xs text-slate-400">{n.summary}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <main id="principles" className="border-y border-slate-200/70 bg-slate-50">
        <div
          id={`${activeTab}-panel`}
          role="tabpanel"
          aria-labelledby={`${activeTab}-tab`}
          key={activeTab}
          className="animate-fade-up"
        >
          <ActiveSection />
        </div>
      </main>

      {/* 总结 + 页脚 */}
      <footer className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              好设计 = 有限的选择 + 刻意的层级
            </h2>
            <p className="mt-4 leading-relaxed text-slate-400">
              提前定义好字号、间距、颜色、阴影的「调色板」，设计时只做选择题；
              再不断追问「什么最重要」，强调它、弱化其余。剩下的，就是不断地打磨细节。
            </p>
          </div>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2">
            {[
              "从功能开始，而非布局",
              "先做灰阶稿",
              "省略不必要的边框",
              "用饱和的灰色注入个性",
              "好的图标值得投资",
              "大胆借鉴优秀作品",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-slate-800 px-4 py-1.5 text-xs font-medium text-slate-300 ring-1 ring-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-14 border-t border-slate-800 pt-8 text-center text-xs leading-relaxed text-slate-500">
            <p>
              本站为学习目的制作的非官方示例，核心理念来自
              <a
                href="https://www.refactoringui.com/"
                target="_blank"
                rel="noreferrer"
                className="mx-1 font-medium text-indigo-400 hover:text-indigo-300"
              >
                《Refactoring UI》
              </a>
              （Adam Wathan & Steve Schoger 著）。
            </p>
            <p className="mt-2">用 React + Tailwind CSS 构建 — 本站本身也在实践这些原则。</p>
          </div>
        </div>
      </footer>
      <InfoDialog open={infoOpen} onClose={() => setInfoOpen(false)} />
    </div>
  );
}
