import ProgressHeader from "@/components/ProgressHeader";
import Step from "@/components/Step";
import Quote from "@/components/Quote";
import BeforeAfter from "@/components/BeforeAfter";
import SectionLabel from "@/components/SectionLabel";
import Callout from "@/components/Callout";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  return (
    <>
      <ProgressHeader />

      {/* ── HERO (fullscreen) ── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
        {/* top label */}
        <p className="mb-8 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300">
          Playbook Premium · Edição 01 · 2025
        </p>

        {/* title */}
        <h1 className="mb-6 max-w-2xl text-[clamp(3.5rem,12vw,7rem)] font-black uppercase leading-[0.92] tracking-[-0.04em] text-zinc-900">
          O Método<br />
          <span className="text-zinc-300">Foco.</span>
        </h1>

        {/* separator */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px w-16 bg-zinc-200" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
            <strong className="text-zinc-600">Sistematização</strong> é a única saída.
          </p>
          <div className="h-px w-16 bg-zinc-200" />
        </div>

        {/* meta */}
        <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
          Como transformar qualquer objetivo de longo prazo em um sistema diário
          que você realmente segue — sem motivação, sem força de vontade.
        </p>

        {/* author */}
        <div className="mt-10 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-zinc-900" />
          <div className="text-left">
            <p className="text-xs font-bold text-zinc-700">Rafael Duarte</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-400">12 min de leitura</p>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ── CONTENT ── */}
      <main className="mx-auto w-full max-w-2xl px-6 pb-40 pt-24 font-[family-name:var(--font-inter)]">

        {/* ── CAPÍTULO 1 ── */}
        <section id="capitulo-1" className="mb-28 scroll-mt-28">
          <SectionLabel chapter="01" title="O Problema" accent="text-blue-500" />

          <h2 className="mb-8 text-[clamp(2.4rem,6vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight text-zinc-900">
            Você não tem<br />problema de foco.<br />
            <span className="text-zinc-300">Tem problema<br />de sistema.</span>
          </h2>

          <p className="mb-5 text-base leading-relaxed text-zinc-500">
            A maioria das pessoas acredita que precisa de mais motivação. Que se apenas
            se sentissem mais animadas, conseguiriam estudar, treinar ou trabalhar com
            consistência. Isso é um <strong className="text-zinc-900">erro de diagnóstico</strong>.
          </p>
          <p className="mb-5 text-base leading-relaxed text-zinc-500">
            Motivação é um sentimento. Sentimentos são voláteis. Um sistema é uma
            estrutura. Estruturas são estáveis. O que distingue quem entrega resultados
            consistentes de quem não entrega não é talento nem disposição — é
            arquitetura.
          </p>

          <Quote
            text="Você não sobe ao nível das suas metas. Você cai ao nível dos seus sistemas."
            author="James Clear"
            role="Autor de Hábitos Atômicos"
          />

          <p className="mb-10 text-base leading-relaxed text-zinc-500">
            Este playbook existe para ajudá-lo a construir essa arquitetura. Não é um
            conjunto de dicas. É uma metodologia — testada, sequenciada e aplicável
            esta semana.
          </p>

          <BeforeAfter
            before={{
              label: "Antes do método",
              items: [
                "Estuda quando se sente motivado",
                "Sessões longas e sem estrutura",
                "Revisa o mesmo conteúdo sem critério",
                "Desiste após 2 semanas de inconsistência",
              ],
            }}
            after={{
              label: "Com o método",
              items: [
                "Estuda no horário fixo, independente do humor",
                "Sessões curtas com objetivo claro",
                "Revisão espaçada automática por prioridade",
                "Consistência de 90 dias sem esforço extra",
              ],
            }}
          />
        </section>

        {/* ── CAPÍTULO 2 ── */}
        <section id="capitulo-2" className="mb-28 scroll-mt-28">
          <SectionLabel chapter="02" title="Os Três Pilares" accent="text-amber-500" />

          <h2 className="mb-4 text-[clamp(2.4rem,6vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight text-zinc-900">
            A estrutura por trás<br />
            <span className="text-zinc-300">de cada<br />alta performance.</span>
          </h2>

          <p className="mb-12 text-base leading-relaxed text-zinc-500">
            Todo método sustentável se apoia em três fundações. Falta qualquer uma e
            o sistema desmorona. Veja como aplicar cada pilar na prática.
          </p>

          <Step number={1} title="Sistematização: metas viram tarefas">
            <p>
              Uma meta como "aprender inglês" não produz ação. Uma tarefa como
              "ouvir 20 minutos de podcast em inglês às 7h" produz. O primeiro
              passo do método é transformar cada objetivo em tarefas mensuráveis
              com tempo e contexto definidos.
            </p>
            <p>
              Use o critério <strong className="text-zinc-900">2 minutos ou agende</strong>:
              se a tarefa leva menos de 2 minutos, faça agora. Se não, coloque em um
              horário fixo. Nunca deixe no "vou fazer quando der".
            </p>
          </Step>

          <Step number={2} title="Foco: sessões curtas com intenção total">
            <p>
              Sessões de 90 minutos sem pausa não são produtivas — são teatro de
              produtividade. O cérebro humano sustenta atenção profunda em blocos de
              25–52 minutos. Depois disso, a qualidade cai mesmo que você continue sentado.
            </p>
            <p>
              O Método Foco usa blocos de <strong className="text-zinc-900">45 minutos</strong>{" "}
              com 10 minutos de recuperação ativa. Três blocos bem feitos superam seis
              horas mal feitas.
            </p>
          </Step>

          <Step number={3} title="Memória: revisão espaçada, não releitura">
            <p>
              Reler o mesmo material é reconfortante, mas ineficaz. O cérebro retém o
              que testa. A revisão espaçada — revisar um conteúdo 1 dia, 7 dias e 30
              dias após o primeiro contato — aumenta a retenção em até 80%.
            </p>
            <p>
              Ao terminar cada sessão, agende automaticamente três revisões futuras.
              Esse passo de 2 minutos multiplica o valor de cada hora investida.
            </p>
          </Step>

          <Callout type="key">
            Sistematização garante que você <strong>começa</strong>. Foco garante que
            você <strong>entrega</strong>. Memória garante que você <strong>retém</strong>.
            Os três pilares são interdependentes — implemente em ordem.
          </Callout>
        </section>

        {/* ── CAPÍTULO 3 ── */}
        <section id="capitulo-3" className="mb-28 scroll-mt-28">
          <SectionLabel chapter="03" title="A Semana Modelo" accent="text-emerald-600" />

          <h2 className="mb-8 text-[clamp(2.4rem,6vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight text-zinc-900">
            Como montar<br />
            <span className="text-zinc-300">sua primeira<br />semana.</span>
          </h2>

          <p className="mb-10 text-base leading-relaxed text-zinc-500">
            Teoria sem execução é ficção científica. Aqui está o modelo de semana que
            recomendamos para quem está iniciando o método. Adapte os horários, mas
            não a estrutura.
          </p>

          <div className="mb-10 overflow-hidden rounded-xl border border-zinc-200">
            {[
              { day: "Segunda", blocks: "2 blocos", note: "Revisão do material da semana anterior" },
              { day: "Terça", blocks: "3 blocos", note: "Conteúdo novo — tema principal" },
              { day: "Quarta", blocks: "2 blocos", note: "Exercícios práticos / questões" },
              { day: "Quinta", blocks: "3 blocos", note: "Conteúdo novo — tema secundário" },
              { day: "Sexta", blocks: "2 blocos", note: "Revisão espaçada das revisões agendadas" },
              { day: "Sábado", blocks: "1 bloco", note: "Organização, revisão leve, planejamento" },
              { day: "Domingo", blocks: "—", note: "Recuperação cognitiva. Sem tela de estudo." },
            ].map((row, i, arr) => (
              <div
                key={i}
                className={`flex items-center justify-between gap-4 px-5 py-4 text-sm ${
                  i < arr.length - 1 ? "border-b border-zinc-100" : ""
                } ${row.day === "Domingo" ? "bg-zinc-50" : "bg-white"}`}
              >
                <span className="w-20 shrink-0 font-bold text-zinc-900">{row.day}</span>
                <span className={`w-20 shrink-0 font-semibold tabular-nums ${row.day === "Domingo" ? "text-zinc-300" : "text-zinc-900"}`}>
                  {row.blocks}
                </span>
                <span className="text-right text-zinc-400">{row.note}</span>
              </div>
            ))}
          </div>

          <Callout type="tip">
            Comece com apenas <strong>2 blocos de foco por dia</strong> na primeira semana.
            14 blocos de 45 minutos bem-feitos equivalem a mais de 10 horas de estudo de
            alta qualidade — provavelmente mais do que você faz hoje.
          </Callout>

          <Quote
            text="A consistência de 1% ao dia resulta em 37× melhora em um ano. A inconsistência de 1% ao dia resulta em quase zero."
            author="James Clear"
          />
        </section>

        {/* ── CAPÍTULO 4 ── */}
        <section id="capitulo-4" className="mb-28 scroll-mt-28">
          <SectionLabel chapter="04" title="Armadilhas Comuns" accent="text-rose-500" />

          <h2 className="mb-8 text-[clamp(2.4rem,6vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight text-zinc-900">
            O que vai te<br />fazer desistir —<br />
            <span className="text-zinc-300">e como evitar.</span>
          </h2>

          <p className="mb-10 text-base leading-relaxed text-zinc-500">
            Depois de acompanhar centenas de pessoas implementando o método, identificamos
            os padrões de falha mais comuns. Conheça cada um antes de começar.
          </p>

          <BeforeAfter
            before={{
              label: "Armadilha",
              items: [
                "Tentar fazer tudo no primeiro dia",
                "Trocar a estrutura toda semana",
                "Estudar sem definir o objetivo da sessão",
                "Contar horas em vez de blocos entregues",
              ],
            }}
            after={{
              label: "Solução",
              items: [
                "Implementar um pilar por semana",
                "Ajustar apenas uma variável de cada vez",
                "Escrever a intenção antes de começar",
                "Medir blocos completos, não tempo total",
              ],
            }}
          />

          <Callout type="warning">
            O maior inimigo do método não é a preguiça. É o perfeccionismo.
            Iniciar com 80% do plano hoje é infinitamente melhor do que aguardar
            o plano perfeito que nunca chega.
          </Callout>
        </section>

        {/* ── ENCERRAMENTO ── */}
        <section id="encerramento" className="scroll-mt-28 border-t border-zinc-100 pt-20">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
            Próximo passo
          </p>
          <h2 className="mb-6 text-[clamp(2.4rem,6vw,3.5rem)] font-black uppercase leading-[0.95] tracking-tight text-zinc-900">
            Você tem o mapa.<br />
            <span className="text-zinc-300">Agora escolha<br />começar.</span>
          </h2>
          <p className="mb-10 max-w-md text-base leading-relaxed text-zinc-500">
            Conhecimento sem execução é apenas entretenimento intelectual. Reserve
            agora 30 minutos para montar seu plano da próxima semana usando os
            três pilares deste playbook.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#capitulo-2"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-zinc-900 px-7 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-zinc-700"
            >
              Reler os três pilares
            </a>
            <a
              href="#capitulo-3"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-200 px-7 text-sm font-bold uppercase tracking-wide text-zinc-700 transition hover:bg-zinc-50"
            >
              Ver a semana modelo
            </a>
          </div>

          <p className="mt-20 text-xs text-zinc-300">
            © 2025 O Método Foco · Todos os direitos reservados.
          </p>
        </section>

      </main>
    </>
  );
}
