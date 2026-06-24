interface CalloutProps {
  children: React.ReactNode;
  type?: "tip" | "warning" | "key";
}

const config = {
  tip: { label: "Dica", bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-900", dot: "bg-blue-500" },
  warning: { label: "Atenção", bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-900", dot: "bg-amber-500" },
  key: { label: "Conceito-chave", bg: "bg-zinc-50", border: "border-zinc-200", text: "text-zinc-900", dot: "bg-zinc-900" },
};

export default function Callout({ children, type = "key" }: CalloutProps) {
  const c = config[type];
  return (
    <div className={`my-8 rounded-xl border ${c.border} ${c.bg} px-6 py-5`}>
      <div className="mb-2 flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
        <span className={`text-xs font-bold uppercase tracking-widest ${c.text}`}>{c.label}</span>
      </div>
      <div className={`text-sm leading-relaxed ${c.text}`}>{children}</div>
    </div>
  );
}
