export interface Doctor {
    id: string;
    name: string;
    email: string;
    specialty: string;
    experience: string;
    patients: number;
    status: 'Active' | 'Inactive' | 'Pending';
    verified: boolean;
}

const initialDoctors: Doctor[] = [
    {
        id: 'DOC-001',
        name: 'Dr. Sadiatul Islam',
        email: 'sadiatul@example.com',
        specialty: 'Cardiology',
        experience: '8 Years',
        patients: 428,
        status: 'Active',
        verified: true,
    },
    {
        id: 'DOC-002',
        name: 'Dr. Arif Hossain',
        email: 'arif@example.com',
        specialty: 'Neurology',
        experience: '6 Years',
        patients: 315,
        status: 'Active',
        verified: true,
    },
    {
        id: 'DOC-003',
        name: 'Dr. Nusrat Jahan',
        email: 'nusrat@example.com',
        specialty: 'Dermatology',
        experience: '5 Years',
        patients: 267,
        status: 'Active',
        verified: true,
    },
    {
        id: 'DOC-004',
        name: 'Dr. Tanvir Ahmed',
        email: 'tanvir@example.com',
        specialty: 'Medicine',
        experience: '4 Years',
        patients: 189,
        status: 'Pending',
        verified: false,
    },
    {
        id: 'DOC-005',
        name: 'Dr. Farhana Rahman',
        email: 'farhana@example.com',
        specialty: 'Gynecology',
        experience: '7 Years',
        patients: 356,
        status: 'Inactive',
        verified: true,
    },
];

const firstNames = [
    'Aminul',
    'Nusrat',
    'Farhan',
    'Samira',
    'Mahmud',
    'Tasnim',
    'Rakib',
    'Sadia',
    'Imran',
    'Maliha',
];

const lastNames = [
    'Rahman',
    'Hossain',
    'Ahmed',
    'Islam',
    'Akter',
    'Chowdhury',
    'Khan',
    'Uddin',
    'Hasan',
    'Karim',
];

const specialties = [
    'Cardiology',
    'Neurology',
    'Dermatology',
    'Medicine',
    'Gynecology',
    'Pediatrics',
    'Orthopedics',
    'Psychiatry',
];

const statuses: Doctor['status'][] = ['Active', 'Inactive', 'Pending'];

const generatedDoctors: Doctor[] = Array.from({ length: 995 }, (_, index) => {
    const number = index + 6;
    const firstName = firstNames[index % firstNames.length];
    const lastName = lastNames[index % lastNames.length];

    return {
        id: `DOC-${String(number).padStart(3, '0')}`,
        name: `Dr. ${firstName} ${lastName} ${number}`,
        email: `doctor${number}@example.com`,
        specialty: specialties[index % specialties.length],
        experience: `${(index % 15) + 1} Years`,
        patients: 50 + ((index * 37) % 500),
        status: statuses[index % statuses.length],
        verified: index % 4 !== 0,
    };
});

// 5 existing demo records + 995 synthetic test records = 1,000
export const doctors: Doctor[] = [...initialDoctors, ...generatedDoctors];
