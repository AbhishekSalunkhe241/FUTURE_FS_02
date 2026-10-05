import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  MapPin, 
  Building2, 
  ChevronRight, 
  PlusCircle, 
  Filter 
} from 'lucide-react';
import Card from '../../components/Card';
import Button from '../../components/Button';
import Badge from '../../components/Badge';
import StatusBadge from '../../components/StatusBadge';
import Modal from '../../components/Modal';
import { mockRequests } from '../../data/mockRequests';

export const MyRequests = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [activeRequest, setActiveRequest] = useState(null);

  const filtered = mockRequests.filter((req) => {
    const matchesSearch = req.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          req.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          req.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || req.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ maxWidth: '1080px', margin: '0 auto' }} className="animate-fade-in">
      <div className="flex items-center justify-between flex-wrap gap-3" style={{ marginBottom: '1.75rem' }}>
        <div>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-navy-900)' }}>
            My Recovery Requests
          </h1>
          <p className="text-muted text-sm">
            View submitted tickets, track on-ground delivery progress, and check verification milestones.
          </p>
        </div>

        <Button to="/citizen/request-help" variant="primary" icon={<PlusCircle size={18} />}>
          New Request
        </Button>
      </div>

      {/* Filters Bar */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
          padding: '1rem',
          marginBottom: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}
      >
        <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
          <Search size={16} style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }} />
          <input
            type="text"
            placeholder="Search by ID, keyword, or locality..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input text-sm"
            style={{ paddingLeft: '2.25rem' }}
          />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted font-medium">Status:</span>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="form-select text-xs"
            style={{ padding: '0.45rem 0.75rem', borderRadius: 'var(--radius-md)' }}
          >
            <option value="All">All Statuses</option>
            <option value="Under Verification">Under Verification</option>
            <option value="Verified">Verified</option>
            <option value="Assistance In Progress">Assistance In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Requests List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {filtered.map((req) => (
          <Card key={req.id} hoverable onClick={() => setActiveRequest(req)}>
            <div className="flex items-start justify-between gap-4 md-flex-col">
              <div style={{ flex: 1 }}>
                <div className="flex items-center gap-2 flex-wrap" style={{ marginBottom: '0.4rem' }}>
                  <span style={{ fontWeight: 800, color: 'var(--color-primary-700)', fontSize: '0.9rem' }}>
                    #{req.id}
                  </span>
                  <Badge variant="slate">{req.category}</Badge>
                  <StatusBadge status={req.status} />
                  <Badge variant={req.priority === 'High' ? 'red' : 'amber'}>
                    {req.priority} Priority
                  </Badge>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy-900)', marginBottom: '0.35rem' }}>
                  {req.title}
                </h3>

                <p className="text-muted text-sm" style={{ lineHeight: 1.5, marginBottom: '0.75rem' }}>
                  {req.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap text-xs text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{req.location}</span>
                  </span>

                  {req.assignedOrganization && (
                    <span className="flex items-center gap-1 font-semibold" style={{ color: 'var(--color-teal-700)' }}>
                      <Building2 size={14} />
                      <span>{req.assignedOrganization.name}</span>
                    </span>
                  )}
                </div>
              </div>

              <div style={{ alignSelf: 'center' }}>
                <Button
                  variant="secondary"
                  size="sm"
                  iconRight={<ChevronRight size={16} />}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveRequest(req);
                  }}
                >
                  Details
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {filtered.length === 0 && (
          <Card>
            <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
              <p className="text-muted text-sm">No requests found matching your filter criteria.</p>
            </div>
          </Card>
        )}
      </div>

      {/* Modal */}
      {activeRequest && (
        <Modal
          isOpen={!!activeRequest}
          onClose={() => setActiveRequest(null)}
          title={`Request Details #${activeRequest.id}`}
          footer={
            <Button onClick={() => setActiveRequest(null)} variant="primary">
              Close
            </Button>
          }
        >
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <div className="flex items-center gap-2" style={{ marginBottom: '0.35rem' }}>
                <StatusBadge status={activeRequest.status} />
                <Badge variant="slate">{activeRequest.category}</Badge>
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{activeRequest.title}</h3>
              <p className="text-sm text-muted" style={{ marginTop: '0.25rem' }}>{activeRequest.description}</p>
            </div>

            <div style={{ backgroundColor: 'var(--bg-muted)', padding: '1rem', borderRadius: 'var(--radius-md)', marginBottom: '1rem' }}>
              <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                Requested Kit Items:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.85rem' }}>
                {activeRequest.itemsNeeded?.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{item.item}</span>
                    <strong>Qty: {item.qty}</strong>
                  </li>
                ))}
              </ul>
            </div>

            <h4 style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              Coordination Log:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {activeRequest.timeline?.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <span style={{ color: 'var(--color-primary-600)', fontWeight: 'bold' }}>•</span>
                  <div>
                    <span className="font-bold">{step.step}</span> ({step.timestamp}): {step.note}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default MyRequests;
