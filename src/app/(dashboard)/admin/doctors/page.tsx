import {
    Stethoscope,
    UserRound,
} from 'lucide-react';

import {
    Card,
    CardContent,
} from '@/components/ui/card';

import DoctorsTable from '@/components/admin/doctors-table';
import { doctors } from '@/lib/mock-doctors';

const stats = [
    {
        title: 'Total Doctors',
        value: '124',
        icon: Stethoscope,
        iconClass: 'text-primary',
        bgClass: 'bg-primary/10',
    },
    {
        title: 'Active',
        value: '106',
        icon: UserRound,
        iconClass: 'text-green-600',
        bgClass: 'bg-green-500/10',
    },
    {
        title: 'Pending',
        value: '18',
        icon: Stethoscope,
        iconClass: 'text-yellow-600',
        bgClass: 'bg-yellow-500/10',
    },
    {
        title: 'Verified',
        value: '119',
        icon: UserRound,
        iconClass: 'text-blue-600',
        bgClass: 'bg-blue-500/10',
    },
];

const AdminDoctorsPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Doctors
                </h1>

                <p className="text-muted-foreground">
                    Manage registered doctors and monitor their account status.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <Card key={stat.title}>
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className={`rounded-lg p-3 ${stat.bgClass}`}>
                                    <Icon className={`size-5 ${stat.iconClass}`} />
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        {stat.title}
                                    </p>

                                    <p className="text-2xl font-bold">
                                        {stat.value}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Virtualized Doctors Table */}
            <DoctorsTable doctors={doctors} />
        </div>
    );
};

export default AdminDoctorsPage;