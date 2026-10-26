import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Layers3, Send } from "lucide-react";
import { Link } from "wouter";
import { PageShell, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const photo = `${import.meta.env.BASE_URL}assets/thaissa-retrato-quadrado.jpg`;

const projects = [
  {
    number: "01",
    title: "Hemolink",
    label: "Saúde digital · Accenture",
    description: "Uma aplicação para aproximar doadores e clínicas, transformando uma necessidade social em uma experiência digital mais simples.",
    tags: ["Requisitos", "UX", "Impacto social"],
  },
  {
    number: "02",
    title: "MiniBank",
    label: "Serviços financeiros · Pitang",
    description: "Fluxos de conta digital pensados para reduzir fricção, organizar regras de negócio e tornar serviços financeiros mais acessíveis.",
    tags: ["Produto", "APIs", "Usabilidade"],
  },
  {
    number: "03",
    title: "LICITEI",
    label: "Tecnologia para MEIs",
    description: "Uma solução para aproximar pequenos negócios de processos licitatórios por meio de informação clara e interface intuitiva.",
    tags: ["Pesquisa", "Acessibilidade", "Soluções digitais"],
  },
];

export default function Home() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-border/70">
          <div className="pointer-events-none absolute -right-36 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-40 editorial-grid" />
          <div className="container relative grid gap-12 py-16 md:py-24 lg:grid-cols-[1fr_0.84fr] lg:items-center lg:gap-20 lg:py-28">
            <div className="reveal max-w-2xl">
              <p className="eyebrow">Portfólio profissional · 2026</p>
              <h1 className="mt-7 text-[clamp(2.8rem,6vw,5.8rem)] font-semibold leading-[0.94] text-foreground">
                Clareza para transformar <span className="text-primary">problemas em produto.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
                Sou Thaíssa Fernandes, Analista de Desenvolvimento de Software em formação. Conecto requisitos, tecnologia e experiência do usuário para transformar necessidades reais em soluções digitais possíveis.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link href="/projetos" className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-[0_12px_30px_rgba(66,160,255,0.18)] hover:-translate-y-0.5 hover:bg-primary/90">
                  Ver projetos <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link href="/perfil" className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 text-sm font-bold text-foreground hover:border-primary/60 hover:text-primary">
                  Conhecer meu perfil <ArrowDownRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <span>CESAR School · 5º período</span>
                <span>Produto + Requisitos + Código</span>
              </div>
            </div>

            <div className="reveal relative mx-auto w-full max-w-[29rem] lg:ml-auto" style={{ animationDelay: "120ms" }}>
              <div className="absolute -left-5 top-10 h-24 w-24 border-l border-t border-primary/55" />
              <div className="absolute -bottom-5 -right-5 h-24 w-24 border-b border-r border-primary/55" />
              <div className="image-frame blue-glow aspect-square">
                <img src={photo} alt="Retrato profissional de Thaíssa Fernandes" className="h-full w-full object-cover object-top" />

              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-card/35">
          <div className="container grid gap-px bg-border/60 md:grid-cols-3">
            {[
              { icon: Layers3, title: "Estruturo", text: "Requisitos, histórias e critérios que deixam o próximo passo visível." },
              { icon: BriefcaseBusiness, title: "Conecto", text: "Negócio, time técnico e usuário em torno de uma mesma intenção." },
              { icon: Send, title: "Valido", text: "Entregas com atenção a contexto, qualidade, usabilidade e impacto." },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-background px-6 py-8 md:px-8">
                <Icon className="h-5 w-5 text-primary" />
                <h2 className="mt-5 text-lg font-semibold text-foreground">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="flex flex-col justify-between gap-5 border-b border-border/70 pb-8 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Trabalho em contexto</p>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight md:text-4xl">Projetos que mostram como eu penso.</h2>
            </div>
            <Link href="/projetos" className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-foreground">Explorar todos <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article key={project.title} className="glass-card group flex min-h-[23rem] flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1" style={{ animationDelay: `${index * 80}ms` }}>
                <div>
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    <span>{project.number}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                  <p className="mt-12 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{project.label}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-foreground">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tags.map((tag) => <span key={tag} className="border border-border px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/35">
          <div className="container grid gap-10 py-20 md:grid-cols-[0.75fr_1.25fr] md:items-start md:py-24">
            <div>
              <p className="eyebrow">Meu jeito de trabalhar</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight">A tecnologia começa antes do código.</h2>
            </div>
            <div className="max-w-2xl space-y-5 text-base leading-8 text-muted-foreground">
              <p>Gosto de entender o problema antes de escolher a ferramenta. Minha experiência em projetos com Accenture, Pitang e Capgemini fortaleceu a prática de ouvir diferentes perspectivas, organizar demandas e validar se a entrega resolve de fato a necessidade.</p>
              <p>Meu ponto de encontro está entre a análise de sistemas, a gestão de produtos e o desenvolvimento web. É nesse espaço que perguntas bem feitas viram decisões mais seguras e experiências mais humanas.</p>
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="relative overflow-hidden border border-primary/35 bg-primary/10 px-7 py-12 md:px-12 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative max-w-2xl">
              <p className="eyebrow">Próximo passo</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">Tem um problema para organizar? Vamos conversar.</h2>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">Estou aberta a oportunidades de estágio, projetos de produto e experiências que unam análise, tecnologia e impacto.</p>
              <a href="mailto:thaissafssilva@gmail.com" className="mt-8 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:-translate-y-0.5 hover:bg-primary/90">Entrar em contato <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
