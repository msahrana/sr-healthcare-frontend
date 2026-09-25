const prefix = '/admin';

export const adminRoutes = [
    {
        title: 'Management',
        items: [
            {
                title: 'Overview',
                url: `${prefix}`,
            },
            {
                title: 'Doctor Approval',
                url: `${prefix}/approve-doctor`,
            },
            {
                title: 'Doctors',
                url: `${prefix}/doctors`,
            },
            {
                title: 'Patients',
                url: `${prefix}/patients`,
            },
        ],
    },
    {
        title: 'Appointments',
        items: [
            {
                title: 'Appointments',
                url: `${prefix}/appointments`,
            },
            {
                title: 'Prescriptions',
                url: `${prefix}/prescriptions`,
            },
            {
                title: 'Medical Records',
                url: `${prefix}/medical-records`,
            },
        ],
    },
    {
        title: 'Finance & Reports',
        items: [
            {
                title: 'Payments',
                url: `${prefix}/payments`,
            },
            {
                title: 'Analytics',
                url: `${prefix}/analytics`,
            },
        ],
    },
];
