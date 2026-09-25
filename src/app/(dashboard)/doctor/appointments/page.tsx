import { CalendarDays, Clock3, Search, Stethoscope, Video } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

const appointments = [
    {
        id: 'APT-001',
        patient: 'Sadiatut Taiyeba Siyana',
        type: 'Video Consultation',
        date: '25 Sep 2026',
        time: '10:00 AM',
        status: 'CONFIRMED',
    },
    {
        id: 'APT-002',
        patient: 'Tawhid Islam Rayan',
        type: 'Follow-up Consultation',
        date: '25 Sep 2026',
        time: '11:30 AM',
        status: 'CONFIRMED',
    },
    {
        id: 'APT-003',
        patient: 'Md. Rahim Uddin',
        type: 'General Consultation',
        date: '25 Sep 2026',
        time: '01:00 PM',
        status: 'PENDING',
    },
    {
        id: 'APT-004',
        patient: 'Most. Ayesha Akter',
        type: 'Follow-up Consultation',
        date: '25 Sep 2026',
        time: '03:30 PM',
        status: 'CONFIRMED',
    },
    {
        id: 'APT-005',
        patient: 'Abdullah Al Mamun',
        type: 'Video Consultation',
        date: '26 Sep 2026',
        time: '09:30 AM',
        status: 'PENDING',
    },
    {
        id: 'APT-006',
        patient: 'Nusrat Jahan',
        type: 'General Consultation',
        date: '26 Sep 2026',
        time: '11:00 AM',
        status: 'CANCELLED',
    },
];

const DoctorAppointmentsPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <CalendarDays className="size-6 text-primary" />

                        <h1 className="text-2xl font-semibold tracking-tight">
                            Appointments
                        </h1>
                    </div>

                    <p className="mt-1 text-sm text-muted-foreground">
                        View and manage your patient appointments and
                        consultations.
                    </p>
                </div>

                <Button>
                    <Link href={'/doctor/schedules'}>
                        <div className="flex">
                            <CalendarDays className="mr-2 size-4" />
                            View Schedule
                        </div>
                    </Link>
                </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Total Appointments</CardDescription>
                        <CardTitle className="text-2xl">24</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            This month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Today</CardDescription>
                        <CardTitle className="text-2xl">08</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Scheduled today
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Pending</CardDescription>
                        <CardTitle className="text-2xl">03</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Awaiting confirmation
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Completed</CardDescription>
                        <CardTitle className="text-2xl">18</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            This month
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Appointment List */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle>All Appointments</CardTitle>

                            <CardDescription>
                                Manage your upcoming and previous appointments.
                            </CardDescription>
                        </div>

                        <div className="relative w-full md:w-72">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search patient..."
                                className="pl-9"
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="mb-5 flex flex-wrap gap-2">
                        <Button size="sm">All</Button>

                        <Button variant="outline" size="sm">
                            Pending
                        </Button>

                        <Button variant="outline" size="sm">
                            Confirmed
                        </Button>

                        <Button variant="outline" size="sm">
                            Completed
                        </Button>

                        <Button variant="outline" size="sm">
                            Cancelled
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {appointments.map((appointment) => (
                            <div
                                key={appointment.id}
                                className="rounded-xl border p-4 transition-colors hover:bg-muted/40"
                            >
                                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                    {/* Patient */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Stethoscope className="size-5 text-primary" />
                                        </div>

                                        <div>
                                            <p className="font-medium">
                                                {appointment.patient}
                                            </p>

                                            <p className="text-xs text-muted-foreground">
                                                {appointment.id}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Appointment Information */}
                                    <div className="grid gap-3 sm:grid-cols-3 lg:min-w-125">
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="size-4 text-muted-foreground" />

                                            <div>
                                                <p className="text-xs text-muted-foreground">
                                                    Date
                                                </p>

                                                <p className="text-sm font-medium">
                                                    {appointment.date}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Clock3 className="size-4 text-muted-foreground" />

                                            <div>
                                                <p className="text-xs text-muted-foreground">
                                                    Time
                                                </p>

                                                <p className="text-sm font-medium">
                                                    {appointment.time}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="mb-1 text-xs text-muted-foreground">
                                                Type
                                            </p>

                                            <div className="flex items-center gap-1.5 text-sm font-medium">
                                                {appointment.type ===
                                                    'Video Consultation' && (
                                                    <Video className="size-4 text-primary" />
                                                )}

                                                {appointment.type}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Status + Action */}
                                    <div className="flex items-center gap-3">
                                        <Badge
                                            variant={
                                                appointment.status ===
                                                'CONFIRMED'
                                                    ? 'default'
                                                    : appointment.status ===
                                                        'PENDING'
                                                      ? 'secondary'
                                                      : 'outline'
                                            }
                                        >
                                            {appointment.status}
                                        </Badge>

                                        {appointment.status === 'CONFIRMED' && (
                                            <Button size="sm">
                                                <Video className="mr-2 size-4" />
                                                Join Meet
                                            </Button>
                                        )}

                                        {appointment.status === 'PENDING' && (
                                            <Button size="sm" variant="outline">
                                                Review
                                            </Button>
                                        )}

                                        {appointment.status === 'CANCELLED' && (
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                disabled
                                            >
                                                Cancelled
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DoctorAppointmentsPage;
