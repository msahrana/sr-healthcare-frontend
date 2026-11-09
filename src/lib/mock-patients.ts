export interface Patient {
    id: string;
    name: string;
    email: string;
    contactNumber: string;
    appointments: number;
    lastVisit: string;
    status: 'Active' | 'Inactive';
}

const initialPatients: Patient[] = [
    {
        id: 'PAT-001',
        name: 'Mohammad Rahim',
        email: 'rahim@example.com',
        contactNumber: '+8801712345678',
        appointments: 12,
        lastVisit: '25 Sep 2026',
        status: 'Active',
    },
    {
        id: 'PAT-002',
        name: 'Nusrat Jahan',
        email: 'nusrat@example.com',
        contactNumber: '+8801812345678',
        appointments: 8,
        lastVisit: '24 Sep 2026',
        status: 'Active',
    },
    {
        id: 'PAT-003',
        name: 'Tanvir Ahmed',
        email: 'tanvir@example.com',
        contactNumber: '+8801912345678',
        appointments: 15,
        lastVisit: '22 Sep 2026',
        status: 'Active',
    },
    {
        id: 'PAT-004',
        name: 'Farhana Akter',
        email: 'farhana@example.com',
        contactNumber: '+8801612345678',
        appointments: 5,
        lastVisit: '18 Sep 2026',
        status: 'Inactive',
    },
    {
        id: 'PAT-005',
        name: 'Sabbir Hossain',
        email: 'sabbir@example.com',
        contactNumber: '+8801512345678',
        appointments: 21,
        lastVisit: '15 Sep 2026',
        status: 'Active',
    },
];

const firstNames = [
    'Arif',
    'Sadia',
    'Hasan',
    'Mim',
    'Rakib',
    'Ayesha',
    'Sakib',
    'Nadia',
    'Imran',
    'Tania',
];

const lastNames = [
    'Ahmed',
    'Rahman',
    'Islam',
    'Hossain',
    'Akter',
    'Khan',
    'Jahan',
    'Chowdhury',
    'Karim',
    'Begum',
];

export const patients: Patient[] = [
    ...initialPatients,
    ...Array.from({ length: 995 }, (_, index): Patient => {
        const number = index + 6;
        const firstName = firstNames[index % firstNames.length];
        const lastName = lastNames[index % lastNames.length];

        return {
            id: `PAT-${String(number).padStart(3, '0')}`,
            name: `${firstName} ${lastName}`,
            email: `patient${number}@example.com`,
            contactNumber: `+88017${String(10000000 + number).slice(1)}`,
            appointments: (number % 20) + 1,
            lastVisit: '20 Sep 2026',
            status: number % 4 === 0 ? 'Inactive' : 'Active',
        };
    }),
];
