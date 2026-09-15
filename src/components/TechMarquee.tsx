import React from "react";
import { Layers } from "lucide-react";

const TECHNOLOGIES = [
  "PyTorch 2.x",
  "Next.js 16",
  "Python 3.12",
  "Google Gemini AI",
  "PostgreSQL 16",
  "Docker Containerization",
  "React 19",
  "FastAPI",
  "Redis Cache",
  "LangChain & FAISS",
  "Three.js & WebGL",
  "TypeScript 5",
  "Tailwind CSS",
  "Supabase",
  "ONNX Runtime"
];

export function TechMarquee() {
  return (
    <section id="stack" style={{
      padding: '60px 0',
      backgroundColor: '#050508',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Gradient Edge Masks for Fade */}
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '120px',
        background: 'linear-gradient(90deg, #050508 0%, transparent 100%)',
        zIndex: 10,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: '120px',
        background: 'linear-gradient(270deg, #050508 0%, transparent 100%)',
        zIndex: 10,
        pointerEvents: 'none'
      }} />

      {/* Marquee Track */}
      <div className="animate-marquee" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 18px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              whiteSpace: 'nowrap'
            }}
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00F0FF' }} />
            <span className="font-mono" style={{ fontSize: '13px', color: '#94A3B8', letterSpacing: '0.04em' }}>
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
