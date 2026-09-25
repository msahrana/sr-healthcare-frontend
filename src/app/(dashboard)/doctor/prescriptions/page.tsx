import {
    CalendarDays,
    ChevronRight,
    FileText,
    Plus,
    Search,
    UserRound,
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

const prescriptions = [
    {
        id: 'RX-001',
        patient: 'Sadiatut Taiyeba Siyana',
        diagnosis: 'Seasonal Allergy',
        medicines: 3,
        date: '25 Sep 2026',
        status: 'ACTIVE',
    },
    {
        id: 'RX-002',
        patient: 'Tawhid Islam Rayan',
        diagnosis: 'Respiratory Infection',
        medicines: 4,
        date: '24 Sep 2026',
        status: 'ACTIVE',
    },
    {
        id: 'RX-003',
        patient: 'Md. Rahim Uddin',
        diagnosis: 'Hypertension',
        medicines: 2,
        date: '20 Sep 2026',
        status: 'ACTIVE',
    },
    {
        id: 'RX-004',
        patient: 'Most. Ayesha Akter',
        diagnosis: 'Migraine',
        medicines: 3,
        date: '18 Sep 2026',
        status: 'ACTIVE',
    },
    {
        id: 'RX-005',
        patient: 'Abdullah Al Mamun',
        diagnosis: 'Gastritis',
        medicines: 2,
        date: '15 Sep 2026',
        status: 'ACTIVE',
    },
    {
        id: 'RX-006',
        patient: 'Nusrat Jahan',
        diagnosis: 'Vitamin Deficiency',
        medicines: 1,
        date: '10 Sep 2026',
        status: 'EXPIRED',
    },
];

const DoctorPrescriptionsPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <FileText className="size-6 text-primary" />

                        <h1 className="text-2xl font-semibold tracking-tight">
                            Prescriptions
                        </h1>
                    </div>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Create, manage, and review prescriptions for your
                        patients.
                    </p>
                </div>

                <Button>
                    <Plus className="mr-2 size-4" />
                    Create Prescription
                </Button>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Total Prescriptions</CardDescription>
                        <CardTitle className="text-2xl">186</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Issued by you
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>This Month</CardDescription>
                        <CardTitle className="text-2xl">32</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            New prescriptions
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Active</CardDescription>
                        <CardTitle className="text-2xl">164</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Currently active
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Expired</CardDescription>
                        <CardTitle className="text-2xl">22</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Expired prescriptions
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Prescription List */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle>Prescription History</CardTitle>

                            <CardDescription>
                                Review prescriptions issued to your patients.
                            </CardDescription>
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search patient or diagnosis..."
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
                            Active
                        </Button>

                        <Button variant="outline" size="sm">
                            Expired
                        </Button>

                        <Button variant="outline" size="sm">
                            Recent
                        </Button>
                    </div>

                    {/* Prescription List */}
                    <div className="space-y-3">
                        {prescriptions.map((prescription) => (
                            <div
                                key={prescription.id}
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
                                                    {prescription.patient}
                                                </p>

                                                <Badge
                                                    variant={
                                                        prescription.status ===
                                                        'ACTIVE'
                                                            ? 'default'
                                                            : 'outline'
                                                    }
                                                >
                                                    {prescription.status}
                                                </Badge>
                                            </div>

                                            <p className="text-xs text-muted-foreground">
                                                {prescription.id}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Prescription Information */}
                                    <div className="grid gap-3 sm:grid-cols-3 xl:min-w-130">
                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Diagnosis
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {prescription.diagnosis}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Medicines
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {prescription.medicines}{' '}
                                                medicines
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="size-4 text-muted-foreground" />

                                            <div>
                                                <p className="text-xs text-muted-foreground">
                                                    Issued Date
                                                </p>

                                                <p className="text-sm font-medium">
                                                    {prescription.date}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="shrink-0"
                                    >
                                        View Prescription
                                        <ChevronRight className="ml-1 size-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                            Showing 1–6 of 186 prescriptions
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

export default DoctorPrescriptionsPage;
