import React from 'react';
import { 
  AlertTriangle, 
  ShieldCheck, 
  PhoneCall, 
  Home, 
  Droplets, 
  HeartPulse, 
  Truck, 
  ArrowRight,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Badge from '../components/Badge';
import { recoveryPrinciples } from '../data/mockDisasters';

export const Recovery = () => {
  return (
    <div className="recovery-page">
      {/* Header */}
      <section style={{ padding: '4.5rem 0 3rem', backgroundColor: '#FFFFFF', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <Badge variant="amber" icon={<AlertTriangle size={14} />} style={{ marginBottom: '1rem' }}>
            Mission Distinction
          </Badge>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-navy-950)', marginBottom: '1rem' }}>
            Recovery vs. Emergency Response
          </h1>
          <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
            Understanding the critical separation between acute emergency extraction and the multi-week coordination of post-disaster humanitarian recovery.
          </p>
        </div>
      </section>

      {/* Direct Emergency Warning Box */}
      <section style={{ padding: '2.5rem 0', backgroundColor: '#FFFBEB' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-lg)',
              border: '2px solid #F59E0B',
              padding: '2rem',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div className="flex items-start gap-4 md-flex-col">
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#FEF3C7',
                  color: 'var(--color-warning-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <PhoneCall size={28} />
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#92400E', marginBottom: '0.4rem' }}>
                  If You Are In Acute Danger: Dial 112 Immediately
                </h3>
                <p style={{ color: '#78350F', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                  ResQConnect does <strong>NOT replace 112, fire rescue, or National Disaster Response Force (NDRF)</strong> teams. If water is rising rapidly, a building structure is unstable, or there is an urgent medical trauma, contact emergency civil services right now.
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                  <div style={{ padding: '0.5rem 1rem', backgroundColor: '#FEF3C7', borderRadius: 'var(--radius-sm)', fontWeight: 700, color: '#92400E', fontSize: '0.9rem' }}>
                    National Emergency: 112
                  </div>
                  <div style={{ padding: '0.5rem 1rem', backgroundColor: '#FEF3C7', borderRadius: 'var(--radius-sm)', fontWeight: 700, color: '#92400E', fontSize: '0.9rem' }}>
                    NDRF Helpline: 011-24363260
                  </div>
                  <div style={{ padding: '0.5rem 1rem', backgroundColor: '#FEF3C7', borderRadius: 'var(--radius-sm)', fontWeight: 700, color: '#92400E', fontSize: '0.9rem' }}>
                    State Relief Desk: 1070
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section style={{ padding: '4.5rem 0', backgroundColor: 'var(--bg-app)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-navy-950)' }}>
              Where Does ResQConnect Fit In?
            </h2>
            <p className="text-muted" style={{ marginTop: '0.35rem' }}>
              Disaster management has distinct phases. We bridge the gap from Day 2 through Year 1.
            </p>
          </div>

          <div className="grid grid-cols-2 md-grid-cols-1 gap-6">
            {/* Column 1: Emergency */}
            <Card style={{ borderTop: '4px solid #DC2626' }}>
              <div style={{ marginBottom: '1rem' }}>
                <Badge variant="red" icon={<XCircle size={12} />}>
                  Golden Hours (0 - 48 Hours)
                </Badge>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#991B1B', marginTop: '0.5rem' }}>
                  Emergency Search & Rescue
                </h3>
                <p className="text-sm text-muted">Handled by NDRF, Fire Brigade, Police, Military</p>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#DC2626', fontWeight: 'bold' }}>•</span>
                  <span>Boat and helicopter evacuations from flood surges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#DC2626', fontWeight: 'bold' }}>•</span>
                  <span>Extrication of individuals trapped under structural debris</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#DC2626', fontWeight: 'bold' }}>•</span>
                  <span>Emergency trauma surgery and immediate triage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#DC2626', fontWeight: 'bold' }}>•</span>
                  <span>Immediate hazard isolation (gas leaks, power lines)</span>
                </li>
              </ul>
            </Card>

            {/* Column 2: Recovery */}
            <Card style={{ borderTop: '4px solid var(--color-teal-600)' }}>
              <div style={{ marginBottom: '1rem' }}>
                <Badge variant="teal" icon={<CheckCircle2 size={12} />}>
                  Recovery Phase (Day 2 onwards)
                </Badge>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-teal-700)', marginTop: '0.5rem' }}>
                  ResQConnect Coordination Hub
                </h3>
                <p className="text-sm text-muted">Handled by NGOs, Volunteers, Donors, CSR & Local Desks</p>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-teal-600)', fontWeight: 'bold' }}>✓</span>
                  <span>Clean drinking water canisters & water purification tablets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-teal-600)', fontWeight: 'bold' }}>✓</span>
                  <span>Chronic prescription refills for displaced elderly & infants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-teal-600)', fontWeight: 'bold' }}>✓</span>
                  <span>Waterproof tarpaulins, dry bedding, and temporary shelter kits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-teal-600)', fontWeight: 'bold' }}>✓</span>
                  <span>Sanitation lime, bleaching powder, and mud clearing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--color-teal-600)', fontWeight: 'bold' }}>✓</span>
                  <span>Eliminating duplicate relief distribution across adjoining lanes</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Recovery Principles */}
      <section style={{ padding: '4.5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <Badge variant="teal" style={{ marginBottom: '0.5rem' }}>
              Guiding Philosophy
            </Badge>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-navy-950)' }}>
              Core Recovery Principles
            </h2>
          </div>

          <div className="grid grid-cols-2 md-grid-cols-1 gap-6">
            {recoveryPrinciples.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--bg-app)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div className="flex items-center gap-2" style={{ marginBottom: '0.5rem' }}>
                  <ShieldCheck size={20} style={{ color: 'var(--color-teal-600)' }} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-navy-900)' }}>
                    {item.title}
                  </h3>
                </div>
                <p className="text-muted text-sm" style={{ lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Button to="/citizen" variant="primary" size="lg" iconRight={<ArrowRight size={18} />}>
              Open Citizen Recovery Shell
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recovery;
