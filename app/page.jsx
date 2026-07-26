import FoundationProjects from "./FoundationProjects";

const featuredProjects = [
  {
    number: "01",
    name: "Orvia Labs",
    label: "Flagship product · Active",
    description:
      "A multi-model creative studio for generating, refining, remixing, layering, and animating AI imagery without switching tools.",
    image: "/projects/orvia-labs.jpg",
    imageAlt: "Orvia Labs AI creative studio title screen",
    facts: ["Multi-model generation", "Layer-aware editing", "Image → motion"],
    stack: "Next.js · React · FastAPI · Python",
    links: [
      {
        label: "Watch demo",
        href: "https://youtu.be/-5e21EvldGg",
      },
    ],
  },
  {
    number: "02",
    name: "Aegis",
    label: "Multimodal AI · Production-grade",
    description:
      "An automated content-moderation system that routes text, image, audio, and video through dedicated analysis pipelines and returns structured, auditable decisions.",
    image: "/projects/aegis.jpg",
    imageAlt: "Aegis multimodal moderation console title screen",
    facts: ["4 modalities", "13 policy categories", "11 API endpoints"],
    stack: "OpenAI · FastAPI · OpenCV · TensorFlow · SQLite",
    links: [
      {
        label: "Watch demo",
        href: "https://youtu.be/9hSEKJ_aumE",
      },
    ],
  },
  {
    number: "03",
    name: "Orvia 3D Arts",
    label: "Generative 3D · Model orchestration",
    description:
      "A sketch-to-asset pipeline that turns a rough drawing into a photoreal image, then into an interactive, exportable 3D model.",
    image: "/projects/orvia-3d.jpg",
    imageAlt: "Orvia 3D Arts sketch-to-image workspace",
    facts: ["Sketch → image → 3D", "GPU arbitration", "3 swappable backends"],
    stack: "Gemini · Hunyuan3D-2 · PyTorch · Three.js",
    links: [
      {
        label: "Watch demo",
        href: "https://youtu.be/f-yHO4Eawu4",
      },
    ],
  },
  {
    number: "04",
    name: "Dental AI",
    label: "Medical AI · Final year project",
    description:
      "An end-to-end oral diagnosis and implant-planning platform with separate RGB and X-ray pipelines, clinical workflows, reports, and billing.",
    image: "/projects/dental-ai.jpg",
    imageAlt: "Dental AI patient platform interface",
    facts: ["2 imaging pipelines", "6 disease classes", "Detection + segmentation"],
    stack: "YOLOv11 · EfficientNet-B4 · U-Net · React · FastAPI",
    links: [
      {
        label: "Watch demo",
        href: "https://www.youtube.com/watch?v=PzzG26pMPjs",
      },
      {
        label: "View code",
        href: "https://github.com/Atasatti/Dental_AI",
      },
    ],
  },
];

const supportingProjects = [
  {
    number: "05",
    name: "Orvia Studios",
    label: "Full-stack SaaS",
    description:
      "A live agency platform with a marketing site, role-based client portal, admin operations, analytics, project tracking, and invoicing.",
    image: "/projects/orvia-studios.jpg",
    imageAlt: "Orvia Studios landing page",
    stack: "Next.js · MongoDB · NextAuth · Recharts · Vercel",
    link: "https://orvia-studios.vercel.app",
    linkLabel: "Visit live site",
  },
  {
    number: "06",
    name: "Oscillation Records",
    label: "Full-stack music platform · Live",
    description:
      "A production platform for a Manchester independent record label, unifying artists, releases, streaming, submissions, accounts, analytics, and a full content-management backend.",
    image: "/projects/oscillation-records-logo.png",
    imageAlt: "Oscillation Records logo",
    stack: "Next.js 15 · TypeScript · Prisma · MongoDB · NextAuth · AWS S3",
    credit: "Made using Claude + Codex",
    link: "https://www.oscillationrecords.com",
    linkLabel: "Visit live site",
  },
];

const archiveProjects = [
  {
    number: "07",
    name: "NeuroVision AI",
    label: "Computer vision",
    description:
      "MRI brain-tumor detection delivered through a production-ready inference service and a clear clinician-facing analysis interface.",
    image: "/NeuroVision.jpeg",
    imageAlt: "NeuroVision AI MRI analysis results",
    stack: "YOLOv8 · PyTorch · FastAPI",
    link: "https://github.com/Atasatti/NeuroVision-AI",
  },
  {
    number: "08",
    name: "Potato Disease Classifier",
    label: "Computer vision",
    description:
      "A CNN classifier for Early Blight, Late Blight, and healthy potato leaves, delivered through an image-upload web interface.",
    image: "/potato_disease.png",
    imageAlt: "Potato leaf disease classification results",
    stack: "Keras · FastAPI · OpenCV · NumPy",
    link: "https://github.com/Atasatti/Potato_disease_Classification",
  },
  {
    number: "09",
    name: "Data Visualization & Analytics",
    label: "Business intelligence",
    description:
      "Exploratory analysis, KPI dashboards, and custom visualizations for turning raw business data into clear decisions.",
    image: "/visualisation.jpeg",
    imageAlt: "Data visualization and analytics dashboard",
    stack: "Power BI · Python · Matplotlib · Seaborn",
    link: "https://github.com/Atasatti/PowerBI_Dashboards",
  },
  {
    number: "10",
    name: "Voyage Vista",
    label: "Full-stack application",
    description:
      "A travel-management system with user and admin authentication, package CRUD, reviews, and feedback workflows.",
    image: "/VyageVista.jpeg",
    imageAlt: "Voyage Vista travel management interface",
    stack: "FastAPI · MongoDB Atlas · Jinja2",
    link: "https://github.com/Atasatti/Voyage_Vista",
  },
];

const capabilityGroups = [
  {
    number: "01",
    title: "Vision & perception",
    copy: "Detection, classification, segmentation, OCR, frame sampling, and production inference across medical and moderation use cases.",
    items: ["PyTorch", "TensorFlow", "OpenCV", "YOLO v8/v11", "U-Net", "EfficientNet"],
  },
  {
    number: "02",
    title: "Generative systems",
    copy: "Multi-provider image workflows, LLM applications, RAG, prompt systems, video, and 3D-generation orchestration.",
    items: ["OpenAI", "Gemini", "FLUX", "Stable Diffusion", "RAG", "Hunyuan3D-2"],
  },
  {
    number: "03",
    title: "Product engineering",
    copy: "The application layer around the model: resilient APIs, polished interfaces, authentication, databases, billing, and deployment.",
    items: ["FastAPI", "Next.js", "React", "Three.js", "MongoDB", "Docker"],
  },
];

function Arrow() {
  return <span aria-hidden="true" className="arrow" />;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ata Ul Haq, home">
          ATA<span>®</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#archive">Archive</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
        </nav>

        <a className="nav-cta" href="mailto:atasatti20@gmail.com">
          Let&apos;s talk <Arrow />
        </a>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">
            <span className="menu-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </summary>
          <div className="mobile-nav-panel">
            <a href="#work">Work</a>
            <a href="#archive">Archive</a>
            <a href="#expertise">Expertise</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="mailto:atasatti20@gmail.com">
              Email me <Arrow />
            </a>
          </div>
        </details>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span />
              AI Engineer · Computer Vision · Generative AI
            </p>
            <h1>
              I build AI that
              <br />
              <em>sees, reasons</em>
              <br />
              &amp; ships.
            </h1>
            <div className="hero-intro">
              <p>
                I turn ambitious AI ideas into reliable products—connecting
                models, APIs, and thoughtful interfaces into systems people can
                actually use.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">
                  Explore selected work <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="text-link"
                  href="https://github.com/Atasatti"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Arrow />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <img
                src="/profile-pic.jpg"
                alt="Ata Ul Haq"
                width="3196"
                height="5680"
                fetchPriority="high"
              />
              <div className="portrait-stamp">
                <span>AI systems</span>
                <strong>Model → Product</strong>
              </div>
            </div>
            <div className="floating-note note-one">
              <span>Focus / 01</span>
              <strong>Multimodal intelligence</strong>
            </div>
            <div className="floating-note note-two">
              <span>Focus / 02</span>
              <strong>Generative products</strong>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Core disciplines">
          <div>
            <span>Computer Vision</span><i>✦</i>
            <span>Generative AI</span><i>✦</i>
            <span>LLM Applications</span><i>✦</i>
            <span>Full-Stack Product</span><i>✦</i>
            <span>Model Orchestration</span>
          </div>
        </div>

        <section className="work-section section-shell" id="work">
          <div className="section-heading">
            <p className="section-kicker">Selected work · 2024–26</p>
            <h2>
              Systems with
              <br />
              <em>something at stake.</em>
            </h2>
            <p className="section-copy">
              Multimodal moderation, creative tooling, medical vision, and 3D
              generation—built beyond the prototype.
            </p>
          </div>

          <div className="featured-projects">
            {featuredProjects.map((project) => (
              <article className="project" key={project.name}>
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="1280"
                    height="720"
                    loading="lazy"
                  />
                  <span className="project-number">{project.number}</span>
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        key={link.label}
                      >
                        {link.label} <Arrow />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="project-body">
                  <div>
                    <p className="project-label">{project.label}</p>
                    <h3>{project.name}</h3>
                  </div>
                  <div className="project-details">
                    <p>{project.description}</p>
                    <ul aria-label={`${project.name} highlights`}>
                      {project.facts.map((fact) => (
                        <li key={fact}>{fact}</li>
                      ))}
                    </ul>
                    <p className="project-stack">{project.stack}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="supporting-heading">
            <p className="section-kicker">Also shipped</p>
            <span>Full-stack delivery and focused vision systems.</span>
          </div>

          <div className="supporting-grid">
            {supportingProjects.map((project) => (
              <article className="support-card" key={project.name}>
                <div className="support-image">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    width="1000"
                    height="700"
                    loading="lazy"
                  />
                  <span>{project.number}</span>
                </div>
                <p className="project-label">{project.label}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <p className="project-stack">{project.stack}</p>
                <div className="support-actions">
                  {project.credit && (
                    <span className="project-credit">{project.credit}</span>
                  )}
                  <a
                    className="text-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkLabel} <Arrow />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="archive-heading" id="archive">
            <div>
              <p className="section-kicker">Earlier work · Selected</p>
              <h3>The foundations.</h3>
            </div>
            <p>
              Four early projects that shaped the range behind today&apos;s
              end-to-end AI systems—from vision and analytics to security and
              full-stack delivery.
            </p>
          </div>

          <FoundationProjects projects={archiveProjects} />
        </section>

        <section className="expertise-section" id="expertise">
          <div className="expertise-intro section-shell">
            <p className="section-kicker light">Capabilities</p>
            <h2>
              From raw input
              <br />
              to <em>useful output.</em>
            </h2>
            <p>
              The strongest AI work is not just a model. It is the orchestration,
              product judgment, and engineering around it.
            </p>
          </div>

          <div className="capability-list section-shell">
            {capabilityGroups.map((group) => (
              <article className="capability-row" key={group.title}>
                <span className="capability-number">{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.copy}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="approach section-shell">
          <div className="section-heading compact">
            <p className="section-kicker">How I work</p>
            <h2>
              Model to product,
              <br />
              <em>without the handoff gap.</em>
            </h2>
          </div>

          <div className="approach-grid">
            <article>
              <span>01</span>
              <h3>Frame the system</h3>
              <p>
                Start with the user decision, then define modalities,
                constraints, evaluation signals, and the right model mix.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Engineer the path</h3>
              <p>
                Build observable pipelines with resilient APIs, sensible
                timeouts, guardrails, and swappable providers.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Ship the experience</h3>
              <p>
                Turn the pipeline into a fast, clear interface and take it
                through deployment—not just a notebook demo.
              </p>
            </article>
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <div className="about-label">
            <p className="section-kicker">About Ata</p>
            <span>AI Engineer / Product builder</span>
          </div>

          <div className="about-copy">
            <h2>
              I like the hard part between
              <em>“the model works”</em> and
              <em>“the product works.”</em>
            </h2>
            <div className="about-columns">
              <p>
                My work spans computer vision, generative AI, and LLM
                applications. I build across the stack—from preprocessing and
                inference to backend architecture and polished frontends.
              </p>
              <p>
                I am especially drawn to multimodal systems: products where
                different models, data types, and user workflows have to behave
                like one coherent experience.
              </p>
            </div>
          </div>

          <div className="proof-strip">
            <div>
              <strong>4</strong>
              <span>Modalities handled in one moderation system</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Swappable 3D generation backends</span>
            </div>
            <div>
              <strong>2</strong>
              <span>Medical imaging pipelines in Dental AI</span>
            </div>
            <div>
              <strong>1</strong>
              <span>Engineer across model, backend, and interface</span>
            </div>
          </div>
        </section>

        <section className="education-section section-shell" id="education">
          <div className="education-heading">
            <p className="section-kicker">Education</p>
            <h2>
              Built on
              <br />
              <em>data science.</em>
            </h2>
          </div>

          <div className="education-list" aria-label="Education history">
            <article className="education-entry">
              <span className="education-year">Feb 2022—Feb 2026</span>
              <div className="education-degree">
                <p>Bachelor&apos;s degree</p>
                <h3>Data Science</h3>
              </div>
              <div className="education-meta">
                <strong>COMSATS University Islamabad</strong>
                <span>CGPA 3.65 / 4.0</span>
              </div>
            </article>

            <article className="education-entry">
              <span className="education-year">Aug 2018—Sep 2020</span>
              <div className="education-degree">
                <p>Higher secondary</p>
                <h3>HSSC</h3>
              </div>
              <div className="education-meta">
                <strong>F.G. Sir Syed College, Rawalpindi</strong>
                <span>Grade A+</span>
              </div>
            </article>

            <article className="education-entry">
              <span className="education-year">Mar 2016—Aug 2018</span>
              <div className="education-degree">
                <p>Secondary school</p>
                <h3>SSC</h3>
              </div>
              <div className="education-meta">
                <strong>APSACS (FWO), Rawalpindi</strong>
                <span>Grade A+</span>
              </div>
            </article>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-inner section-shell">
            <p className="section-kicker light">Start a conversation</p>
            <h2>
              Have an ambitious
              <br />
              AI problem? <em>Let&apos;s build.</em>
            </h2>
            <a className="contact-email" href="mailto:atasatti20@gmail.com">
              atasatti20@gmail.com <Arrow />
            </a>

            <div className="contact-footer">
              <p>AI Engineer · Computer Vision · Generative AI</p>
              <div>
                <a
                  href="https://www.linkedin.com/in/ata-satti"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <Arrow />
                </a>
                <a
                  href="https://github.com/Atasatti"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <Arrow />
                </a>
              </div>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
