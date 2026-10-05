export const mockRequests = [
  {
    id: 'RQ-1024',
    category: 'Water & Food',
    title: 'Clean Drinking Water & Dry Ration Kits for 40 Families',
    description: 'Post-flood contamination of municipal supply in Sector 12. Urgent need for 200L potable water canisters and non-perishable grain rations for displaced households currently housed in community hall.',
    location: 'Sector 12, Panvel, Maharashtra',
    priority: 'High',
    status: 'Under Verification',
    createdAt: '2026-10-04T09:30:00Z',
    requester: {
      name: 'Rahul Sharma',
      phone: '+91 98201 44521',
      type: 'Community Representative',
      affectedCount: 42,
    },
    assignedOrganization: null,
    itemsNeeded: [
      { item: 'Potable Water Cans (20L)', qty: 40 },
      { item: 'Dry Ration Kits (Rice, Dal, Oil)', qty: 40 },
      { item: 'Water Purification Chlorine Tablets', qty: 100 }
    ],
    timeline: [
      { step: 'Submitted', timestamp: 'Oct 04, 09:30 AM', note: 'Request lodged via Citizen Portal with geotagged community center.' },
      { step: 'Under Verification', timestamp: 'Oct 04, 11:15 AM', note: 'Local field coordinator assigned for rapid telephone & neighborhood validation.' }
    ]
  },
  {
    id: 'RQ-1021',
    category: 'Medical Assistance',
    title: 'Post-Flood Chronic Care Refills & First Aid Supplies',
    description: 'Elderly citizens displaced from low-lying areas have run out of essential diabetes and hypertension prescriptions. Minor water-borne lacerations require sterile dressings and antiseptics.',
    location: 'Sector 4, Navi Mumbai, Maharashtra',
    priority: 'Medium',
    status: 'Assistance In Progress',
    createdAt: '2026-10-03T14:15:00Z',
    requester: {
      name: 'Rahul Sharma',
      phone: '+91 98201 44521',
      type: 'Neighborhood Resident',
      affectedCount: 18,
    },
    assignedOrganization: {
      id: 'org-2',
      name: 'Seva Medical Relief Corps',
      contactPerson: 'Dr. Anita Joshi',
      phone: '+91 22 2770 1212',
      badge: 'Verified Health Partner'
    },
    itemsNeeded: [
      { item: 'First-aid & antiseptic wound kits', qty: 25 },
      { item: 'Chronic disease refill packs', qty: 15 },
      { item: 'ORS Electrolyte Packets', qty: 150 }
    ],
    timeline: [
      { step: 'Submitted', timestamp: 'Oct 03, 02:15 PM', note: 'Request logged for medical triage support.' },
      { step: 'Verified', timestamp: 'Oct 03, 03:45 PM', note: 'Verified by Taluka Medical Officer.' },
      { step: 'Matched', timestamp: 'Oct 03, 05:00 PM', note: 'Assigned to Seva Medical Relief Corps mobile ambulance unit.' },
      { step: 'Assistance In Progress', timestamp: 'Oct 04, 08:30 AM', note: 'Medical team on ground conducting health checks and dispensing medications.' }
    ]
  },
  {
    id: 'RQ-1018',
    category: 'Shelter Support',
    title: 'Waterproof Tarpaulins & Emergency Bedding Kits',
    description: 'Severe roof tile damage from high velocity winds during cyclone landfall. Rainwater seeped into living quarters. Temporary heavy-duty waterproof tarpaulins and dry sleeping mats required.',
    location: 'Pen Taluka, Raigad, Maharashtra',
    priority: 'Medium',
    status: 'Completed',
    createdAt: '2026-09-29T10:00:00Z',
    requester: {
      name: 'Rahul Sharma',
      phone: '+91 98201 44521',
      type: 'Citizen',
      affectedCount: 6,
    },
    assignedOrganization: {
      id: 'org-1',
      name: 'Helping Hands Foundation',
      contactPerson: 'Karan Deshmukh',
      phone: '+91 22 2745 8890',
      badge: 'Tier 1 Verified NGO'
    },
    itemsNeeded: [
      { item: 'Heavy-duty Tarpaulin Sheets (18x24 ft)', qty: 4 },
      { item: 'Waterproof Ground Mats & Blankets', qty: 8 }
    ],
    timeline: [
      { step: 'Submitted', timestamp: 'Sep 29, 10:00 AM', note: 'Request filed with shelter damage photos.' },
      { step: 'Verified', timestamp: 'Sep 29, 11:30 AM', note: 'Verification confirmed by village revenue assistant.' },
      { step: 'Matched', timestamp: 'Sep 29, 01:00 PM', note: 'Helping Hands Foundation allocated warehouse stock.' },
      { step: 'Assistance In Progress', timestamp: 'Sep 30, 09:00 AM', note: 'Delivery truck dispatched from Panvel logistics hub.' },
      { step: 'Completed', timestamp: 'Sep 30, 04:30 PM', note: 'Handed over to family with signed acknowledgment receipt.' }
    ]
  },
  {
    id: 'RQ-1015',
    category: 'Sanitation & Hygiene',
    title: 'Disinfectant Sprays, Lime Powder & Family Hygiene Kits',
    description: 'Receding floodwaters left silt and stagnant water pools in residential alleyways. Lime powder and bleaching agents required to prevent vector and waterborne contamination.',
    location: 'Karjat Central, Maharashtra',
    priority: 'Low',
    status: 'Verified',
    createdAt: '2026-10-02T16:20:00Z',
    requester: {
      name: 'Rahul Sharma',
      phone: '+91 98201 44521',
      type: 'Resident Welfare Committee',
      affectedCount: 30,
    },
    assignedOrganization: null,
    itemsNeeded: [
      { item: 'Bleaching Powder & Lime Bags (25kg)', qty: 10 },
      { item: 'Family Hygiene Packets (Soap, Sanitizer, Napkins)', qty: 35 }
    ],
    timeline: [
      { step: 'Submitted', timestamp: 'Oct 02, 04:20 PM', note: 'Community request submitted.' },
      { step: 'Verified', timestamp: 'Oct 03, 10:00 AM', note: 'Verified by Municipal Sanitation Inspector. Pending NGO matching.' }
    ]
  }
];

export const mockCategories = [
  { id: 'water-food', name: 'Water & Food', icon: 'Droplets', description: 'Clean drinking water, non-perishable rations, baby formula' },
  { id: 'medical', name: 'Medical Assistance', icon: 'HeartPulse', description: 'Essential prescription refills, first aid, trauma supplies' },
  { id: 'shelter', name: 'Shelter Support', icon: 'Home', description: 'Tarpaulins, emergency bedding, structural stabilization tools' },
  { id: 'sanitation', name: 'Sanitation & Hygiene', icon: 'Sparkles', description: 'Disinfectants, sanitation supplies, hygiene kits' },
  { id: 'power', name: 'Power & Communication', icon: 'Zap', description: 'Solar lamps, emergency battery banks, charging stations' },
  { id: 'debris', name: 'Debris & Access', icon: 'Truck', description: 'Clearing access paths, silt removal, safety barricades' },
];

export const requestStatusList = [
  { key: 'Submitted', label: 'Submitted', color: 'blue', desc: 'Request logged into ResQConnect registry' },
  { key: 'Under Verification', label: 'Under Verification', color: 'amber', desc: 'Field coordinator validating need & location' },
  { key: 'Verified', label: 'Verified', color: 'teal', desc: 'Validated by local authorities or field team' },
  { key: 'Matched', label: 'Matched', color: 'indigo', desc: 'Assigned to qualified relief NGO or volunteer group' },
  { key: 'Assistance In Progress', label: 'In Progress', color: 'purple', desc: 'Resources dispatched or team on site' },
  { key: 'Completed', label: 'Completed', color: 'green', desc: 'Assistance delivered and signed off' },
  { key: 'Closed', label: 'Closed', color: 'slate', desc: 'Request fulfilled or resolved' }
];
