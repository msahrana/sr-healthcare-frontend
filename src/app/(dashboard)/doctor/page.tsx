import {
    Activity,
    CalendarDays,
    Clock3,
    FileText,
    Stethoscope,
    Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const stats = [
    {
        title: 'Today’s Appointments',
        value: '08',
        description: '2 pending consultations',
        icon: CalendarDays,
    },
    {
        title: 'Total Patients',
        value: '124',
        description: '12 new this month',
        icon: Users,
    },
    {
        title: 'Completed Consultations',
        value: '96',
        description: 'This month',
        icon: Stethoscope,
    },
    {
        title: 'Prescriptions',
        value: '78',
        description: 'Issued this month',
        icon: FileText,
    },
];

const upcomingAppointments = [
    {
        patient: 'Sadiatut Taiyeba Siyana',
        type: 'Video Consultation',
        time: '10:00 AM',
        status: 'Confirmed',
    },
    {
        patient: 'Tawhid Islam Rayan',
        type: 'Follow-up Consultation',
        time: '11:30 AM',
        status: 'Confirmed',
    },
    {
        patient: 'Md. Rahim Uddin',
        type: 'General Consultation',
        time: '01:00 PM',
        status: 'Pending',
    },
    {
        patient: 'Most. Ayesha Akter',
        type: 'Follow-up Consultation',
        time: '03:30 PM',
        status: 'Confirmed',
    },
];

const DoctorPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div>
                <div className="flex items-center gap-2">
                    <Activity className="size-6 text-primary" />
                    <h1 className="text-2xl font-semibold tracking-tight">
                        Doctor Dashboard
                    </h1>
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                    Manage your appointments, patients, schedules, and
                    consultations from one place.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                        <Card key={stat.title}>
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {stat.title}
                                </CardTitle>

                                <Icon className="size-5 text-muted-foreground" />
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

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-7">
                {/* Upcoming Appointments */}
                <Card className="lg:col-span-4">
                    <CardHeader>
                        <CardTitle>Upcoming Appointments</CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Your upcoming patient consultations.
                        </p>
                    </CardHeader>

                    <CardContent>
                        <div className="space-y-4">
                            {upcomingAppointments.map((appointment) => (
                                <div
                                    key={`${appointment.patient}-${appointment.time}`}
                                    className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Users className="size-5 text-primary" />
                                        </div>

                                        <div>
                                            <p className="font-medium">
                                                {appointment.patient}
                                            </p>

                                            <p className="text-sm text-muted-foreground">
                                                {appointment.type}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                                        <div className="flex items-center gap-1 text-sm font-medium">
                                            <Clock3 className="size-4 text-muted-foreground" />
                                            {appointment.time}
                                        </div>

                                        <Badge
                                            variant={
                                                appointment.status ===
                                                'Confirmed'
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                        >
                                            {appointment.status}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Doctor Summary */}
                <Card className="lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Today’s Summary</CardTitle>
                        <p className="text-sm text-muted-foreground">
                            Your consultation activity for today.
                        </p>
                    </CardHeader>

                    <CardContent>
                        <div className="space-y-5">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <CalendarDays className="size-5 text-primary" />

                                    <div>
                                        <p className="text-sm font-medium">
                                            Scheduled
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Appointments today
                                        </p>
                                    </div>
                                </div>

                                <span className="text-lg font-semibold">
                                    08
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Stethoscope className="size-5 text-primary" />

                                    <div>
                                        <p className="text-sm font-medium">
                                            Completed
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Consultations completed
                                        </p>
                                    </div>
                                </div>

                                <span className="text-lg font-semibold">
                                    05
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <Clock3 className="size-5 text-primary" />

                                    <div>
                                        <p className="text-sm font-medium">
                                            Next Consultation
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Upcoming appointment
                                        </p>
                                    </div>
                                </div>

                                <span className="text-lg font-semibold">
                                    10:00 AM
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <FileText className="size-5 text-primary" />

                                    <div>
                                        <p className="text-sm font-medium">
                                            Prescriptions
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            Issued today
                                        </p>
                                    </div>
                                </div>

                                <span className="text-lg font-semibold">
                                    04
                                </span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <p className="text-sm text-muted-foreground">
                        Quickly access your most frequently used doctor
                        features.
                    </p>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        <Link
                            href="/doctor/schedules"
                            className="rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <CalendarDays className="mb-3 size-5 text-primary" />

                            <p className="font-medium">Manage Schedule</p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Create and manage your availability.
                            </p>
                        </Link>

                        <Link
                            href="/doctor/appointments"
                            className="rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <Stethoscope className="mb-3 size-5 text-primary" />

                            <p className="font-medium">Appointments</p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                View and manage patient appointments.
                            </p>
                        </Link>

                        <Link
                            href="/doctor/patients"
                            className="rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <Users className="mb-3 size-5 text-primary" />

                            <p className="font-medium">My Patients</p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                View your patient information and history.
                            </p>
                        </Link>

                        <Link
                            href="/doctor/prescriptions"
                            className="rounded-lg border p-4 transition-colors hover:bg-muted"
                        >
                            <FileText className="mb-3 size-5 text-primary" />

                            <p className="font-medium">Prescriptions</p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Create and review patient prescriptions.
                            </p>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DoctorPage;
