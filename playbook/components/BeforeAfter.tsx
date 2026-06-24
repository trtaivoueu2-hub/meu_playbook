interface Item {
  label: string;
  items: string[];
}

interface BeforeAfterProps {
  before: Item;
  after: Item;
}

export default function BeforeAfter({ before, after }: BeforeAfterProps) {
  return (
    <div className="my-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2">
      {/* Before */}
      <div className="bg-white p-6 sm:p-8">
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            {before.label}
          </span>
        </div>
        <ul className="space-y-3">
          {before.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
              <span className="mt-0.5 text-red-400 shrink-0">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* After */}
      <div className="bg-zinc-950 p-6 sm:p-8">
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
            {after.label}
          </span>
        </div>
        <ul className="space-y-3">
          {after.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
              <span className="mt-0.5 text-emerald-400 shrink-0">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
