import {
    Activity,
    CalendarCheck,
    Clock3,
    FileText,
    Stethoscope,
    UserCheck,
    UserRound,
    Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const stats = [
    {
        title: 'Total Doctors',
        value: '124',
        description: 'Registered doctors',
        icon: Stethoscope,
    },
    {
        title: 'Pending Approvals',
        value: '18',
        description: 'Doctors waiting for approval',
        icon: UserCheck,
    },
    {
        title: 'Total Patients',
        value: '2,845',
        description: 'Registered patients',
        icon: Users,
    },
    {
        title: 'Appointments',
        value: '356',
        description: 'Appointments this month',
        icon: CalendarCheck,
    },
];

const recentActivities = [
    {
        title: 'New doctor registration',
        description: 'Dr. Sadiatul Islam submitted an application.',
        time: '10 minutes ago',
        status: 'Pending',
    },
    {
        title: 'Doctor approved',
        description: 'Dr. Arif Hossain has been approved.',
        time: '32 minutes ago',
        status: 'Approved',
    },
    {
        title: 'New patient registered',
        description: 'A new patient account was created.',
        time: '1 hour ago',
        status: 'New',
    },
    {
        title: 'Appointment completed',
        description: 'An online consultation was completed.',
        time: '2 hours ago',
        status: 'Completed',
    },
];

const AdminPage = () => {
    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Admin Dashboard
                </h1>
                <p className="text-muted-foreground">
                    Manage doctors, patients, appointments, and healthcare
                    operations from one place.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <Card key={stat.title}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.title}
                                </CardTitle>

                                <div className="rounded-lg bg-primary/10 p-2">
                                    <Icon className="size-5 text-primary" />
                                </div>
                            </CardHeader>

                            <CardContent>
                                <div className="text-2xl font-bold">
                                    {stat.value}
                                </div>

                                <p className="mt-1 text-xs text-muted-foreground">
                                    {stat.description}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Main Dashboard */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Overview */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Healthcare Overview</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex items-center gap-4 rounded-lg border p-4">
                                <div className="rounded-lg bg-blue-500/10 p-3">
                                    <Clock3 className="size-5 text-blue-600" />
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Pending Appointments
                                    </p>
                                    <p className="text-xl font-semibold">42</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg border p-4">
                                <div className="rounded-lg bg-green-500/10 p-3">
                                    <UserCheck className="size-5 text-green-600" />
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Active Doctors
                                    </p>
                                    <p className="text-xl font-semibold">106</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg border p-4">
                                <div className="rounded-lg bg-purple-500/10 p-3">
                                    <FileText className="size-5 text-purple-600" />
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Prescriptions
                                    </p>
                                    <p className="text-xl font-semibold">
                                        1,284
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-lg border p-4">
                                <div className="rounded-lg bg-orange-500/10 p-3">
                                    <Activity className="size-5 text-orange-600" />
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Online Consultations
                                    </p>
                                    <p className="text-xl font-semibold">186</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Doctor Approval */}
                <Card>
                    <CardHeader>
                        <CardTitle>Doctor Approval</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-6 text-center">
                            <div className="mb-3 rounded-full bg-primary/10 p-3">
                                <Stethoscope className="size-6 text-primary" />
                            </div>

                            <p className="text-3xl font-bold">18</p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Doctors waiting for approval
                            </p>

                            <a
                                href="/admin/approve-doctor"
                                className="mt-4 text-sm font-medium text-primary hover:underline"
                            >
                                Review applications →
                            </a>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="space-y-5">
                        {recentActivities.map((activity) => (
                            <div
                                key={`${activity.title}-${activity.time}`}
                                className="flex items-start justify-between gap-4"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 rounded-full bg-primary/10 p-2">
                                        <UserRound className="size-4 text-primary" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium">
                                            {activity.title}
                                        </p>

                                        <p className="text-sm text-muted-foreground">
                                            {activity.description}
                                        </p>

                                        <p className="mt-1 text-xs text-muted-foreground">
                                            {activity.time}
                                        </p>
                                    </div>
                                </div>

                                <Badge variant="secondary">
                                    {activity.status}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminPage;
