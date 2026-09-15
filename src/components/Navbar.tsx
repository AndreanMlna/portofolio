import React from "react";
import { Cpu, ArrowUpRight } from "lucide-react";

export function Navbar() {
  return (
    <header className="island-navbar">
      {/* Brand Lockup */}
      <a href="#hero" className="flex items-center gap-3 text-decoration-none group" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <div style={{
          width: '34px',
          height: '34px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #161822 0%, #0e0f15 100%)',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00F0FF',
          boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)'
        }}>
          <Cpu size={18} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="font-display" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.12em', color: '#FFFFFF' }}>
            ANDRIAN MAULANA
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className="radar-pulse" />
            <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.08em', color: '#10B981', fontWeight: 600 }}>
              AVAILABLE FOR ROLES
            </span>
          </div>
        </div>
      </a>

      {/* Nav Links */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <a href="#architecture" className="font-display" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.02em' }}
           onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')}
           onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>
          Architecture
        </a>
        <a href="#projects" className="font-display" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.02em' }}
           onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')}
           onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>
          Projects
        </a>
        <a href="#credentials" className="font-display" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.02em' }}
           onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')}
           onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>
          Accreditation
        </a>
        <a href="#stack" className="font-display" style={{ fontSize: '13px', color: '#94A3B8', textDecoration: 'none', transition: 'color 0.2s', letterSpacing: '0.02em' }}
           onMouseEnter={(e) => (e.currentTarget.style.color = '#00F0FF')}
           onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}>
          Stack
        </a>
      </nav>

      {/* Right Action */}
      <a href="#contact" className="btn-primary-luminous" style={{ padding: '6px 10px 6px 18px', fontSize: '12px' }}>
        <span>CONNECT</span>
        <span className="arrow-capsule" style={{ width: '24px', height: '24px' }}>
          <ArrowUpRight size={14} />
        </span>
      </a>
    </header>
  );
}
