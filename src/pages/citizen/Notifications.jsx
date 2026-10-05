import React from 'react';
import { 
  Bell, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Clock, 
  ArrowLeft 
} from 'lucide-react';
import Card from '../../components/Card';
import Badge from '../../components/Badge';
import Button from '../../components/Button';

export const Notifications = () => {
  const notifications = [
    {
      id: 1,
      title: 'Assistance Dispatched for Request #RQ-1021',
      desc: 'Seva Medical Relief Corps mobile ambulance unit is en route with chronic care refills and sterile wound kits.',
      time: '35 minutes ago',
      unread: true,
      icon: <Truck size={20} style={{ color: 'var(--color-primary-600)' }} />
    },
    {
      id: 2,
      title: 'Field Verification Completed: Request #RQ-1015',
      desc: 'Taluka sanitation inspector has authenticated lime powder and hygiene requirements for Karjat ward.',
      time: '3 hours ago',
      unread: true,
      icon: <ShieldCheck size={20} style={{ color: 'var(--color-teal-600)' }} />
    },
    {
      id: 3,
      title: 'Relief Kit Delivered: Request #RQ-1018',
      desc: 'Waterproof tarpaulin sheets and dry sleeping bedding signed off and handed over in Pen Taluka.',
      time: '2 days ago',
      unread: false,
      icon: <CheckCircle2 size={20} style={{ color: 'var(--color-success-main)' }} />
    }
  ];

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto' }} className="animate-fade-in">
      <div className="flex items-center justify-between" style={{ marginBottom: '1.5rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-navy-900)' }}>
            Notifications & Alerts
          </h1>
          <p className="text-muted text-sm">
            Live updates on field verification, NGO allocations, and delivery schedules.
          </p>
        </div>

        <Badge variant="teal">2 Unread</Badge>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        {notifications.map((n) => (
          <Card
            key={n.id}
            style={{
              borderLeft: n.unread ? '4px solid var(--color-primary-600)' : '1px solid var(--border-subtle)',
              backgroundColor: n.unread ? '#F0F9FF' : '#FFFFFF'
            }}
          >
            <div className="flex items-start gap-4">
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: 'var(--shadow-xs)',
                  flexShrink: 0
                }}
              >
                {n.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div className="flex items-center justify-between gap-2 flex-wrap" style={{ marginBottom: '0.25rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-navy-900)' }}>
                    {n.title}
                  </h3>
                  <span className="text-xs text-muted flex items-center gap-1">
                    <Clock size={12} />
                    <span>{n.time}</span>
                  </span>
                </div>

                <p className="text-sm text-muted" style={{ lineHeight: 1.5, margin: 0 }}>
                  {n.desc}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
