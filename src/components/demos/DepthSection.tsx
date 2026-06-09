const elevations = [
  { name: "sm", cls: "shadow-sm", use: "按钮 / 输入框" },
  { name: "md", cls: "shadow-md", use: "卡片" },
  { name: "lg", cls: "shadow-lg", use: "下拉菜单" },
  { name: "xl", cls: "shadow-xl", use: "弹出层" },
  { name: "2xl", cls: "shadow-2xl", use: "模态对话框" },
];

export default function DepthSection({ improved }: { improved: boolean }) {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-slate-400">
          定义一套高度系统(Elevation)
        </p>
        <div className="grid grid-cols-5 gap-3 sm:gap-4">
          {elevations.map((e) => (
            <div key={e.name} className="text-center">
              <div
                className={`mx-auto flex h-16 w-full items-center justify-center rounded-xl bg-white ${e.cls}`}
              >
                <span className="font-mono text-[10px] font-semibold text-slate-400">
                  {e.name}
                </span>
              </div>
              <p className="mt-2 text-[10px] leading-tight text-slate-400">{e.use}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 border-t border-slate-200 pt-4 text-xs leading-relaxed text-slate-400">
          元素离用户越「近」，阴影越大越柔和。像字号阶梯一样，提前定义 5
          档阴影，用层级表达远近，而不是随手调数值。
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-slate-400">
          账户卡片
        </p>

        <div className="space-y-5">
          <div
            className={`rounded-2xl bg-white p-6 ${
              improved
                ? "shadow-lg shadow-slate-200/70 ring-1 ring-slate-900/5"
                : "border border-slate-300"
            }`}
          >
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
              账户余额
            </p>
            <p className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
              ¥ 12,650.00
            </p>
            <p
              className={`mt-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                improved
                  ? "bg-emerald-50 text-emerald-600 shadow-sm shadow-emerald-100"
                  : "bg-emerald-50 text-emerald-600"
              }`}
            >
              <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                  clipRule="evenodd"
                />
              </svg>
              较上月 +12%
            </p>
          </div>
          <button
            className={`w-full rounded-xl py-3 text-sm font-semibold transition ${
              improved
                ? "bg-gradient-to-b from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-300/50 ring-1 ring-indigo-700/30 hover:from-indigo-600 hover:to-indigo-700"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}
          >
            立即转账
          </button>
          <p className="text-xs leading-relaxed text-slate-400">
            余额、增长状态和操作按钮组成同一张账户卡片。
          </p>
        </div>
      </div>
    </div>
  );
}
