"use client";

import { useState } from "react";

/* ─── tipos ─────────────────────────────────────────── */
interface LinkItem {
  label: string;
  href: string;
}

interface MaterialCard {
  subject: string;
  professor: string;
  description: string;
  site?: LinkItem;
  book?: string;
  platforms?: LinkItem[];
  lessons?: LinkItem[];
}

/* ─── dados ──────────────────────────────────────────── */
const CHECKLIST = [
  "Separe o material e ligue o cronômetro regressivo de 1 hora.",
  "Ao terminar, anote o tempo no Google Agenda, Trello ou Notion — ex: Direito Constitucional (DC) · 1h.",
  "Se o tópico terminar logo, use o cronômetro extra e some ao total — ex: 1h05.",
  "Entre matérias diferentes, pause de 10 a 15 min sem celular nem redes sociais.",
  "No fim do dia, some tudo — ex: DC 1h05 + DA 1h15 = 2h20.",
  "Sessão ultrapassando 1h30? Pausa obrigatória de 10 min após a primeira hora.",
  "Começou com apenas 40 min de foco? Anote, pause e compense o restante depois.",
];

const DICAS = [
  {
    title: "Tempo de Sessão",
    body: "Não force duas horas seguidas sem pausa. 30 minutos de qualidade total valem mais do que se esgotar rápido.",
  },
  {
    title: "Estratégia de Prova",
    body: "Comece pelas matérias que domina para ganhar confiança. Travou em uma questão? Elimine o nitidamente errado e siga em frente — volte nelas no final.",
  },
  {
    title: "Armadilhas nas Alternativas",
    body: "Desconfie de termos absolutos como \"todo\" e \"nenhum\". Se várias parecerem certas, busque a \"menos errada\". Cuidado com alternativas que firam direitos humanos.",
  },
];

const MATERIAIS: MaterialCard[] = [
  {
    subject: "Gramática",
    professor: "Fernando Pestana",
    description:
      "Estilo divertido e focado em bancas. Referência para superar dificuldades com a língua portuguesa no contexto de concursos.",
    book: "A Gramática para Concursos Públicos",
    site: { label: "portuguescompestana.com.br", href: "https://www.portuguescompestana.com.br/" },
  },
  {
    subject: "Raciocínio Lógico",
    professor: "Thiago Pacífico",
    description:
      "Curso básico ideal para quem tem traumas com matemática. Aulas progressivas e linguagem acessível.",
    site: { label: "concurseiroprime.com.br", href: "https://concurseiroprime.com.br/" },
    lessons: [
      { label: "Aula 1", href: "https://www.youtube.com/watch?v=J_ZTkMS01KE" },
      { label: "Aula 2", href: "https://www.youtube.com/watch?v=HRmPxTfy7rg" },
      { label: "Aula 3", href: "https://www.youtube.com/watch?v=13EY3d_CHPc" },
      { label: "Aula 4", href: "https://www.youtube.com/watch?v=N7L_QiCyfQc" },
    ],
  },
  {
    subject: "Raciocínio Lógico",
    professor: "Brunno Lima",
    description:
      "Professor do Estratégia Concursos. Excelente para consolidar a base e avançar com segurança.",
    lessons: [
      { label: "Aula 1", href: "https://www.youtube.com/watch?v=4Dt7XshAaFE&list=PLpPxvH-OGrW_NBmT2WlQfTa6pNC5HTkUE" },
      { label: "Aula 2", href: "https://www.youtube.com/watch?v=5C-qDiqPjMM&list=PLpPxvH-OGrW_NBmT2WlQfTa6pNC5HTkUE&index=6" },
    ],
  },
  {
    subject: "Direito Administrativo",
    professor: "Rodrigo Motta",
    description:
      "Estilo dinâmico, didático e eficiente. Disponível em plataformas pagas e no YouTube.",
    platforms: [
      { label: "Projeto Imersão (PRA)", href: "https://praconcursosonline.com/curso/projeto-imersao-em-direito-administrativo-professor-rodrigo-motta/" },
      { label: "Polícia Federal (Grupo EMZO)", href: "https://grupoemzo.com.br/curso/direito-administrativo-para-policia-federal-prof:-rodrigo-motta/1161" },
    ],
    lessons: [
      { label: "Aula 1 — YouTube", href: "https://www.youtube.com/watch?v=fpMtz8xh3bo" },
      { label: "Aula 2 — YouTube", href: "https://www.youtube.com/watch?v=hQd1Yks3VZ0" },
    ],
  },
];

/* ─── componente principal ───────────────────────────── */
export default function PlaybookMariana() {
  const [checked, setChecked] = useState<boolean[]>(Array(CHECKLIST.length).fill(false));

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));

  const done = checked.filter(Boolean).length;

  return (
    <div className="min-h-screen bg-[#0c1118] text-[#dde4ef]" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── TOPO ── */}
      <header className="border-b border-[#1e2a38] px-6 py-4">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#667b96]">
            Mentoria de Concursos
          </span>
          <span className="rounded-full border border-[#00e896]/30 bg-[#00e896]/10 px-3 py-1 text-xs font-semibold text-[#00e896]">
            Sessão · 26/06/2026
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-6 pb-24 pt-12">

        {/* ── HERO ── */}
        <section className="mb-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#667b96]">
            Playbook Oficial
          </p>
          <h1
            className="mb-4 text-5xl font-black leading-[0.95] tracking-tight text-[#dde4ef] sm:text-6xl"
            style={{ textWrap: "balance" } as React.CSSProperties}
          >
            Mariana<br />
            <span className="text-[#00e896]">Santos.</span>
          </h1>
          <p className="max-w-sm text-[#667b96]">
            Seu guia personalizado de preparação para concursos públicos — organizado, prático e feito para a sua rotina.
          </p>
        </section>

        {/* ── 1. PERFIL ── */}
        <section className="mb-10">
          <SectionHeader index="01" title="Seu Perfil de Estudante" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { label: "Formação", value: "Produção Cultural · UFF" },
              { label: "Redação ENEM", value: "920 pontos" },
              { label: "Ponto forte", value: "Interpretação de textos" },
              { label: "A desenvolver", value: "Gramática" },
              { label: "Aprendizado", value: "Absorve informações rapidamente" },
              { label: "Rotina", value: "Trabalho por demanda, horário flexível" },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-xl border border-[#1e2a38] bg-[#141b25] p-4">
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#667b96]">{label}</p>
                <p className="font-semibold text-[#dde4ef]">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. MENSAGEM MOTIVACIONAL ── */}
        <section className="mb-10">
          <SectionHeader index="02" title="Percepção da Mentoria" />
          <blockquote className="border-l-2 border-[#00e896] py-1 pl-6">
            <p className="text-[15px] leading-relaxed text-[#b0bfcf]">
              Mariana, você tem boas chances de ser aprovada em um concurso. Só o fato de não só ser aprovada na UFF mas também conseguir concluir o curso em uma Universidade Federal mostra que você sabe como estudar e possui resiliência para aguentar o processo.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#b0bfcf]">
              Com o material correto, o conhecimento de organização e técnicas de estudo, e, claro, paciência e persistência, você será servidora pública{" "}
              <strong className="text-[#dde4ef]">entre dois e três anos</strong>. Os tribunais do sudeste estão, em sua maioria, com concursos vigentes realizados há pouco tempo — vejo isso como uma oportunidade de preparação sólida e tranquila.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[#b0bfcf]">
              Sua principal vantagem é ser jovem, não possuir filhos e ter horário flexível de trabalho, com períodos de{" "}
              <em className="not-italic font-semibold text-[#dde4ef]">ociosidade que podem ser aproveitados</em> para videoaulas, exercícios e revisões.
            </p>
          </blockquote>
        </section>

        {/* ── 3. CICLO DE ESTUDOS ── */}
        <section className="mb-10">
          <SectionHeader index="03" title="O Ciclo de Estudos" />
          <div className="rounded-xl border border-[#1e2a38] bg-[#141b25] p-6">
            <p className="mb-6 text-[15px] leading-relaxed text-[#b0bfcf]">
              O ciclo organiza as disciplinas em uma sequência pré-definida para que você não estude só o que gosta. Por não seguir um calendário semanal fixo, ele lida melhor com os imprevistos do dia a dia. Editais de Tribunais, Defensorias e Ministérios Públicos costumam ter muitas matérias em comum.
            </p>
            <p className="mb-6 text-sm text-[#667b96]">
              Ciclos montados com base nos cursos do Estratégia Concursos para{" "}
              <strong className="text-[#b0bfcf]">Analista Judiciário — Área Administrativa (AJAA)</strong> e{" "}
              <strong className="text-[#b0bfcf]">Técnico Judiciário — Área Administrativa (TJAA)</strong>.{" "}
              <span className="text-[#00e896]">Sugestão: inicie pelo ciclo TJAA nos próximos 3 meses</span> — é mais curto e aproveitável para seu momento atual.
            </p>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#667b96]">Ciclo AJAA</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ciclo_ajaa_trtmg.svg" alt="Ciclo de Estudos AJAA" className="my-2 mx-auto max-w-full rounded-lg" />
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#00e896]">Ciclo TJAA — Recomendado para iniciar</p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/ciclo_tjaa_trtmg.svg" alt="Ciclo de Estudos TJAA" className="my-2 mx-auto max-w-full rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. SESSÃO DE ESTUDO (checklist) ── */}
        <section className="mb-10">
          <SectionHeader index="04" title="Iniciando sua Sessão de Estudo" />
          <div className="rounded-xl border border-[#1e2a38] bg-[#141b25] p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#1e2a38]">
                <div
                  className="h-full rounded-full bg-[#00e896] transition-all duration-500"
                  style={{ width: `${(done / CHECKLIST.length) * 100}%` }}
                />
              </div>
              <span className="shrink-0 text-xs font-bold tabular-nums text-[#667b96]">
                {done}/{CHECKLIST.length}
              </span>
            </div>

            <ul className="space-y-3">
              {CHECKLIST.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-start gap-4 rounded-lg p-3 text-left transition hover:bg-[#1a2333]"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition ${
                        checked[i]
                          ? "border-[#00e896] bg-[#00e896]/20 text-[#00e896]"
                          : "border-[#2e3d52] bg-transparent"
                      }`}
                    >
                      {checked[i] && (
                        <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                          <path d="M1 4.5L4 7.5L10 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </span>
                    <span className={`text-sm leading-relaxed transition ${checked[i] ? "text-[#3d5266] line-through" : "text-[#b0bfcf]"}`}>
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 5. DICA DE OURO ── */}
        <section className="mb-10">
          <div className="relative overflow-hidden rounded-xl border border-[#f5c542]/30 bg-[#1a1506] p-7">
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20"
              style={{ background: "radial-gradient(circle, #f5c542 0%, transparent 70%)" }}
            />
            <div className="relative">
              <div className="mb-4 flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f5c542]/20 text-[#f5c542]">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a7 7 0 0 1 7 7c0 2.97-1.84 5.5-4.46 6.57L14 22H10l-.54-6.43C6.84 14.5 5 11.97 5 9a7 7 0 0 1 7-7z"/>
                  </svg>
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f5c542]">
                  Dica de Ouro
                </span>
              </div>
              <h3 className="mb-3 text-lg font-black text-[#f5e9a0]">
                O Combinado dos Cinco Minutos
              </h3>
              <p className="text-[15px] leading-relaxed text-[#c8b96a]">
                Quando chegar exausta do trabalho, combine consigo mesma:{" "}
                <em className="not-italic font-semibold text-[#f5e9a0]">"Vou sentar, abrir o livro, ligar o cronômetro e estudar apenas CINCO MINUTOS."</em>
              </p>
              <p className="mt-3 text-sm text-[#a08d4a]">
                É uma estratégia para quebrar a resistência inicial e a inércia do cérebro diante de tarefas complexas. O cérebro engata no fluxo — e você acabará estudando bem mais do que cinco minutos.
              </p>
            </div>
          </div>
        </section>

        {/* ── 6. DICAS FINAIS ── */}
        <section className="mb-10">
          <SectionHeader index="05" title="Ritmo e Estratégia de Prova" />
          <div className="space-y-3">
            {DICAS.map(({ title, body }) => (
              <div key={title} className="rounded-xl border border-[#1e2a38] bg-[#141b25] p-5">
                <h3 className="mb-2 font-bold text-[#dde4ef]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#8a95a8]">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 7. MATERIAIS EXTRA ── */}
        <section className="mb-16">
          <SectionHeader index="06" title="Materiais Indicados" />
          <div className="space-y-4">
            {MATERIAIS.map((mat) => (
              <div key={`${mat.subject}-${mat.professor}`} className="rounded-xl border border-[#1e2a38] bg-[#141b25] p-6">
                <div className="mb-3 flex flex-wrap items-start gap-2">
                  <span className="rounded-full border border-[#00e896]/30 bg-[#00e896]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#00e896]">
                    {mat.subject}
                  </span>
                  <span className="rounded-full border border-[#1e2a38] bg-[#0c1118] px-2.5 py-0.5 text-[11px] font-semibold text-[#667b96]">
                    Prof. {mat.professor}
                  </span>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-[#8a95a8]">{mat.description}</p>

                {mat.book && (
                  <p className="mb-3 text-xs text-[#667b96]">
                    <span className="font-semibold text-[#b0bfcf]">Livro:</span> {mat.book}
                  </p>
                )}

                <div className="flex flex-wrap gap-2">
                  {mat.site && (
                    <LinkButton href={mat.site.href} label={mat.site.label} variant="site" />
                  )}
                  {mat.platforms?.map((p) => (
                    <LinkButton key={p.href} href={p.href} label={p.label} variant="platform" />
                  ))}
                  {mat.lessons?.map((l) => (
                    <LinkButton key={l.href} href={l.href} label={l.label} variant="lesson" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ENCERRAMENTO ── */}
        <footer className="border-t border-[#1e2a38] pt-12 text-center">
          <p className="mb-2 text-2xl font-black text-[#dde4ef]">
            Boa sorte e Bons estudos!
          </p>
          <p className="text-base font-semibold text-[#00e896]">
            E lembre-se de que você já passou em um concurso.
          </p>
          <p className="mt-6 text-xs text-[#3d5266]">
            Playbook gerado em 26/06/2026 · Mentoria de Concursos
          </p>
        </footer>

      </main>
    </div>
  );
}

/* ─── subcomponentes ─────────────────────────────────── */
function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="text-[11px] font-black tabular-nums text-[#00e896]/60">{index}</span>
      <div className="h-px flex-1 bg-[#1e2a38]" />
      <span className="text-xs font-bold uppercase tracking-widest text-[#667b96]">{title}</span>
    </div>
  );
}

function LinkButton({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "site" | "platform" | "lesson";
}) {
  const styles = {
    site: "border-[#1e2a38] bg-[#0c1118] text-[#b0bfcf] hover:border-[#00e896]/40 hover:text-[#00e896]",
    platform: "border-[#1e2a38] bg-[#0c1118] text-[#b0bfcf] hover:border-[#00e896]/40 hover:text-[#00e896]",
    lesson: "border-[#1a2e3f] bg-[#0d1e2e] text-[#5b9dc4] hover:border-[#5b9dc4]/60 hover:text-[#8dc8e8]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${styles[variant]}`}
    >
      {variant === "lesson" && (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="5,3 19,12 5,21" />
        </svg>
      )}
      {(variant === "site" || variant === "platform") && (
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
          <polyline points="15,3 21,3 21,9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      )}
      {label}
    </a>
  );
}
