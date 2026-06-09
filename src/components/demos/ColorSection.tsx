const palettes: { name: string; note: string; colors: { shade: string; cls: string }[] }[] =
  [
    {
      name: "灰色 Slate",
      note: "界面的骨架：文字、背景、边框，用量最大",
      colors: [
        { shade: "50", cls: "bg-slate-50" },
        { shade: "100", cls: "bg-slate-100" },
        { shade: "200", cls: "bg-slate-200" },
        { shade: "300", cls: "bg-slate-300" },
        { shade: "400", cls: "bg-slate-400" },
        { shade: "500", cls: "bg-slate-500" },
        { shade: "600", cls: "bg-slate-600" },
        { shade: "700", cls: "bg-slate-700" },
        { shade: "800", cls: "bg-slate-800" },
        { shade: "900", cls: "bg-slate-900" },
      ],
    },
    {
      name: "主色 Indigo",
      note: "品牌色：主按钮、链接、强调元素",
      colors: [
        { shade: "50", cls: "bg-indigo-50" },
        { shade: "100", cls: "bg-indigo-100" },
        { shade: "200", cls: "bg-indigo-200" },
        { shade: "300", cls: "bg-indigo-300" },
        { shade: "400", cls: "bg-indigo-400" },
        { shade: "500", cls: "bg-indigo-500" },
        { shade: "600", cls: "bg-indigo-600" },
        { shade: "700", cls: "bg-indigo-700" },
        { shade: "800", cls: "bg-indigo-800" },
        { shade: "900", cls: "bg-indigo-900" },
      ],
    },
    {
      name: "成功 Green",
      note: "积极状态：成功提示、增长趋势",
      colors: [
        { shade: "50", cls: "bg-emerald-50" },
        { shade: "100", cls: "bg-emerald-100" },
        { shade: "200", cls: "bg-emerald-200" },
        { shade: "300", cls: "bg-emerald-300" },
        { shade: "400", cls: "bg-emerald-400" },
        { shade: "500", cls: "bg-emerald-500" },
        { shade: "600", cls: "bg-emerald-600" },
        { shade: "700", cls: "bg-emerald-700" },
        { shade: "800", cls: "bg-emerald-800" },
        { shade: "900", cls: "bg-emerald-900" },
      ],
    },
    {
      name: "危险 Red",
      note: "警示状态：错误、删除等破坏性操作",
      colors: [
        { shade: "50", cls: "bg-red-50" },
        { shade: "100", cls: "bg-red-100" },
        { shade: "200", cls: "bg-red-200" },
        { shade: "300", cls: "bg-red-300" },
        { shade: "400", cls: "bg-red-400" },
        { shade: "500", cls: "bg-red-500" },
        { shade: "600", cls: "bg-red-600" },
        { shade: "700", cls: "bg-red-700" },
        { shade: "800", cls: "bg-red-800" },
        { shade: "900", cls: "bg-red-900" },
      ],
    },
  ];

export default function ColorSection() {
  return (
    <div className="space-y-8">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="space-y-7">
          {palettes.map((p) => (
            <div key={p.name}>
              <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-sm font-semibold text-slate-900">{p.name}</span>
                <span className="text-xs text-slate-400">{p.note}</span>
              </div>
              <div className="grid grid-cols-10 overflow-hidden rounded-lg ring-1 ring-slate-200/60">
                {p.colors.map((c) => (
                  <div key={c.shade} className={`${c.cls} group relative h-12`}>
                    <span
                      className={`absolute inset-x-0 bottom-1 text-center text-[10px] font-medium ${
                        Number(c.shade) >= 500 ? "text-white/80" : "text-slate-500/80"
                      }`}
                    >
                      {c.shade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-slate-400">
            优化前
          </p>
          <div className="rounded-xl bg-indigo-600 p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-300">
              数据概览
            </p>
            <p className="text-lg font-semibold text-slate-300">本月新增用户</p>
            <p className="mt-1 text-3xl font-bold text-slate-400">2,847</p>
            <p className="mt-3 text-sm font-medium text-slate-300">较上月 +12%</p>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-emerald-500">
            优化后
          </p>
          <div className="rounded-xl bg-indigo-600 p-6">
            <p className="text-xs font-medium uppercase tracking-wide text-indigo-200">
              数据概览
            </p>
            <p className="text-lg font-semibold text-indigo-200">本月新增用户</p>
            <p className="mt-1 text-3xl font-bold text-white">2,847</p>
            <p className="mt-3 text-sm font-medium text-indigo-100">较上月 +12%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
