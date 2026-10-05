import React, { useState } from 'react';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Save 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Badge from '../../components/Badge';

export const Profile = () => {
  const { currentUser } = useAuth();

  const [name, setName] = useState(currentUser?.name || 'Rahul Sharma');
  const [email, setEmail] = useState(currentUser?.email || 'rahul.sharma@example.com');
  const [phone, setPhone] = useState(currentUser?.phone || '+91 98201 44521');
  const [location, setLocation] = useState(currentUser?.location || 'Sector 12, Panvel, Maharashtra');
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto' }} className="animate-fade-in">
      <div style={{ marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-navy-900)' }}>
          Citizen Profile & Contact Info
        </h1>
        <p className="text-muted text-sm">
          Keep your primary contact and neighborhood address updated so field dispatch units can locate your household.
        </p>
      </div>

      <Card>
        {saved && (
          <div
            style={{
              backgroundColor: 'var(--color-success-bg)',
              border: '1px solid var(--color-success-border)',
              color: 'var(--color-success-text)',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.875rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <CheckCircle2 size={18} />
            <span>Profile contact details updated successfully.</span>
          </div>
        )}

        <div className="flex items-center gap-4" style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80'}
            alt=""
            style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--border-subtle)' }}
          />

          <div>
            <div className="flex items-center gap-2">
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{name}</h2>
              <Badge variant="teal" icon={<ShieldCheck size={12} />}>
                Verified Citizen
              </Badge>
            </div>
            <p className="text-xs text-muted" style={{ marginTop: '0.2rem' }}>
              Joined ResQConnect: October 2026 • Raigad District Zone
            </p>
          </div>
        </div>

        <form onSubmit={handleSave}>
          <Input
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            icon={<User size={18} />}
          />

          <div className="grid grid-cols-2 md-grid-cols-1 gap-3">
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              icon={<Mail size={18} />}
            />

            <Input
              label="Mobile Phone (for field SMS & call)"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              icon={<Phone size={18} />}
            />
          </div>

          <Input
            label="Current Recovery Location / Landmark"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            helpText="Shared only with verified responders assigned to your assistance ticket."
            icon={<MapPin size={18} />}
          />

          <div className="flex justify-end" style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
            <Button type="submit" variant="primary" icon={<Save size={18} />}>
              Save Profile Details
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Profile;
