import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PlusCircle, 
  ArrowLeft, 
  MapPin, 
  Droplets, 
  HeartPulse, 
  Home, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2 
} from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Badge from '../../components/Badge';

export const RequestHelp = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState('Water & Food');
  const [priority, setPriority] = useState('High');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('Sector 12, Panvel, Maharashtra');
  const [householdCount, setHouseholdCount] = useState('4');
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    { label: 'Water & Food', icon: <Droplets size={16} /> },
    { label: 'Medical Assistance', icon: <HeartPulse size={16} /> },
    { label: 'Shelter Support', icon: <Home size={16} /> },
    { label: 'Sanitation & Hygiene', icon: <Sparkles size={16} /> },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: '780px', margin: '0 auto' }} className="animate-fade-in">
      <div className="flex items-center gap-2" style={{ marginBottom: '1.25rem' }}>
        <Button to="/citizen" variant="ghost" size="sm" icon={<ArrowLeft size={16} />}>
          Back to Dashboard
        </Button>
      </div>

      <Card>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
            <div
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-success-bg)',
                color: 'var(--color-success-text)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem'
              }}
            >
              <CheckCircle2 size={36} />
            </div>

            <Badge variant="green" style={{ marginBottom: '0.75rem' }}>
              Ticket #RQ-1025 Generated
            </Badge>

            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-navy-950)' }}>
              Assistance Request Logged
            </h2>

            <p className="text-muted" style={{ maxWidth: '520px', margin: '0 auto 1.5rem', lineHeight: 1.6 }}>
              Your request for <strong>{category}</strong> in <strong>{location}</strong> has entered the <em>Under Verification</em> queue. A local coordinator will validate the details shortly.
            </p>

            <div className="flex items-center justify-center gap-3">
              <Button to="/citizen" variant="primary">
                Return to Dashboard
              </Button>
              <Button onClick={() => setSubmitted(false)} variant="secondary">
                Submit Another Request
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
              <div className="flex items-center gap-2">
                <PlusCircle size={22} style={{ color: 'var(--color-primary-600)' }} />
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800 }}>Submit Recovery Assistance Request</h2>
              </div>
              <p className="text-muted text-sm" style={{ marginTop: '0.25rem' }}>
                Fill in exact requirements so field coordinators can match corresponding NGO supplies.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Category selector */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label className="form-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                  Assistance Category *
                </label>
                <div className="grid grid-cols-2 md-grid-cols-1 gap-2">
                  {categories.map((c) => {
                    const isSelected = category === c.label;
                    return (
                      <button
                        key={c.label}
                        type="button"
                        onClick={() => setCategory(c.label)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.65rem',
                          padding: '0.75rem 1rem',
                          borderRadius: 'var(--radius-md)',
                          border: isSelected ? '2px solid var(--color-primary-600)' : '1px solid var(--border-default)',
                          backgroundColor: isSelected ? 'var(--color-primary-50)' : '#FFFFFF',
                          color: isSelected ? 'var(--color-primary-700)' : 'var(--text-primary)',
                          fontWeight: isSelected ? 700 : 500,
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        {c.icon}
                        <span>{c.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <Input
                label="Summary Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Drinking water canisters for elderly residents in Sector 12"
                required
              />

              <Input
                label="Detailed Description & Specific Items"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe current situation, road access status, specific items needed (e.g. 5x tarpaulins, 20L water cans)..."
                required
              />

              <div className="grid grid-cols-2 md-grid-cols-1 gap-3">
                <Input
                  label="Location / Neighborhood Address"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Street name, landmark, town"
                  icon={<MapPin size={18} />}
                  required
                />

                <Input
                  label="Number of Affected People / Families"
                  type="number"
                  value={householdCount}
                  onChange={(e) => setHouseholdCount(e.target.value)}
                  placeholder="e.g. 4"
                  required
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label className="form-label" style={{ display: 'block', marginBottom: '0.4rem' }}>
                  Urgency / Priority
                </label>
                <div className="flex items-center gap-3">
                  {['High', 'Medium', 'Low'].map((p) => (
                    <label key={p} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', cursor: 'pointer', fontSize: '0.9rem' }}>
                      <input
                        type="radio"
                        name="priority"
                        value={p}
                        checked={priority === p}
                        onChange={(e) => setPriority(e.target.value)}
                        style={{ accentColor: 'var(--color-primary-600)' }}
                      />
                      <span>{p} Priority</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3" style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
                <Button to="/citizen" variant="secondary">
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Submit for Verification
                </Button>
              </div>
            </form>
          </div>
        )}
      </Card>
    </div>
  );
};

export default RequestHelp;
