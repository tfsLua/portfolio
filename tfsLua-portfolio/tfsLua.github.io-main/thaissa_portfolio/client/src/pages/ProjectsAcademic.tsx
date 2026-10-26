import { ArrowUpRight, Check, ExternalLink, GraduationCap, Lightbulb, Milestone } from "lucide-react";
import { Link } from "wouter";
import { PageShell, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const cases = [
  {
    number: "01",
    title: "Hemolink",
    eyebrow: "Residência Porto Digital · Accenture (2024.2)",
    summary: "Conectar doadores de sangue a clínicas com uma experiência mais simples, humana e acionável.",
    problem: "Campanhas e doações precisam de conexão entre pessoas, clínicas e informação confiável. O desafio era transformar uma necessidade social em uma jornada digital compreensível.",
    contribution: "Atuei no desenvolvimento Frontend utilizando React, focando em levantamento de requisitos, mapeamento de processos e tradução de regras de negócio em interfaces intuitivas.",
    learning: "Aprendi a considerar impacto social, segurança e privacidade desde o início — e não como uma etapa posterior.",
    tags: ["React", "Levantamento de Requisitos", "Mapeamento de Processos", "UX"],
  },
  {
    number: "02",
    title: "MiniBank",
    eyebrow: "Residência Porto Digital · Pitang (2025.1)",
    summary: "Reduzir a burocracia de serviços financeiros por meio de uma jornada de abertura de conta digital.",
    problem: "Fluxos financeiros combinam regras de negócio, segurança e expectativa de rapidez. O ponto central era organizar essa complexidade sem perder usabilidade.",
    contribution: "Atuei no desenvolvimento Backend com Java e Spring Boot, focando na construção de soluções técnicas robustas, organização de backlogs e integração de APIs.",
    learning: "Fortaleci minha compreensão sobre arquitetura de sistemas, persistência de dados em MySQL e a importância de validar cada etapa da jornada.",
    tags: ["Java", "Spring Boot", "MySQL", "APIs"],
  },
  {
    number: "03",
    title: "LICITEI & Soluções Digitais",
    eyebrow: "Residências Porto Digital (Capgemini 2025.2 & CESAR School 2026.1)",
    summary: "Aproximar microempreendedores de processos licitatórios e atuar na administração de ecossistemas corporativos.",
    problem: "Processos licitatórios podem parecer distantes para usuários não técnicos, exigindo clareza de requisitos, prototipação e gestão estruturada de backlogs.",
    contribution: "Atuei como Administradora Salesforce na Capgemini e fui responsável pela gestão de backlogs, prototipação, levantamento de requisitos e escrita de Histórias de Usuário no projeto CESAR School.",
    learning: "Aprofundei minha visão de governança de plataformas, mapeamento de processos e arquitetura de soluções voltadas para o usuário.",
    tags: ["Salesforce", "User Stories", "Gestão de Backlog", "Prototipação"],
  },
];

export default function ProjectsAcademic() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <section className="border-b border-border/70">
          <div className="container grid gap-10 py-16 md:py-24 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <div><p className="eyebrow">Projetos & percurso</p><h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.03] md:text-6xl">O que eu aprendi construindo com outras pessoas.</h1><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">Cada projeto e residência foi uma oportunidade de praticar análise, colaboração e decisão. Aqui, o foco está no contexto por trás da solução — e no meu papel técnico e de produto.</p></div>
            <div className="border-l border-primary/45 pl-6"><Milestone className="h-6 w-6 text-primary" /><p className="mt-5 font-mono text-3xl font-bold text-foreground">2024 — hoje</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Uma trajetória em construção entre a sala de aula, as residências do Porto Digital e a prática profissional.</p></div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="flex flex-col justify-between gap-5 border-b border-border/70 pb-8 md:flex-row md:items-end"><div><p className="eyebrow">Estudos de caso & Residências</p><h2 className="mt-5 text-3xl font-semibold md:text-4xl">Experiências práticas no Porto Digital.</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">Os detalhes abaixo resumem contexto, contribuição, tecnologias e aprendizados em cada parceria.</p></div>
          <div className="mt-10 space-y-6">
            {cases.map((item) => (
              <article key={item.title} className="glass-card overflow-hidden">
                <div className="grid gap-8 p-7 md:grid-cols-[5.5rem_0.9fr_1.1fr] md:p-10">
                  <div><p className="font-mono text-3xl font-bold text-primary">{item.number}</p><div className="mt-8 hidden h-16 w-px bg-primary/40 md:block" /></div>
                  <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">{item.eyebrow}</p><h3 className="mt-4 text-3xl font-semibold">{item.title}</h3><p className="mt-4 text-base leading-7 text-foreground/85">{item.summary}</p><div className="mt-7 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="border border-border px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">{tag}</span>)}</div></div>
                  <div className="space-y-6 border-t border-border/70 pt-7 md:border-l md:border-t-0 md:pl-8 md:pt-0"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">O contexto</p><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.problem}</p></div><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Minha contribuição</p><p className="mt-2 text-sm leading-7 text-muted-foreground">{item.contribution}</p></div><div className="border-l-2 border-primary/60 pl-4"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Desenvolvimento percebido</p><p className="mt-2 text-sm leading-7 text-foreground/85">{item.learning}</p></div></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-border/70 bg-card/35">
          <div className="container py-20 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div><p className="eyebrow">Experiência profissional</p><h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">Organização e rigor operacional em TI.</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Na Companhia Editora de Pernambuco (CEPE), a rotina financeira em TI ampliou minha atenção a detalhes, integridade de dados e sistemas corporativos.</p></div>
              <div className="border-l border-primary/45 pl-7 md:pl-10"><p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-primary">Experiência / CEPE</p><h3 className="mt-4 text-2xl font-semibold">Assistente Financeiro em TI</h3><p className="mt-1 text-sm text-muted-foreground">CEPE · Sistema Pirâmide</p><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">Suporte às rotinas financeiras utilizando o sistema Pirâmide, auxiliando no controle de contas a pagar e receber e na organização das informações financeiras da empresa. Essa vivência fortaleceu a precisão analítica e o cuidado com a integridade dos dados.</p><div className="mt-7 grid gap-3 sm:grid-cols-3"><div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />Sistema Pirâmide</div><div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />Controle financeiro</div><div className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />Organização de dados</div></div></div>
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="eyebrow">Formação acadêmica</p><h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">A base técnica e metodológica.</h2></div>
            <div className="glass-card p-7 md:p-9"><div className="flex items-start justify-between gap-6"><div className="flex h-12 w-12 items-center justify-center border border-primary/40 bg-primary/10 text-primary"><GraduationCap className="h-6 w-6" /></div><span className="border border-primary/35 bg-primary/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">5º período</span></div><h3 className="mt-8 text-2xl font-semibold">Análise e Desenvolvimento de Sistemas</h3><p className="mt-2 text-sm font-semibold text-muted-foreground">CESAR School</p><p className="mt-6 text-sm leading-7 text-muted-foreground">Formação com forte ênfase em engenharia de software, metodologias ágeis (Scrum/Kanban), levantamento de requisitos, arquitetura de sistemas e vivência prática em projetos corporativos no Porto Digital.</p><div className="mt-8 grid gap-3 border-t border-border/70 pt-6 sm:grid-cols-2"><p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />Metodologias Ágeis</p><p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />Java, C# & JS/TS</p><p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />Análise de Requisitos</p><p className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />Gestão de Backlog</p></div></div>
          </div>
        </section>

        <section className="container pb-20 md:pb-28">
          <div className="relative overflow-hidden border border-primary/35 bg-primary/10 px-7 py-12 md:px-12 md:py-16"><Lightbulb className="h-6 w-6 text-primary" /><h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight md:text-5xl">Vamos construir a próxima solução juntos?</h2><p className="mt-5 max-w-xl leading-7 text-muted-foreground">Estou aberta a oportunidades profissionais onde possa unir visão de produto, rigor técnico e colaboração ágil.</p><a href="mailto:thaissafssilva@gmail.com" className="mt-8 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90">Entrar em contato <ArrowUpRight className="h-4 w-4" /></a></div>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
