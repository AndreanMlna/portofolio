import React, { useState } from "react";
import { Mail, ArrowUpRight, Check, Send, Terminal } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "andrian.maulana.dev@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" style={{
      backgroundColor: '#030305',
      padding: '100px 24px 60px',
      position: 'relative',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="boundary-guidelines" style={{ padding: '0 32px' }}>
        {/* Reticles */}
        <span className="reticle-corner reticle-tl">+</span>
        <span className="reticle-corner reticle-tr">+</span>
        <span className="reticle-corner reticle-bl">+</span>
        <span className="reticle-corner reticle-br">+</span>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          maxWidth: '1200px',
          margin: '0 auto 80px'
        }}>
          {/* Left Column: Mission statement */}
          <div>
            <div className="telemetry-tag" style={{ marginBottom: '20px' }}>
              <Terminal size={12} style={{ color: '#00F0FF' }} />
              <span>TERMINAL DISPATCH // ENDPOINT</span>
            </div>
            <h3 className="font-display metallic-heading" style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', fontWeight: 700, marginBottom: '16px', lineHeight: 1.15 }}>
              Let's Build the Next Generation of AI Systems
            </h3>
            <p className="font-body" style={{ color: '#94A3B8', fontSize: '15px', lineHeight: 1.6, maxWidth: '480px' }}>
              Available for Machine Learning Engineer, AI Research, Fullstack Developer, and Technical UI/UX Designer opportunities. Let's discuss high-impact architectures.
            </p>
          </div>

          {/* Right Column: Interactive Contact Channels */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div className="doppelrand-card">
              <div className="inner-core" style={{ padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(0, 240, 255, 0.1)',
                    border: '1px solid rgba(0, 240, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00F0FF'
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-mono" style={{ fontSize: '11px', color: '#64748B' }}>DIRECT EMAIL DISPATCH</div>
                    <div className="font-mono" style={{ fontSize: '14px', color: '#F1F5F9', fontWeight: 600 }}>{email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="font-mono"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    border: copied ? '1px solid #10B981' : '1px solid rgba(255, 255, 255, 0.15)',
                    backgroundColor: copied ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    color: copied ? '#10B981' : '#F1F5F9',
                    fontSize: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                >
                  {copied ? <Check size={14} /> : <Send size={14} />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
              <a
                href="https://github.com/AndreanMlna"
                target="_blank"
                rel="noreferrer"
                className="doppelrand-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="inner-core" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#F1F5F9' }}>
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                    <span className="font-mono" style={{ fontSize: '13px', color: '#F1F5F9', fontWeight: 500 }}>GitHub</span>
                  </div>
                  <ArrowUpRight size={16} style={{ color: '#64748B' }} />
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/andrian-maulana-44215a285/"
                target="_blank"
                rel="noreferrer"
                className="doppelrand-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="inner-core" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#00F0FF' }}>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="font-mono" style={{ fontSize: '13px', color: '#F1F5F9', fontWeight: 500 }}>LinkedIn</span>
                  </div>
                  <ArrowUpRight size={16} style={{ color: '#64748B' }} />
                </div>
              </a>

              <a
                href="https://wa.me/6281249992243"
                target="_blank"
                rel="noreferrer"
                className="doppelrand-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="inner-core" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '15px' }}>💬</span>
                    <span className="font-mono" style={{ fontSize: '13px', color: '#34D399', fontWeight: 500 }}>WhatsApp</span>
                  </div>
                  <ArrowUpRight size={16} style={{ color: '#64748B' }} />
                </div>
              </a>

              <a
                href="https://www.instagram.com/andrean_mlana/"
                target="_blank"
                rel="noreferrer"
                className="doppelrand-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="inner-core" style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '15px' }}>📷</span>
                    <span className="font-mono" style={{ fontSize: '13px', color: '#E879F9', fontWeight: 500 }}>Instagram</span>
                  </div>
                  <ArrowUpRight size={16} style={{ color: '#64748B' }} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Strip */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          <div className="font-mono" style={{ fontSize: '12px', color: '#64748B' }}>
            © 2026 Andrian Maulana. Engineered with ThreeUI Signal Particles & Cyber Telemetry.
          </div>
          <div className="font-mono" style={{ fontSize: '11px', color: '#64748B' }}>
            NODE: PROD_JKT_01 | PROTOCOL: SECURE
          </div>
        </div>
      </div>
    </footer>
  );
}
