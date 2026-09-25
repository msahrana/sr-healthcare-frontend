import {
    CalendarDays,
    CheckCircle2,
    ChevronRight,
    Clock3,
    FileText,
    Search,
    Stethoscope,
    UserRound,
    Video,
} from 'lucide-react';

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

const consultations = [
    {
        id: 'CON-001',
        patient: 'Sadiatut Taiyeba Siyana',
        type: 'Video Consultation',
        date: '25 Sep 2026',
        time: '10:00 AM',
        status: 'WAITING',
    },
    {
        id: 'CON-002',
        patient: 'Tawhid Islam Rayan',
        type: 'Follow-up Consultation',
        date: '25 Sep 2026',
        time: '11:30 AM',
        status: 'SCHEDULED',
    },
    {
        id: 'CON-003',
        patient: 'Md. Rahim Uddin',
        type: 'General Consultation',
        date: '25 Sep 2026',
        time: '01:00 PM',
        status: 'SCHEDULED',
    },
    {
        id: 'CON-004',
        patient: 'Most. Ayesha Akter',
        type: 'Follow-up Consultation',
        date: '25 Sep 2026',
        time: '03:30 PM',
        status: 'IN_PROGRESS',
    },
    {
        id: 'CON-005',
        patient: 'Abdullah Al Mamun',
        type: 'Video Consultation',
        date: '24 Sep 2026',
        time: '04:00 PM',
        status: 'COMPLETED',
    },
    {
        id: 'CON-006',
        patient: 'Nusrat Jahan',
        type: 'General Consultation',
        date: '23 Sep 2026',
        time: '11:00 AM',
        status: 'COMPLETED',
    },
];

const DoctorConsultationsPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div>
                <div className="flex items-center gap-2">
                    <Stethoscope className="size-6 text-primary" />

                    <h1 className="text-2xl font-semibold tracking-tight">
                        Consultations
                    </h1>
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                    Manage your patient consultations and online appointments.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>
                            Today&apos;s Consultations
                        </CardDescription>
                        <CardTitle className="text-2xl">08</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Scheduled for today
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Waiting</CardDescription>
                        <CardTitle className="text-2xl">02</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Patients waiting
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>In Progress</CardDescription>
                        <CardTitle className="text-2xl">01</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Active consultation
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Completed</CardDescription>
                        <CardTitle className="text-2xl">42</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            This month
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Consultation List */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle>Consultation List</CardTitle>

                            <CardDescription>
                                View and manage your patient consultations.
                            </CardDescription>
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search patient..."
                                className="pl-9"
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    {/* Filters */}
                    <div className="mb-5 flex flex-wrap gap-2">
                        <Button size="sm">All</Button>

                        <Button variant="outline" size="sm">
                            Scheduled
                        </Button>

                        <Button variant="outline" size="sm">
                            Waiting
                        </Button>

                        <Button variant="outline" size="sm">
                            In Progress
                        </Button>

                        <Button variant="outline" size="sm">
                            Completed
                        </Button>
                    </div>

                    {/* Consultation Items */}
                    <div className="space-y-4">
                        {consultations.map((consultation) => (
                            <div
                                key={consultation.id}
                                className="rounded-xl border p-4 transition-colors hover:bg-muted/40"
                            >
                                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                                    {/* Patient */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <UserRound className="size-5 text-primary" />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="font-medium">
                                                    {consultation.patient}
                                                </p>

                                                <Badge
                                                    variant={
                                                        consultation.status ===
                                                        'COMPLETED'
                                                            ? 'outline'
                                                            : consultation.status ===
                                                                'IN_PROGRESS'
                                                              ? 'default'
                                                              : 'secondary'
                                                    }
                                                >
                                                    {consultation.status.replace(
                                                        '_',
                                                        ' ',
                                                    )}
                                                </Badge>
                                            </div>

                                            <p className="text-xs text-muted-foreground">
                                                {consultation.id}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Consultation Details */}
                                    <div className="grid gap-3 sm:grid-cols-3 xl:min-w-125">
                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="size-4 text-muted-foreground" />

                                            <div>
                                                <p className="text-xs text-muted-foreground">
                                                    Date
                                                </p>

                                                <p className="text-sm font-medium">
                                                    {consultation.date}
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
                                                    {consultation.time}
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Consultation Type
                                            </p>

                                            <div className="mt-1 flex items-center gap-1.5 text-sm font-medium">
                                                {consultation.type ===
                                                    'Video Consultation' && (
                                                    <Video className="size-4 text-primary" />
                                                )}

                                                {consultation.type !==
                                                    'Video Consultation' && (
                                                    <Stethoscope className="size-4 text-primary" />
                                                )}

                                                {consultation.type}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-wrap items-center gap-2">
                                        {consultation.status === 'WAITING' && (
                                            <Button size="sm">
                                                <Video className="mr-2 size-4" />
                                                Start Consultation
                                            </Button>
                                        )}

                                        {consultation.status ===
                                            'SCHEDULED' && (
                                            <Button size="sm" variant="outline">
                                                <Video className="mr-2 size-4" />
                                                Join Meet
                                            </Button>
                                        )}

                                        {consultation.status ===
                                            'IN_PROGRESS' && (
                                            <Button size="sm">
                                                <Video className="mr-2 size-4" />
                                                Continue
                                            </Button>
                                        )}

                                        {consultation.status ===
                                            'COMPLETED' && (
                                            <Button size="sm" variant="outline">
                                                <FileText className="mr-2 size-4" />
                                                View Summary
                                            </Button>
                                        )}

                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            aria-label="View consultation details"
                                        >
                                            <ChevronRight className="size-4" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Progress Indicator */}
                                {consultation.status === 'IN_PROGRESS' && (
                                    <div className="mt-4 flex items-center gap-2 border-t pt-3">
                                        <CheckCircle2 className="size-4 text-primary" />

                                        <p className="text-xs text-muted-foreground">
                                            Consultation is currently in
                                            progress.
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                            Showing 1–6 of 42 consultations
                        </p>

                        <div className="flex gap-2">
                            <Button variant="outline" size="sm" disabled>
                                Previous
                            </Button>

                            <Button variant="outline" size="sm">
                                Next
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DoctorConsultationsPage;
