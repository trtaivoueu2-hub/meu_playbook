"use client";

import { useEffect, useRef, useState } from "react";

const CHAPTERS = [
  { id: "capitulo-1", label: "01 O Problema", dot: "bg-blue-500" },
  { id: "capitulo-2", label: "02 Os Pilares", dot: "bg-amber-400" },
  { id: "capitulo-3", label: "03 A Semana", dot: "bg-emerald-500" },
  { id: "capitulo-4", label: "04 Armadilhas", dot: "bg-rose-500" },
  { id: "encerramento", label: "Conclusão", dot: "bg-zinc-400" },
];

export default function ProgressHeader() {
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeChapter, setActiveChapter] = useState<string | null>(null);
  const [showChapterNav, setShowChapterNav] = useState(false);
  const [readingSeconds, setReadingSeconds] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* reading timer */
  useEffect(() => {
    timerRef.current = setInterval(() => setReadingSeconds((s) => s + 1), 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  /* scroll tracking */
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
      setScrolled(scrollTop > 24);

      /* show chapter nav after hero (~100vh) */
      setShowChapterNav(scrollTop > window.innerHeight * 0.8);

      /* active chapter detection */
      let current: string | null = null;
      for (const ch of CHAPTERS) {
        const el = document.getElementById(ch.id);
        if (el && el.getBoundingClientRect().top <= 120) current = ch.id;
      }
      setActiveChapter(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const formatTime = (s: number) => {
    if (s < 60) return `${s}s`;
    const m = Math.floor(s / 60);
    const r = s % 60;
    return r > 0 ? `${m}m ${r}s` : `${m}m`;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_0_0_#e4e4e7]" : ""}`}>
      {/* progress bar — very top */}
      <div className="h-0.5 w-full bg-zinc-100">
        <div className="h-full bg-zinc-900 transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>

      {/* main bar */}
      <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <span className="text-xs font-black uppercase tracking-[0.15em] text-zinc-900">
            O Método Foco
          </span>
          {scrolled && (
            <span className="hidden text-xs text-zinc-400 sm:block">
              <span className="font-semibold text-zinc-500">Estimado:</span>{" "}
              <span className="font-semibold text-zinc-900">12 min</span>
              <span className="mx-2 text-zinc-200">·</span>
              <span className="font-semibold text-zinc-500">Lendo há</span>{" "}
              <span className="font-semibold text-zinc-900">{formatTime(readingSeconds)}</span>
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tabular-nums text-zinc-400">{progress}%</span>
          <div className="h-1 w-24 overflow-hidden rounded-full bg-zinc-100 sm:w-36">
            <div className="h-full rounded-full bg-zinc-900 transition-all duration-150" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>

      {/* chapter nav */}
      <div
        className={`border-t border-zinc-100 transition-all duration-300 overflow-hidden ${
          showChapterNav ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex h-11 max-w-4xl items-center gap-1 overflow-x-auto px-6">
          <span className="mr-3 shrink-0 text-[10px] font-bold uppercase tracking-widest text-zinc-300">
            Sumário
          </span>
          {CHAPTERS.map((ch) => (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition ${
                activeChapter === ch.id
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-400 hover:text-zinc-700"
              }`}
            >
              <span className={`h-1.5 w-1.5 rounded-full ${ch.dot}`} />
              {ch.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
