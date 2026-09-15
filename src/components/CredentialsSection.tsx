import React from "react";
import { Award, ShieldCheck, CheckCircle2, FileText, Landmark } from "lucide-react";

interface Certificate {
  title: string;
  program: string;
  issuer: string;
  certNumber: string;
  signatory: string;
  period: string;
  badge: string;
  topics: string[];
}

const CERTIFICATES: Certificate[] = [
  {
    title: "Essential Training Program DIGDAYA X HACKATHON 2026",
    program: "Bank Indonesia Payment Systems & Digital Innovation",
    issuer: "Bank Indonesia & Lembaga Pengembangan Perbankan Indonesia (LPPI)",
    certNumber: "0761/PLT2260383/ESSENTIAL/2026",
    signatory: "Ryan Rizaldy (Kepala Departemen Kebijakan Sistem Pembayaran Bank Indonesia)",
    period: "June 2026",
    badge: "BI OFFICIAL ACCREDITATION",
    topics: ["National Payment Blueprint", "Digital Rupee & Central Bank Digital Currency", "Financial Data Infrastructure", "Fraud Detection Systems"]
  },
  {
    title: "Practitioner Training Program Digdaya x Hackathon 2026",
    program: "Advanced Digital Payment Architectures & AI Systems",
    issuer: "Bank Indonesia & Pusat Inovasi Digital Indonesia (LPPI)",
    certNumber: "2183/PLT2260383/PRACTITIONER/2026",
    signatory: "Ryan Rizaldy (Kepala Departemen Kebijakan Sistem Pembayaran Bank Indonesia)",
    period: "August 2026",
    badge: "PRACTITIONER CERTIFIED",
    topics: ["Cross-Border QRIS Interoperability", "High-Throughput Distributed Ledgers", "Real-Time AI Anomaly Detection", "Financial Inclusion API Standards"]
  }
];

export function CredentialsSection() {
  return (
    <section id="credentials" style={{ padding: '100px 24px', backgroundColor: '#000000', position: 'relative' }}>
      <div className="boundary-guidelines" style={{ padding: '0 32px' }}>
        {/* Reticles */}
        <span className="reticle-corner reticle-tl">+</span>
        <span className="reticle-corner reticle-tr">+</span>
        <span className="reticle-corner reticle-bl">+</span>
        <span className="reticle-corner reticle-br">+</span>

        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="telemetry-tag" style={{ marginBottom: '16px' }}>
            <Award size={12} style={{ color: '#10B981' }} />
            <span>VERIFIED CREDENTIALS & AUDIT</span>
          </div>
          <h2 className="font-display metallic-heading" style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.03em' }}>
            Official Institutional Accreditation
          </h2>
          <p className="font-body" style={{ color: '#94A3B8', fontSize: '15px', maxWidth: '640px', margin: '12px auto 0' }}>
            Accreditation and technical programs verified by Bank Indonesia and the Indonesian Banking Development Institute.
          </p>
        </div>

        {/* Credentials Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {CERTIFICATES.map((cert, index) => (
            <div key={index} className="doppelrand-card">
              <div className="inner-core" style={{ justifyContent: 'space-between' }}>
                <div>
                  {/* Top Bar with Issuer & Badge */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Landmark size={16} style={{ color: '#00F0FF' }} />
                      <span className="font-mono" style={{ fontSize: '11px', color: '#CBD5E1', fontWeight: 600 }}>BANK INDONESIA</span>
                    </div>
                    <span className="telemetry-tag" style={{ color: '#10B981', borderColor: 'rgba(16, 185, 129, 0.3)' }}>
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display" style={{ fontSize: '19px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>

                  <div className="font-body" style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '16px' }}>
                    {cert.program}
                  </div>

                  {/* Key Metadata Table */}
                  <div style={{
                    backgroundColor: '#050508',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    marginBottom: '18px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span className="font-mono" style={{ fontSize: '11px', color: '#64748B' }}>CERTIFICATE NO.</span>
                      <span className="font-mono" style={{ fontSize: '11px', color: '#00F0FF', fontWeight: 600 }}>{cert.certNumber}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span className="font-mono" style={{ fontSize: '11px', color: '#64748B' }}>ISSUED BY</span>
                      <span className="font-mono" style={{ fontSize: '11px', color: '#E2E8F0' }}>LPPI & Bank Indonesia</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span className="font-mono" style={{ fontSize: '11px', color: '#64748B' }}>COMPLETION PERIOD</span>
                      <span className="font-mono" style={{ fontSize: '11px', color: '#A1A1AA' }}>{cert.period}</span>
                    </div>
                  </div>

                  {/* Verified Topics */}
                  <div style={{ marginBottom: '12px' }}>
                    <div className="font-mono" style={{ fontSize: '10px', color: '#64748B', letterSpacing: '0.08em', marginBottom: '8px' }}>
                      CURRICULUM COMPETENCY DOMAINS
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {cert.topics.map((topic, tIdx) => (
                        <div key={tIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <CheckCircle2 size={13} style={{ color: '#10B981', flexShrink: 0 }} />
                          <span className="font-body" style={{ fontSize: '12px', color: '#CBD5E1' }}>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Signatory Footer */}
                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingTop: '12px',
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <ShieldCheck size={16} style={{ color: '#10B981' }} />
                  <span className="font-mono" style={{ fontSize: '10px', color: '#94A3B8' }}>
                    Endorsed: {cert.signatory}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
