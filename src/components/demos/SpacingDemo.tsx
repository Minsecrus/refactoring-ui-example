const fields = [
  { label: "用户名", placeholder: "请输入用户名", type: "text" },
  { label: "电子邮箱", placeholder: "you@example.com", type: "email" },
  { label: "密码", placeholder: "至少 8 位字符", type: "password" },
];

export default function SpacingDemo({ improved }: { improved: boolean }) {
  return (
    <div
      className={`mx-auto rounded-2xl border border-slate-200 bg-white shadow-sm ${
        improved ? "max-w-sm p-8 sm:p-10" : "max-w-xl p-4"
      }`}
    >
      <h3 className="text-xl font-bold text-slate-900">创建账户</h3>
      <p className={`text-sm text-slate-500 ${improved ? "mt-2" : "mt-1"}`}>
        填写以下信息即可开始使用
      </p>

      <div className={improved ? "mt-8 space-y-5" : "mt-4 space-y-2"}>
        {fields.map((field) => (
          <div key={field.label}>
            <label
              className={`block text-sm font-medium text-slate-700 ${
                improved ? "mb-1.5" : "mb-0.5"
              }`}
            >
              {field.label}
            </label>
            <input
              type={field.type}
              className={`w-full rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100 ${
                improved ? "px-3.5 py-2.5" : "px-3 py-2"
              }`}
              placeholder={field.placeholder}
            />
          </div>
        ))}
      </div>

      <button
        className={`w-full rounded-lg bg-indigo-600 text-sm font-semibold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 ${
          improved ? "mt-8 py-3" : "mt-4 py-2.5"
        }`}
      >
        创建账户
      </button>
      <p className={`text-center text-xs text-slate-400 ${improved ? "mt-4" : "mt-3"}`}>
        已有账户?<span className="font-medium text-indigo-600">直接登录</span>
      </p>
    </div>
  );
}
