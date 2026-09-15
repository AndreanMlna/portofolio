import { FolderGit2, ExternalLink, Sparkles, Layers, Cpu, Database } from "lucide-react";

interface Project {
  title: string;
  category: string;
  badge: string;
  description: string;
  metrics: { label: string; value: string };
  tags: string[];
  link?: string;
  github?: string;
}

const PROJECTS: Project[] = [
  {
    title: "Agentic RAG Autonomous Retrieval Engine",
    category: "RESEARCH & LLM SYSTEMS",
    badge: "THESIS PROJECT",
    description: "Self-correcting document intelligence system utilizing SentencePiece tokenization, MiniLM-L6-v2 embeddings, and FAISS HNSW vector indexing paired with an iterative ReAct reasoning agent loop.",
    metrics: { label: "Faithfulness Score", value: "98.6%" },
    tags: ["LangChain", "MiniLM-L6-v2", "FAISS HNSW", "FastAPI", "Python", "Ragas"]
  },
  {
    title: "Aksara Jawa Deep Convolutional OCR",
    category: "COMPUTER VISION",
    badge: "98.4% ACCURACY",
    description: "High-accuracy edge neural network for recognizing and transliterating ancient Javanese historical scripts. Features morphological baseline segmentation and sub-15ms edge inference.",
    metrics: { label: "Character Acc", value: "98.40%" },
    tags: ["PyTorch", "Deep CNN", "OpenCV", "ONNX Runtime", "NumPy"]
  },
  {
    title: "GoodevaDesk Omnichannel Ticketing Platform",
    category: "FULLSTACK SAAS",
    badge: "ENTERPRISE CRM",
    description: "Multi-tenant customer service desk and ticket automation engine. Features real-time WebSocket channel bridging, SLA tracking, and audit logging with strict role-based access control.",
    metrics: { label: "Realtime Sync", value: "<15ms WS" },
    tags: ["Next.js 16", "React 19", "PostgreSQL", "Prisma", "Redis", "Tailwind CSS"]
  },
  {
    title: "Sembako-Chain AI Supply Predictor",
    category: "PREDICTIVE ANALYTICS",
    badge: "BI DIGDAYA 2026",
    description: "Macroeconomic demand forecasting and price anomaly detector engineered for staple food commodities during the Bank Indonesia Hackathon Digdaya 2026 challenge.",
    metrics: { label: "Forecast MAPE", value: "3.12%" },
    tags: ["LightGBM", "Prophet", "Python", "FastAPI", "Streamlit", "PostgreSQL"]
  }
];

export function ProjectsGrid() {
  return (
    <section id="projects" style={{ padding: '100px 24px', backgroundColor: '#000000', position: 'relative' }}>
      <div className="boundary-guidelines" style={{ padding: '0 32px' }}>
        {/* Reticles */}
        <span className="reticle-corner reticle-tl">+</span>
        <span className="reticle-corner reticle-tr">+</span>
        <span className="reticle-corner reticle-bl">+</span>
        <span className="reticle-corner reticle-br">+</span>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="telemetry-tag" style={{ marginBottom: '16px' }}>
            <FolderGit2 size={12} style={{ color: '#00F0FF' }} />
            <span>PORTFOLIO CODEBASE</span>
          </div>
          <h2 className="font-display metallic-heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            Featured Engineering Systems
          </h2>
          <p className="font-body" style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '640px', margin: '12px auto 0' }}>
            Production-grade implementations across agentic AI, computer vision classification, and scalable web infrastructure.
          </p>
        </div>

        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {PROJECTS.map((project, index) => (
            <div key={index} className="doppelrand-card">
              <div className="inner-core" style={{ justifyContent: 'space-between' }}>
                <div>
                  {/* Category & Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span className="font-mono" style={{ fontSize: '11px', color: '#64748B', letterSpacing: '0.08em' }}>
                      {project.category}
                    </span>
                    <span className="telemetry-tag" style={{
                      color: index === 0 ? '#00F0FF' : index === 1 ? '#10B981' : index === 3 ? '#C4ABFF' : '#F1F5F9',
                      borderColor: index === 0 ? 'rgba(0, 240, 255, 0.3)' : index === 1 ? 'rgba(16, 185, 129, 0.3)' : 'rgba(255, 255, 255, 0.12)'
                    }}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display" style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', marginBottom: '10px', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body" style={{ fontSize: '14px', color: '#94A3B8', lineHeight: 1.6, marginBottom: '20px' }}>
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Metric Strip */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 14px',
                    backgroundColor: '#050508',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    marginBottom: '16px'
                  }}>
                    <span className="font-mono" style={{ fontSize: '11px', color: '#94A3B8' }}>{project.metrics.label}</span>
                    <span className="font-mono" style={{ fontSize: '14px', color: '#00F0FF', fontWeight: 600 }}>{project.metrics.value}</span>
                  </div>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="font-mono" style={{
                        fontSize: '11px',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#CBD5E1'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
