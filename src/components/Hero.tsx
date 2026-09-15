import React from "react";
import { ArrowRight, Terminal, ShieldCheck, Activity, Award } from "lucide-react";
import { Scene } from "./Scene";

export function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '140px 24px 80px',
      overflow: 'hidden',
      backgroundColor: '#000000'
    }}>
      {/* 3D Shader Canvas Background: Signal Particles from ThreeUI */}
      <Scene />

      {/* Radial Gradient Vignette for Depth Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 50% 30%, transparent 0%, rgba(0, 0, 0, 0.45) 60%, #000000 95%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      {/* Content Container */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1080px',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Telemetry Status Pill */}
        <div className="telemetry-tag" style={{ marginBottom: '28px' }}>
          <span className="radar-pulse" />
          <span>CYBER TELEMETRY ACTIVE</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span style={{ color: '#00F0FF' }}>LATENCY: 24ms</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>HACKATHON DIGDAYA 2026</span>
        </div>

        {/* Massive Headline with Space Grotesk */}
        <h1 className="font-display metallic-heading" style={{
          fontSize: 'clamp(40px, 7vw, 76px)',
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          marginBottom: '20px',
          maxWidth: '960px'
        }}>
          Architecting Autonomous AI & High-Craft Systems
        </h1>

        {/* Subtitle / Role */}
        <p className="font-body" style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: '#94A3B8',
          lineHeight: 1.6,
          maxWidth: '760px',
          marginBottom: '40px',
          fontWeight: 400
        }}>
          I'm <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Andrian Maulana</span> — AI & Machine Learning Engineer, Fullstack Architect, and UI/UX Designer. Engineering production-grade Agentic RAG pipelines, 98.4% edge CNN computer vision, and telemetry-grade web applications.
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '64px'
        }}>
          <a href="#architecture" className="btn-primary-luminous">
            <span>EXPLORE PIPELINE TRACES</span>
            <span className="arrow-capsule">
              <ArrowRight size={16} />
            </span>
          </a>

          <a href="#credentials" className="btn-secondary-obsidian">
            <Award size={16} style={{ color: '#00F0FF' }} />
            <span>BANK INDONESIA ACCREDITATION</span>
          </a>
        </div>

        {/* Telemetry Nodes Bottom Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '12px',
          width: '100%',
          maxWidth: '900px'
        }}>
          <div className="doppelrand-card">
            <div className="inner-core" style={{ padding: '14px 18px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Terminal size={14} style={{ color: '#00F0FF' }} />
                <span className="font-mono" style={{ fontSize: '11px', color: '#94A3B8', letterSpacing: '0.06em' }}>EMBEDDING MODEL</span>
              </div>
              <div className="font-mono" style={{ fontSize: '13px', color: '#F1F5F9', fontWeight: 600 }}>MiniLM-L6-v2 HNSW</div>
            </div>
          </div>

          <div className="doppelrand-card">
            <div className="inner-core" style={{ padding: '14px 18px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Activity size={14} style={{ color: '#10B981' }} />
                <span className="font-mono" style={{ fontSize: '11px', color: '#94A3B8', letterSpacing: '0.06em' }}>INFERENCE ACCURACY</span>
              </div>
              <div className="font-mono" style={{ fontSize: '13px', color: '#10B981', fontWeight: 600 }}>98.4% Edge CNN</div>
            </div>
          </div>

          <div className="doppelrand-card">
            <div className="inner-core" style={{ padding: '14px 18px', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <ShieldCheck size={14} style={{ color: '#8B5CF6' }} />
                <span className="font-mono" style={{ fontSize: '11px', color: '#94A3B8', letterSpacing: '0.06em' }}>DIGDAYA CERTIFIED</span>
              </div>
              <div className="font-mono" style={{ fontSize: '13px', color: '#C4ABFF', fontWeight: 600 }}>BI & LPPI 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
