const prefix = '/dashboard';

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
                url: `${prefix}/my-appointments`,
            },
        ],
    },

    {
        title: 'Account',
        items: [
            {
                title: 'Profile',
                url: `${prefix}/profile`,
            },
            {
                title: 'Settings',
                url: `${prefix}/settings`,
            },
        ],
    },
];
