const messages = [
  {
    initial: "陈",
    color: "bg-rose-100 text-rose-600",
    name: "陈雨菲",
    text: "新版首页的设计稿已经更新，麻烦看一下交互细节~",
    time: "刚刚",
    unread: true,
  },
  {
    initial: "李",
    color: "bg-amber-100 text-amber-600",
    name: "李天宇",
    text: "周五的评审会改到下午三点了",
    time: "26 分钟前",
    unread: true,
  },
  {
    initial: "张",
    color: "bg-sky-100 text-sky-600",
    name: "张梦洁",
    text: "配色方案我觉得第二版更好，层级更清晰",
    time: "2 小时前",
    unread: false,
  },
];

export default function FinishDemo({ improved }: { improved: boolean }) {
  return (
    <div
      className={`mx-auto max-w-lg overflow-hidden rounded-2xl bg-white ${
        improved
          ? "shadow-lg shadow-slate-200/60 ring-1 ring-slate-100"
          : "border border-slate-200 shadow-sm"
      }`}
    >
      <div
        className={
          improved
            ? "h-1.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"
            : "h-1.5 border-b border-slate-100 bg-white"
        }
      />
      <div className="flex items-center justify-between px-6 pb-2 pt-5">
        <h3 className="text-base font-bold text-slate-900">消息</h3>
        <span
          className={`text-xs font-semibold ${
            improved
              ? "rounded-full bg-indigo-50 px-2.5 py-0.5 text-indigo-600"
              : "text-slate-500"
          }`}
        >
          2 条未读
        </span>
      </div>
      <ul className={improved ? "divide-y divide-slate-50" : "divide-y divide-slate-100"}>
        {messages.map((m) => (
          <li
            key={m.name}
            className="flex items-start gap-3.5 px-6 py-4 transition hover:bg-slate-50/70"
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center text-sm font-semibold ${
                improved
                  ? `rounded-full ${m.color}`
                  : "rounded-lg bg-slate-100 text-slate-500"
              }`}
            >
              {m.initial}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-sm font-semibold text-slate-900">{m.name}</p>
                <p className="shrink-0 text-xs text-slate-400">{m.time}</p>
              </div>
              <p
                className={`mt-0.5 truncate text-sm ${
                  m.unread ? "font-medium text-slate-700" : "text-slate-400"
                }`}
              >
                {m.text}
              </p>
            </div>
            <span
              className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                improved && m.unread ? "bg-indigo-500" : "bg-transparent"
              }`}
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center gap-1 border-t border-slate-50 px-6 py-6 text-center">
        {improved && <span className="text-2xl">🎉</span>}
        <p className="text-sm font-medium text-slate-700">全部处理完啦</p>
        <p className="text-xs text-slate-400">空状态也是设计的机会，而不是一句冷冰冰的提示</p>
      </div>
    </div>
  );
}
