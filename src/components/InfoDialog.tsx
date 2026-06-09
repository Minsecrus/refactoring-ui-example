import { useEffect } from "react";

type InfoDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function InfoDialog({ open, onClose }: InfoDialogProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/45 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="info-dialog-title"
        className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-950/20 ring-1 ring-slate-900/10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
              项目说明
            </p>
            <h2
              id="info-dialog-title"
              className="mt-1 text-xl font-bold text-slate-900"
            >
              关于这个示例
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="关闭弹窗"
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>

        <div className="space-y-5 px-6 py-6">
          <p className="text-sm leading-6 text-slate-600">
            这是一个前端练习项目，把抽象的页面优化过程落实到可交互的
            before/after
            组件里。源码按页面区块和演示组件拆分，方便继续扩展示例。
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Stack
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                React / Vite / Tailwind CSS
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Delivery
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                GitHub Actions 发布到 Pages
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-4">
            <p className="text-sm font-semibold text-indigo-900">源码与许可</p>
            <p className="mt-1 text-sm leading-6 text-indigo-900/70">
              仓库包含完整源码、MIT License 和自动部署
              workflow。这个页面不包含书籍内容摘录，只作为学习和演示用的实现样例。<br />
              请支持正版书籍。
            </p>
          </div>

          <a
            href="https://github.com/Minsecrus/refactoring-ui-example"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.66.35-1.12.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.98c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.11 10.11 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
                clipRule="evenodd"
              />
            </svg>
            打开 GitHub 仓库
          </a>
        </div>
      </div>
    </div>
  );
}
