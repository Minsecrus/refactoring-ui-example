const details = [
  { label: "姓名", value: "王晓琳", tone: "name" },
  { label: "职位", value: "高级产品设计师", tone: "role" },
  { label: "部门", value: "用户体验中心", tone: "meta" },
  { label: "邮箱", value: "xiaolin.wang@example.com", tone: "muted" },
  { label: "入职时间", value: "2021 年 3 月 15 日", tone: "muted" },
  { label: "完成项目", value: "42 个", tone: "metric" },
];

export default function HierarchyDemo({ improved }: { improved: boolean }) {
  if (!improved) {
    return (
      <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 bg-slate-50 px-5 py-4">
          <p className="text-sm font-semibold text-slate-700">成员信息</p>
        </div>
        <div className="space-y-3 p-5">
          {details.map(({ label, value }) => (
            <p key={label} className="text-sm font-semibold text-slate-700">
              {label}: {value}
            </p>
          ))}
        </div>
        <div className="flex gap-2 border-t border-slate-100 px-5 py-4">
          <button className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            发送消息
          </button>
          <button className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            移除成员
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-slate-50 px-5 py-4">
        <p className="text-sm font-semibold text-slate-700">成员信息</p>
      </div>
      <div className="space-y-2 p-5">
        {details.map(({ label, value, tone }) => (
          <p
            key={label}
            className={
              tone === "name"
                ? "text-xl font-bold tracking-tight text-slate-900"
                : tone === "role"
                  ? "text-sm font-semibold text-indigo-600"
                  : tone === "metric"
                    ? "text-sm font-semibold text-slate-900"
                    : tone === "muted"
                      ? "text-sm text-slate-400"
                      : "text-sm font-medium text-slate-500"
            }
          >
            {value}
          </p>
        ))}
      </div>
      <div className="flex items-center gap-4 border-t border-slate-100 px-5 py-4">
        <button className="rounded-lg bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700">
          发送消息
        </button>
        <button className="text-sm font-medium text-slate-400 transition hover:text-red-500">
          移除成员
        </button>
      </div>
    </div>
  );
}
