interface StepProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export default function Step({ number, title, children }: StepProps) {
  return (
    <div className="relative pl-14">
      <div className="absolute left-0 top-0 flex h-full flex-col items-center">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-zinc-900 bg-white text-[11px] font-black tabular-nums text-zinc-900">
          {String(number).padStart(2, "0")}
        </div>
        <div className="mt-3 w-px flex-1 bg-zinc-100" />
      </div>
      <div className="pb-14">
        <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-zinc-900">{title}</h3>
        <div className="space-y-3 text-base leading-relaxed text-zinc-500">{children}</div>
      </div>
    </div>
  );
}
