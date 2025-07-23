import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import SkillBadge from "@/components/skill-badge";
import ExperienceItem from "@/components/experience-item";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="w-full border-b bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex h-16 items-center justify-between">
            <div className="font-bold text-xl">Kipkoech Sang</div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#about"
                className="text-sm font-medium hover:text-primary"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm font-medium hover:text-primary"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-sm font-medium hover:text-primary"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-sm font-medium hover:text-primary"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <a
                  href="https://github.com/sangkips"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon">
                <a
                  href="https://www.linkedin.com/in/sangkips/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-8">
          {/* Hero Section */}
          <section className="py-12 md:py-24 flex flex-col md:flex-row items-center justify-center text-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Software Engineer
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Building robust, scalable systems with Python and Golang
              </p>
              <div className="mt-8 flex gap-4 justify-center text-center">
                <Button>
                  <a href="#contact">Get in touch</a>
                </Button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-12 border-t">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg">
                  I&apos;m a backend developer with over 4 years of experience
                  building scalable, high-performance systems. I specialize in
                  Python and Golang development, with expertise in microservices
                  architecture, API design, and database optimization.
                </p>
                <p className="text-lg mt-4">
                  My passion lies in creating efficient, maintainable code that
                  solves real-world problems. I enjoy working on complex backend
                  systems and have experience with various cloud platforms and
                  containerization technologies.
                </p>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Backend:</span> Generative AI,
                    Python, Golang
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Experience:</span> 4+ years
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Frontend:</span> React,
                    Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Interests:</span> Open Source,
                    Cloud Computing, DevOps
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-12 border-t">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Programming Languages
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Python" level={90} />
                  <SkillBadge name="Golang" level={85} />
                  <SkillBadge name="JavaScript" level={70} />
                  <SkillBadge name="Artificial Intentelligence" level={80} />
                  <SkillBadge name="Bash" level={65} />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Django" level={85} />
                  <SkillBadge name="Flask" level={80} />
                  <SkillBadge name="FastAPI" level={75} />
                  <SkillBadge name="Gin" level={80} />
                  <SkillBadge name="Echo" level={70} />
                  {/* <SkillBadge name="D" level={75} /> */}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Databases</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="PostgreSQL" level={85} />
                  <SkillBadge name="MongoDB" level={75} />
                  <SkillBadge name="Redis" level={80} />
                  <SkillBadge name="MySQL" level={70} />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">DevOps & Cloud</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Docker" level={85} />
                  <SkillBadge name="Kubernetes" level={75} />
                  <SkillBadge name="AWS" level={80} />
                  <SkillBadge name="GCP" level={70} />
                  <SkillBadge name="CI/CD" level={80} />
                  <SkillBadge name="Terraform" level={65} />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Data</h3>
                <div className="flex flex-wrap gap-3">
                  <SkillBadge name="Airflow" level={85} />
                  <SkillBadge name="Looker Studio" level={75} />
                  <SkillBadge name="Metabase" level={80} />
                  <SkillBadge name="Airbyte" level={70} />
                  <SkillBadge name="Kafka" level={80} />
                  {/* <SkillBadge name="" level={65} /> */}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 border-t">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Fleet Management System"
                description="Fleet Management System is a telematics system involving inetegrating telecommunications and informatics to monitor and manage vehicles remotely. It involves collecting, transmitting, and analyzing vehicle data like location, speed, fuel usage, engine diagnostics, and driver behavior through embedded devices or external hardware."
                technologies={["Golang", "Typscript", "Vite", "MongoDB"]}
                // githubUrl="https://github.com/sangkips/grpc-orders-management"
                liveUrl="https://telematics-pearl.vercel.app/"
              />

              <ProjectCard
                title="Retail Management System"
                description="Real-time Retail Management System with Dashboards and analytics using Grafana Dashboards."
                technologies={[
                  "Laravel",
                  "Javascript",
                  "Grafana",
                  "K8s",
                  "Docker",
                  "Helm",
                ]}
                // githubUrl="https://github.com/yourusername/monitoring-dashboard"
                liveUrl="https://investify.citizix.com"
              />

              <ProjectCard
                title="Data Processing Pipeline"
                description="High-performance data processing system using Python, Kafka, and Spark."
                technologies={[
                  "Fastapi",
                  "Apache Kafka",
                  "Apache Spark",
                  "Redis",
                  "Next js",
                  "Postgresql",
                ]}
                githubUrl="https://github.com/sangkips/datalift-frontend"
              />

              <ProjectCard
                title="Document Upload"
                description="Secure Document upload with authentication and request validation ."
                technologies={["Golang", "S3", "JWT", "Pinata"]}
                githubUrl="https://github.com/sangkips/fileupload"
                // liveUrl="https://example.com/api-gateway"
              />

              <ProjectCard
                title="AI Visualization Assistant"
                description="AI presentation assistant for generating visualizations"
                technologies={["Python", "SQLAlchemy", "PostgreSQL", "LLM"]}
                liveUrl="https://vizagent-yzvo-g098mi63w-sangs-projects-df772ab9.vercel.app/"
              />

              <ProjectCard
                title="Reading Buddy - Interactive Learning App"
                description="A mobile learning application built with React Native and Expo, designed to help children develop reading and pronunciation skills through interactive chat, practice sessions, and gamified progress tracking.."
                technologies={[
                  "React Native",
                  "Expo SDK",
                  "Supabase",
                  "Expo Speech API",
                ]}
                githubUrl="https://github.com/sangkips/kids-tutor"
              />
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-12 border-t">
            <h2 className="text-3xl font-bold mb-8">Experience</h2>

            <div className="space-y-8">
              <ExperienceItem
                title="Senior Backend Developer"
                company="Tech Care For All"
                period="2024 August - Present"
                description="Lead backend development for a distributed system handling thousands of requests daily. Implemented microservices architecture using Python and Kubernetes."
                achievements={[
                  "Reduced API response time by 40% through code optimization and caching strategies",
                  "Designed and implemented a scalable event-driven architecture",
                  "Led migration from monolith to microservices, improving deployment frequency by 80%",
                ]}
              />

              <ExperienceItem
                title="Backend Developer"
                company="Untapped Global."
                period="2023 March - 2024 July"
                description="Developed and maintained Python-based data processing pipelines and APIs for a financial technology platform."
                achievements={[
                  "Built RESTful APIs using Django and Flask serving many daily users",
                  "Optimized database queries resulting in 50% faster report generation",
                  "Implemented automated testing that increased code coverage from 65% to 90%",
                ]}
              />

              <ExperienceItem
                title="Backend Engineer"
                company="SpaceyaTech"
                period="2022 January - 2023 February"
                description="Software developer for an early-stage startup, focusing primarily on backend systems and infrastructure."
                achievements={[
                  "Designed and implemented the initial backend architecture using Python",
                  "Set up CI/CD pipelines and deployment workflows",
                  "Integrated third-party APIs and payment processing systems",
                ]}
              />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 border-t">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg mb-4">
                  I&apos;m currently open to new opportunities and
                  collaborations. Feel free to reach out if you&apos;d like to
                  discuss a project or position.
                </p>

                <div className="space-y-4 mt-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a
                      href="mailto:sangkipkoech@gmail.com"
                      className="hover:text-primary"
                    >
                      sangkipkoech@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <a
                      href="https://github.com/sangkips"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      github.com/sangkips
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/sangkips/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary"
                    >
                      linkedin.com/in/sangkips
                    </a>
                  </div>
                </div>
              </div>
              <ContactForm />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="w-full max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4 md:h-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Kipkoech Sang. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
