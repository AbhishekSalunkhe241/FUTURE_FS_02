import React from 'react';
import ComingSoon from '../components/ComingSoon';

export const VolunteerPlaceholder = () => {
  return (
    <ComingSoon
      title="Volunteer Mobilization Desk"
      day="Day 2"
      role="volunteer"
      description="The Volunteer Mobilization Portal connects accredited field responders with real-time tasks: last-mile delivery, first-aid triage, well disinfection, and community surveys."
      plannedFeatures={[
        'Interactive skill matching & task queue (Medical, Logistics, Porterage)',
        'Check-in & dispatch coordination in active disaster zones',
        'Direct connection with verified NGO field coordinators',
        'Safety alerts & road accessibility advisories'
      ]}
    />
  );
};

export default VolunteerPlaceholder;
