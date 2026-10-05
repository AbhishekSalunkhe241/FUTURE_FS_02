import React from 'react';
import ComingSoon from '../components/ComingSoon';

export const AdminPlaceholder = () => {
  return (
    <ComingSoon
      title="District Authority Coordination Desk"
      day="Day 3"
      role="admin"
      description="The Authority Desk provides District Disaster Management Authorities (DDMA) and State Rehabilitation Commissioners with macro analytics, inter-agency allocations, and incident closure authority."
      plannedFeatures={[
        'Macro disaster metrics & geographical heatmaps of unfulfilled needs',
        'Official NGO accreditation and credential verification approval queue',
        'Inter-agency resource reconciliation between State agencies and civil society',
        'Long-term rehabilitation program handover and government compensation data exports'
      ]}
    />
  );
};

export default AdminPlaceholder;
