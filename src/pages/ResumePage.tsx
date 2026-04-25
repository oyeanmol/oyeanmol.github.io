import { SiteFooter, SiteNav } from "@/components/SiteChrome";
import { Download } from "lucide-react";

const experience = [
  {
    company: "Zebpay",
    role: "Security Research Intern",
    period: "May 2024 - Nov 2024",
    points: [
      "Conducting security tests for infrastructure, APIs, Web Application & Mobile Applications.",
      "Worked with multiple security scanners such as nuclei, shodan & Censys for customised vulnerability scanning and improving the overall security model of the entire infrastructure.",
      "Part of ISO 27001 Internal Audit Team"
    ],
  }
];

const education = [
  { school: "University Of Rajasthan", detail: "BCA · Computer Science · 2025" },
];

const ResumePage = () => (
  <div className="min-h-screen bg-background font-sans">
    <SiteNav />
    <main className="container max-w-3xl pt-10 sm:pt-12 pb-16 sm:pb-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-border/60 pb-6 mb-10">
        <div>
          <p className="font-mono text-xs text-muted-foreground mb-2">/ resume</p>
          <h1 className="text-2xl sm:text-3xl font-medium tracking-tight">Anmol Shah</h1>
          <p className="font-mono text-xs sm:text-sm text-muted-foreground mt-1 break-all sm:break-normal">
            backend developer · India · anmolshah.work@gmail.com
          </p>
        </div>
        <a
          href="/alex-chen-resume.pdf"
          download
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-xs hover:border-accent/40 hover:text-accent transition-colors"
        >
          <Download className="h-3.5 w-3.5" /> pdf
        </a>
      </div>

      {/* Experience */}
      <section className="mb-14">
        <h2 className="font-mono text-xs text-accent mb-6">// experience</h2>
        <ol className="space-y-10">
          {experience.map((job) => (
            <li key={job.company + job.period} className="grid grid-cols-12 gap-4">
              <div className="col-span-12 sm:col-span-3 font-mono text-xs text-muted-foreground">
                {job.period}
              </div>
              <div className="col-span-12 sm:col-span-9 space-y-2">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="font-medium tracking-tight">{job.company}</h3>
                  <span className="text-muted-foreground text-sm">— {job.role}</span>
                </div>
                <ul className="space-y-1.5 text-sm text-muted-foreground list-none">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="text-accent font-mono">·</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="mb-14">
        <h2 className="font-mono text-xs text-accent mb-6">// education</h2>
        <ul className="space-y-3">
          {education.map((e) => (
            <li key={e.school} className="grid grid-cols-12 gap-4 text-sm">
              <span className="col-span-12 sm:col-span-3 font-mono text-xs text-muted-foreground">
                {e.detail.split(" · ").pop()}
              </span>
              <span className="col-span-12 sm:col-span-9">
                <span className="font-medium">{e.school}</span>
                <span className="text-muted-foreground"> — {e.detail}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2 className="font-mono text-xs text-accent mb-6">// skills</h2>
        <dl className="grid gap-4 sm:grid-cols-2 font-mono text-xs">
           {[
            ["languages", "Python, Javascript, SQL, Salesforce Apex"],
            ["data", "Postgres, Redis, Kafka, ClickHouse, S3"],
            ["Framework", "Django, DRF, React/Next JS"],
            ["Others", "Linux, HTMX, Tailwind, Git/Github, Docker, Framer"],
          ].map(([k, v]) => (
            <div key={k} className="border-l border-border/60 pl-4">
              <dt className="text-muted-foreground">{k}</dt>
              <dd className="text-foreground mt-1">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
    <SiteFooter />
  </div>
);

export default ResumePage;
