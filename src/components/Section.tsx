import { useState, type ReactNode } from "react";

export function Section({
  id,
  number,
  title,
  subtitle,
  children,
  compact = false,
}: {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${compact ? "pb-16 pt-6 sm:pb-20 sm:pt-8" : "py-20 sm:py-24"}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white shadow-sm shadow-indigo-200">
              {number}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-indigo-200 to-transparent" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-slate-500">{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export function BeforeAfter({
  children,
  caption,
}: {
  children: (improved: boolean) => ReactNode;
  caption?: string;
}) {
  const [improved, setImproved] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/60 px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-slate-200" />
          <span className="h-3 w-3 rounded-full bg-slate-200" />
          <span className="h-3 w-3 rounded-full bg-slate-200" />
        </div>
        <div className="flex rounded-lg bg-slate-200/70 p-0.5">
          <button
            onClick={() => setImproved(false)}
            className={`rounded-md px-3.5 py-1 text-xs font-semibold transition-all ${
              !improved
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            优化前
          </button>
          <button
            onClick={() => setImproved(true)}
            className={`rounded-md px-3.5 py-1 text-xs font-semibold transition-all ${
              improved
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            优化后 ✨
          </button>
        </div>
      </div>
      <div className="bg-white p-6 sm:p-10">
        <div key={String(improved)} className="animate-fade-up">
          {children(improved)}
        </div>
      </div>
      {caption && (
        <div className="border-t border-slate-100 px-5 py-3 text-xs text-slate-400">
          {caption}
        </div>
      )}
    </div>
  );
}

export function TipList({ tips }: { tips: { title: string; desc: string }[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {tips.map((t) => (
        <li
          key={t.title}
          className="rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm"
        >
          <div className="mb-1.5 flex items-center gap-2">
            <svg
              className="h-4 w-4 shrink-0 text-indigo-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold text-slate-900">{t.title}</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-500">{t.desc}</p>
        </li>
      ))}
    </ul>
  );
}
