import { ArrowUpRight, Check, Code2, Compass, HeartHandshake, Layers3, UserRound } from "lucide-react";
import { Link } from "wouter";
import { PageShell, SiteFooter, SiteHeader } from "@/components/SiteChrome";

const photo = "./assets/thaissa-retrato-quadrado.jpg";

const groups = [
  {
    icon: Compass,
    title: "Produto & Requisitos",
    description: "Organizo a intenção antes da entrega: entendo o contexto, traduzo necessidades e crio clareza para o time.",
    skills: ["Levantamento de requisitos", "User Stories e BDD", "Refinamento de backlog", "Modelagem de processos", "Prototipação", "Validação de entregas"],
  },
  {
    icon: Code2,
    title: "Tecnologia",
    description: "Tenho base técnica para conversar com desenvolvimento, investigar possibilidades e construir soluções web.",
    skills: ["Java e C#", "JavaScript e TypeScript", "React e Node.js", "MySQL e Bancos de Dados", "APIs e Integrações", "Salesforce Administrator"],
  },
  {
    icon: HeartHandshake,
    title: "Colaboração",
    description: "Trabalho com escuta, organização e comunicação para manter as pessoas alinhadas ao que realmente importa.",
    skills: ["Scrum e Kanban", "Jira, Trello e Azure DevOps", "Comunicação com stakeholders", "Pensamento analítico", "Gestão de prioridades", "Empatia com o usuário"],
  },
];

export default function Profile() {
  return (
    <PageShell>
      <SiteHeader />
      <main>
        <section className="border-b border-border/70">
          <div className="container grid gap-12 py-16 md:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
            <div className="relative mx-auto w-full max-w-sm lg:mx-0">
              <div className="absolute -bottom-4 -left-4 h-20 w-20 border-b border-l border-primary/55" />
              <div className="image-frame aspect-square">
                <img src={photo} alt="Retrato profissional de Thaíssa Fernandes" className="h-full w-full object-cover object-top" />
              </div>
            </div>
            <div className="max-w-2xl">
              <p className="eyebrow">Perfil profissional</p>
              <h1 className="mt-6 text-4xl font-semibold leading-[1.03] md:text-5xl">Entre a pergunta certa e a entrega possível.</h1>
              <p className="mt-7 text-base leading-8 text-muted-foreground md:text-lg">Sou estudante do 5º período de Análise e Desenvolvimento de Sistemas na CESAR School, com perfil híbrido em desenvolvimento e gestão de produtos. Experiência prática no Porto Digital com levantamento de requisitos, refinamento de backlog e codificação.</p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">Especialista em metodologias ágeis, utilizo minha base técnica para facilitar a ponte entre as necessidades de negócio e a engenharia de software.</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="border border-primary/45 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary">Análise de Sistemas</span>
                <span className="border border-border bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground/80">Gestão de Produtos</span>
                <span className="border border-border bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-foreground/80">Desenvolvimento Web</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/70 bg-card/25">
          <div className="container py-20 md:py-28">
            <div className="max-w-3xl">
              <p className="eyebrow">Como eu contribuo</p>
              <h2 className="mt-5 text-3xl font-semibold md:text-4xl">Uma base híbrida para fazer a ponte entre intenção e implementação.</h2>
            </div>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {groups.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="glass-card flex flex-col justify-between p-8">
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="mt-8 border-t border-border/70 pt-6">
                      <ul className="space-y-3">
                        {item.skills.map((skill) => (
                          <li key={skill} className="flex items-center gap-3 text-sm text-foreground/85">
                            <Check className="h-4 w-4 shrink-0 text-primary" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="container py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">O que me move</p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">Construir tecnologia que faça sentido para quem usa.</h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-muted-foreground">
              <p>Participei de projetos em parceria com o Porto Digital (Accentture, Pitang, Capgemini e CESAR School), atuando em levantamento de requisitos, refinamento de backlogs, escrita de User Stories e desenvolvimento Frontend e Backend.</p>
              <p>Acredito que a tecnologia mais eficiente é aquela que resolve o problema real do usuário sem adicionar complexidade desnecessária. É por isso que unisco rigor analítico e sensibilidade de produto em cada entrega.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-border/70 bg-card/35">
          <div className="container py-16 md:py-20">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Pronto para colaborar</p>
                <h3 className="mt-2 text-2xl font-semibold">Vamos construir a próxima solução juntos?</h3>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/projetos" className="border border-border bg-card px-5 py-3 text-sm font-bold text-foreground hover:border-primary">Ver projetos</Link>
                <a href="mailto:thaissafssilva@gmail.com" className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:bg-primary/90">Entrar em contato <ArrowUpRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </PageShell>
  );
}
