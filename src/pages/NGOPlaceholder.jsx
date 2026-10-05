import React from 'react';
import ComingSoon from '../components/ComingSoon';

export const NGOPlaceholder = () => {
  return (
    <ComingSoon
      title="Verified NGO Relief Operations Desk"
      day="Day 2"
      role="ngo"
      description="The NGO Relief Operations Desk gives verified non-profit organizations real-time oversight of verified community distress requests, warehouse inventory levels, and field truck dispatches."
      plannedFeatures={[
        'Live queue of human-verified citizen recovery tickets',
        'Relief supply warehouse tracker (rations, tarpaulins, medicines)',
        'Zero-duplication geo-cluster mapping for dispatch trucks',
        'Distribution confirmation receipt uploads and 80G audit logging'
      ]}
    />
  );
};

export default NGOPlaceholder;
