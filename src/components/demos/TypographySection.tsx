const scale = [
  { px: "12px", cls: "text-xs", use: "辅助说明、标签" },
  { px: "14px", cls: "text-sm", use: "次要正文、表单" },
  { px: "16px", cls: "text-base", use: "正文" },
  { px: "18px", cls: "text-lg", use: "强调正文、小标题" },
  { px: "24px", cls: "text-2xl", use: "卡片标题" },
  { px: "30px", cls: "text-3xl", use: "页面标题" },
  { px: "48px", cls: "text-5xl", use: "营销大标题" },
];

const articleParagraphs = [
  "阅读长文本时，过长的行宽会让眼睛在换行时难以找到下一行的起点，而过短的行宽则会频繁打断阅读节奏。理想的行宽大约是每行 45–75 个字符（中文约二三十个字）。",
  "行高也不是固定值：字号越小、行宽越长，需要的行高越大；大标题则应使用更紧凑的行高。长段落务必左对齐，居中只适合短句标题。",
];

export default function TypographySection({ improved }: { improved: boolean }) {
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
        <p className="mb-5 text-xs font-semibold uppercase tracking-wide text-slate-400">
          预设字号阶梯(Type Scale)
        </p>
        <div className="space-y-4">
          {scale.map((s) => (
            <div key={s.px} className="flex items-baseline gap-4">
              <span className="w-12 shrink-0 text-right font-mono text-xs text-slate-400">
                {s.px}
              </span>
              <span
                className={`${s.cls} truncate font-semibold leading-tight text-slate-900`}
              >
                设计无需天赋
              </span>
              <span className="ml-auto hidden shrink-0 text-xs text-slate-400 sm:block">
                {s.use}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-6 border-t border-slate-100 pt-4 text-xs leading-relaxed text-slate-400">
          提前定义一套有限的字号阶梯，设计时只从中挑选，避免出现 17px、19px
          这类「凭感觉」的尺寸。
        </p>
      </div>

      <div className="lg:col-span-3">
        <article className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            排印基础
          </p>
          <h3
            className={`mt-2 font-bold text-slate-900 ${
              improved
                ? "text-2xl leading-tight tracking-tight"
                : "text-center text-3xl leading-tight underline decoration-slate-300 underline-offset-4"
            }`}
          >
            为什么行宽很重要
          </h3>
          <div
            className={`mt-5 space-y-4 text-slate-600 ${
              improved
                ? "max-w-prose text-[15px] leading-7"
                : "max-w-none text-justify text-base leading-5"
            }`}
          >
            {articleParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
