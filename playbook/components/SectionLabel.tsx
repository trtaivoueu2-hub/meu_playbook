interface SectionLabelProps {
  chapter: string;
  title: string;
  accent?: string; // tailwind text color class
}

export default function SectionLabel({ chapter, title, accent = "text-zinc-400" }: SectionLabelProps) {
  return (
    <div className="mb-5">
      <p className={`mb-4 text-xs font-bold uppercase tracking-[0.22em] ${accent}`}>
        {chapter} / {title}
      </p>
      <div className="h-px w-10 bg-zinc-900" />
    </div>
  );
}
