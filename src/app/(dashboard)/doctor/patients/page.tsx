import {
    CalendarDays,
    ChevronRight,
    ClipboardList,
    Mail,
    Phone,
    Search,
    Users,
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

const patients = [
    {
        id: 'PAT-001',
        name: 'Sadiatut Taiyeba Siyana',
        email: 'siyana@example.com',
        phone: '+880 1712-345678',
        lastVisit: '25 Sep 2026',
        appointments: 8,
        status: 'ACTIVE',
    },
    {
        id: 'PAT-002',
        name: 'Tawhid Islam Rayan',
        email: 'rayan@example.com',
        phone: '+880 1812-456789',
        lastVisit: '24 Sep 2026',
        appointments: 5,
        status: 'ACTIVE',
    },
    {
        id: 'PAT-003',
        name: 'Md. Rahim Uddin',
        email: 'rahim@example.com',
        phone: '+880 1912-567890',
        lastVisit: '20 Sep 2026',
        appointments: 3,
        status: 'ACTIVE',
    },
    {
        id: 'PAT-004',
        name: 'Most. Ayesha Akter',
        email: 'ayesha@example.com',
        phone: '+880 1612-678901',
        lastVisit: '18 Sep 2026',
        appointments: 6,
        status: 'ACTIVE',
    },
    {
        id: 'PAT-005',
        name: 'Abdullah Al Mamun',
        email: 'abdullah@example.com',
        phone: '+880 1512-789012',
        lastVisit: '15 Sep 2026',
        appointments: 2,
        status: 'ACTIVE',
    },
    {
        id: 'PAT-006',
        name: 'Nusrat Jahan',
        email: 'nusrat@example.com',
        phone: '+880 1312-890123',
        lastVisit: '10 Sep 2026',
        appointments: 4,
        status: 'INACTIVE',
    },
];

const DoctorPatientPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div>
                <div className="flex items-center gap-2">
                    <Users className="size-6 text-primary" />

                    <h1 className="text-2xl font-semibold tracking-tight">
                        My Patients
                    </h1>
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                    View and manage patients who have consulted with you.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Total Patients</CardDescription>
                        <CardTitle className="text-2xl">124</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Patients under your care
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Active Patients</CardDescription>
                        <CardTitle className="text-2xl">118</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Currently active
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>New Patients</CardDescription>
                        <CardTitle className="text-2xl">12</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Added this month
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Follow-ups</CardDescription>
                        <CardTitle className="text-2xl">18</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Upcoming follow-ups
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Patient List */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle>Patient List</CardTitle>

                            <CardDescription>
                                Search and access your patient information.
                            </CardDescription>
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search by name or email..."
                                className="pl-9"
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    {/* Filters */}
                    <div className="mb-5 flex flex-wrap gap-2">
                        <Button size="sm">All Patients</Button>

                        <Button variant="outline" size="sm">
                            Active
                        </Button>

                        <Button variant="outline" size="sm">
                            Inactive
                        </Button>

                        <Button variant="outline" size="sm">
                            Recent Patients
                        </Button>
                    </div>

                    {/* Patients */}
                    <div className="space-y-3">
                        {patients.map((patient) => (
                            <div
                                key={patient.id}
                                className="rounded-xl border p-4 transition-colors hover:bg-muted/40"
                            >
                                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                                    {/* Patient */}
                                    <div className="flex items-center gap-3">
                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                            <Users className="size-5 text-primary" />
                                        </div>

                                        <div>
                                            <div className="flex items-center gap-2">
                                                <p className="font-medium">
                                                    {patient.name}
                                                </p>

                                                <Badge
                                                    variant={
                                                        patient.status ===
                                                        'ACTIVE'
                                                            ? 'default'
                                                            : 'outline'
                                                    }
                                                >
                                                    {patient.status}
                                                </Badge>
                                            </div>

                                            <p className="text-xs text-muted-foreground">
                                                {patient.id}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Contact */}
                                    <div className="grid gap-3 sm:grid-cols-2 xl:min-w-105">
                                        <div className="flex items-center gap-2">
                                            <Mail className="size-4 text-muted-foreground" />

                                            <span className="truncate text-sm">
                                                {patient.email}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Phone className="size-4 text-muted-foreground" />

                                            <span className="text-sm">
                                                {patient.phone}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Patient Statistics */}
                                    <div className="flex gap-6">
                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Last Visit
                                            </p>

                                            <div className="mt-1 flex items-center gap-1.5 text-sm font-medium">
                                                <CalendarDays className="size-4 text-muted-foreground" />
                                                {patient.lastVisit}
                                            </div>
                                        </div>

                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Visits
                                            </p>

                                            <div className="mt-1 flex items-center gap-1.5 text-sm font-medium">
                                                <ClipboardList className="size-4 text-muted-foreground" />
                                                {patient.appointments}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="shrink-0"
                                    >
                                        View Details
                                        <ChevronRight className="ml-1 size-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                            Showing 1–6 of 124 patients
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

export default DoctorPatientPage;
