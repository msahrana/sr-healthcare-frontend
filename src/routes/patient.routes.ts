const prefix = '/patient';

export const patientRoutes = [
    {
        title: 'Bookings',
        items: [
            {
                title: 'Overview',
                url: `${prefix}`,
            },
            {
                title: 'My Appointments',
                url: `${prefix}/my-appointment-list`,
            },
        ],
    },
    {
        title: 'App Settings',
        items: [
            {
                title: 'Routing',
                url: '#',
            },
            {
                title: 'Data Fetching',
                url: '#',
                isActive: true,
            },
        ],
    },
];
