import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export interface Project {
  year: string;
  title: string;
  description: string;
  stack: string[];
  href?: string;
  status?: "live" | "archived" | "wip";
}

export const projects: Project[] = [
  {
    year: "2026",
    title: "nivara (e-commerce platform)",
    description:
      "Built a scalable e-commerce application using Django, Django REST Framework, and React with PostgreSQL, integrating secure payments via PayPal and RESTful APIs for seamless client-server interaction.",
    stack: ["Django", "DRF", "React", "PostgreSQL"],
    status: "live", 
    href: "#",
  },
  {
    year: "2026",
    title: "Salesforce Recruitment Management System",
    description:
      "Designed and implemented a recruitment system using Salesforce with Apex, Flows, Triggers, and Test Classes, focusing on automation, data integrity, and scalable CRM workflows.",
    stack: ["Salesforce", "Apex", "LWC", "Flows", "Triggers"],
    status: "live",
    href: "#",
  },
  {
    year: "2026",
    title: "snipr",
    description:
      "RESTful url link shortner",
    stack: ["Python", "DRF", "PostgreSQL", "HTMX"],
    status: "live",
    href: "#",
  },
  {
    year: "2023",
    title: "scanmap",
    description:
      "A fast Multi-threaded Python Port Scanner with Nmap integration feature.",
    stack: ["Python", "Socket", "asyncio", "rhreading"],
    status: "live",
    href: "#",
  },
];

export const Projects = () => (
  <section id="projects" className="py-20">
    <SectionHeading index="02 / projects">// selected</SectionHeading>

    <ul className="divide-y divide-border/60 border-y border-border/60">
      {projects.map((p) => (
        <li key={p.title}>
          <a
            href={p.href}
            className="group grid grid-cols-12 items-baseline gap-4 py-6 transition-colors hover:bg-card/40 -mx-4 px-4 rounded-md"
          >
            <span className="col-span-12 sm:col-span-2 font-mono text-xs text-muted-foreground">
              {p.year}
            </span>
            <div className="col-span-12 sm:col-span-7 space-y-1.5">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium tracking-tight transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                {p.status && (
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    [{p.status}]
                  </span>
                )}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </div>
            <div className="col-span-12 sm:col-span-3 flex flex-wrap gap-1.5 sm:justify-end">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border/60 bg-card px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </a>
        </li>
      ))}
    </ul>
  </section>
);
