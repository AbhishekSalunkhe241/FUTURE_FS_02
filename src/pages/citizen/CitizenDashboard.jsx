import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Search, 
  Clock, 
  Truck, 
  CheckCircle2, 
  MapPin, 
  AlertCircle, 
  ArrowRight, 
  Building2, 
  ChevronRight,
  Filter,
  Layers,
  HeartHandshake,
  Compass,
  FileText
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import StatCard from '../../components/StatCard';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import StatusBadge from '../../components/StatusBadge';
import Modal from '../../components/Modal';
import { mockRequests } from '../../data/mockRequests';

export const CitizenDashboard = () => {
  const { currentUser } = useAuth();
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const userName = currentUser?.name || 'Rahul Sharma';

  // Demo stats as specified in prompt section 10
  const stats = [
    { title: 'Active Requests', value: '2', subtext: 'Requiring fulfillment', icon: <Layers size={22} />, scheme: 'blue' },
    { title: 'Under Verification', value: '1', subtext: 'Desk review in progress', icon: <Search size={22} />, scheme: 'amber' },
    { title: 'In Progress', value: '1', subtext: 'Assistance dispatched', icon: <Truck size={22} />, scheme: 'teal' },
    { title: 'Completed', value: '3', subtext: 'Dignified handovers done', icon: <CheckCircle2 size={22} />, scheme: 'green' }
  ];

  const filteredRequests = filterCategory === 'All'
    ? mockRequests
    : mockRequests.filter(r => r.category.toLowerCase().includes(filterCategory.toLowerCase()));

  return (
    <div className="citizen-dashboard animate-fade-in" style={{ maxWidth: '1180px', margin: '0 auto' }}>
      {/* =========================================================================
          WELCOME & BANNER SECTION
          ========================================================================= */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          padding: '1.75rem 2rem',
          marginBottom: '2rem',
          boxShadow: 'var(--shadow-xs)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.25rem'
        }}
      >
        <div>
          <div className="flex items-center gap-2" style={{ marginBottom: '0.35rem' }}>
            <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--color-navy-900)' }}>
              Good morning, {userName}
            </h1>
            <Badge variant="teal">Panvel Zone</Badge>
          </div>
          <p className="text-muted" style={{ margin: 0, fontSize: '0.95rem' }}>
            Track your recovery requests and connect with available assistance.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            to="/citizen/request-help"
            variant="primary"
            icon={<PlusCircle size={18} />}
            id="dash-new-request-btn"
          >
            Submit New Request
          </Button>
        </div>
      </div>

      {/* =========================================================================
          FOUR STAT CARDS (SECTION 10)
          ========================================================================= */}
      <div className="grid grid-cols-4 lg-grid-cols-2 md-grid-cols-1 gap-4" style={{ marginBottom: '2.5rem' }}>
        {stats.map((s, idx) => (
          <StatCard
            key={idx}
            title={s.title}
            value={s.value}
            subtext={s.subtext}
            icon={s.icon}
            colorScheme={s.scheme}
          />
        ))}
      </div>

      {/* =========================================================================
          QUICK ACTIONS SECTION (SECTION 12)
          ========================================================================= */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div className="flex items-center justify-between" style={{ marginBottom: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-900)' }}>
              Quick Actions
            </h2>
            <p className="text-xs text-muted" style={{ marginTop: '0.15rem' }}>
              Direct access to essential recovery coordination workflows
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 lg-grid-cols-2 md-grid-cols-1 gap-4">
          <Link
            to="/citizen/request-help"
            style={{ textDecoration: 'none' }}
            id="quick-action-request-help"
          >
            <Card hoverable style={{ height: '100%', borderLeft: '4px solid var(--color-primary-600)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-primary-50)',
                    color: 'var(--color-primary-600)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <PlusCircle size={20} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy-900)' }}>
                  Request Help
                </h3>
                <p className="text-xs text-muted" style={{ lineHeight: 1.5, margin: 0 }}>
                  Submit a new recovery assistance request for food, water, medicine, or shelter.
                </p>
              </div>
            </Card>
          </Link>

          <Link
            to="/citizen/requests"
            style={{ textDecoration: 'none' }}
            id="quick-action-track-requests"
          >
            <Card hoverable style={{ height: '100%', borderLeft: '4px solid var(--color-teal-600)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-teal-50)',
                    color: 'var(--color-teal-600)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Clock size={20} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy-900)' }}>
                  Track Requests
                </h3>
                <p className="text-xs text-muted" style={{ lineHeight: 1.5, margin: 0 }}>
                  View submitted requests, field verification updates, and delivery timelines.
                </p>
              </div>
            </Card>
          </Link>

          <Link
            to="/recovery"
            style={{ textDecoration: 'none' }}
            id="quick-action-find-assistance"
          >
            <Card hoverable style={{ height: '100%', borderLeft: '4px solid #7E22CE' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#F3E8FF',
                    color: '#7E22CE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Compass size={20} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy-900)' }}>
                  Find Assistance
                </h3>
                <p className="text-xs text-muted" style={{ lineHeight: 1.5, margin: 0 }}>
                  Explore available recovery support, relief dispensaries, and sanitation camps.
                </p>
              </div>
            </Card>
          </Link>

          <Link
            to="/register?role=volunteer"
            style={{ textDecoration: 'none' }}
            id="quick-action-volunteer"
          >
            <Card hoverable style={{ height: '100%', borderLeft: '4px solid var(--color-warning-main)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-warning-bg)',
                    color: 'var(--color-warning-main)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <HeartHandshake size={20} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-navy-900)' }}>
                  Volunteer
                </h3>
                <p className="text-xs text-muted" style={{ lineHeight: 1.5, margin: 0 }}>
                  Learn how to contribute your skills, logistics help, or medical assistance.
                </p>
              </div>
            </Card>
          </Link>
        </div>
      </div>

      {/* =========================================================================
          RECENT REQUESTS SECTION (SECTION 11)
          ========================================================================= */}
      <div>
        <div className="flex items-center justify-between flex-wrap gap-2" style={{ marginBottom: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy-900)' }}>
              Recent Recovery Requests
            </h2>
            <p className="text-xs text-muted" style={{ marginTop: '0.15rem' }}>
              Fictional demo requests illustrating real-world post-disaster tracking
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted font-medium">Category:</span>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="form-select text-xs"
              style={{ padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-md)' }}
            >
              <option value="All">All Categories</option>
              <option value="Water">Water & Food</option>
              <option value="Medical">Medical</option>
              <option value="Shelter">Shelter</option>
              <option value="Sanitation">Sanitation</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredRequests.map((req) => (
            <Card
              key={req.id}
              hoverable
              onClick={() => setSelectedRequest(req)}
              className="request-list-card"
            >
              <div className="flex items-start justify-between gap-4 md-flex-col">
                <div style={{ flex: 1 }}>
                  {/* Badges line */}
                  <div className="flex items-center gap-2 flex-wrap" style={{ marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--color-primary-700)' }}>
                      Request #{req.id}
                    </span>
                    <Badge variant="slate">{req.category}</Badge>
                    <StatusBadge status={req.status} />
                    <Badge variant={req.priority === 'High' ? 'red' : req.priority === 'Medium' ? 'amber' : 'slate'}>
                      {req.priority} Priority
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy-900)', marginBottom: '0.35rem' }}>
                    {req.title}
                  </h3>

                  <p className="text-muted text-sm" style={{ lineHeight: 1.5, marginBottom: '0.75rem' }}>
                    {req.description}
                  </p>

                  {/* Meta items */}
                  <div className="flex items-center gap-4 flex-wrap text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} style={{ color: 'var(--text-light)' }} />
                      <span>{req.location}</span>
                    </span>

                    {req.assignedOrganization && (
                      <span className="flex items-center gap-1 font-medium" style={{ color: 'var(--color-teal-700)' }}>
                        <Building2 size={14} />
                        <span>Assigned: {req.assignedOrganization.name}</span>
                      </span>
                    )}

                    <span>{req.itemsNeeded?.length || 0} items requested</span>
                  </div>
                </div>

                {/* View Details Action */}
                <div className="flex items-center gap-2" style={{ alignSelf: 'center' }}>
                  <Button
                    variant="secondary"
                    size="sm"
                    iconRight={<ChevronRight size={16} />}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedRequest(req);
                    }}
                  >
                    View Timeline
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* =========================================================================
          REQUEST TIMELINE & DETAILS MODAL
          ========================================================================= */}
      {selectedRequest && (
        <Modal
          isOpen={!!selectedRequest}
          onClose={() => setSelectedRequest(null)}
          title={`Request Timeline — #${selectedRequest.id}`}
          maxWidth="620px"
          footer={
            <Button onClick={() => setSelectedRequest(null)} variant="primary">
              Close Overview
            </Button>
          }
        >
          <div>
            <div className="flex items-center justify-between gap-2 flex-wrap" style={{ marginBottom: '1.25rem' }}>
              <div>
                <span className="text-xs font-semibold text-muted">Category</span>
                <p className="font-bold text-sm" style={{ color: 'var(--color-navy-900)' }}>{selectedRequest.category}</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-muted">Status</span>
                <div><StatusBadge status={selectedRequest.status} /></div>
              </div>
              <div>
                <span className="text-xs font-semibold text-muted">Location</span>
                <p className="text-sm font-medium">{selectedRequest.location}</p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'var(--bg-muted)',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem',
                border: '1px solid var(--border-subtle)'
              }}
            >
              <h4 style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '0.35rem' }}>Requested Relief Items:</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
                {selectedRequest.itemsNeeded?.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between">
                    <span>{item.item}</span>
                    <strong style={{ color: 'var(--color-navy-900)' }}>Qty: {item.qty}</strong>
                  </li>
                ))}
              </ul>
            </div>

            {selectedRequest.assignedOrganization && (
              <div
                style={{
                  backgroundColor: '#F0FDFA',
                  border: '1px solid #99F6E4',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  marginBottom: '1.5rem'
                }}
              >
                <div className="flex items-center gap-2" style={{ marginBottom: '0.25rem' }}>
                  <Building2 size={16} style={{ color: 'var(--color-teal-600)' }} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-teal-700)' }}>
                    {selectedRequest.assignedOrganization.name}
                  </span>
                  <Badge variant="teal" style={{ fontSize: '0.65rem' }}>
                    {selectedRequest.assignedOrganization.badge}
                  </Badge>
                </div>
                <p className="text-xs text-muted" style={{ margin: 0 }}>
                  Contact: {selectedRequest.assignedOrganization.contactPerson} ({selectedRequest.assignedOrganization.phone})
                </p>
              </div>
            )}

            {/* Timeline Milestones */}
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Verification & Coordination Milestones:
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', position: 'relative' }}>
                {selectedRequest.timeline?.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-primary-50)',
                        color: 'var(--color-primary-600)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        border: '1px solid var(--color-primary-200)'
                      }}
                    >
                      {idx + 1}
                    </div>

                    <div style={{ flex: 1, paddingBottom: '0.5rem', borderBottom: idx < selectedRequest.timeline.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                      <div className="flex items-center justify-between">
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-navy-900)' }}>
                          {step.step}
                        </span>
                        <span className="text-xs text-muted">{step.timestamp}</span>
                      </div>
                      <p className="text-xs text-muted" style={{ marginTop: '0.2rem', margin: 0 }}>
                        {step.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CitizenDashboard;
