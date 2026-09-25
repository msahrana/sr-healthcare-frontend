import {
    CalendarDays,
    ChevronRight,
    FileText,
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

const medicalRecords = [
    {
        id: 'MR-001',
        patient: 'Sadiatut Taiyeba Siyana',
        recordType: 'General Consultation',
        diagnosis: 'Seasonal Allergy',
        date: '25 Sep 2026',
        status: 'ACTIVE',
    },
    {
        id: 'MR-002',
        patient: 'Tawhid Islam Rayan',
        recordType: 'Follow-up',
        diagnosis: 'Respiratory Infection',
        date: '24 Sep 2026',
        status: 'ACTIVE',
    },
    {
        id: 'MR-003',
        patient: 'Md. Rahim Uddin',
        recordType: 'General Consultation',
        diagnosis: 'Hypertension',
        date: '20 Sep 2026',
        status: 'ACTIVE',
    },
    {
        id: 'MR-004',
        patient: 'Most. Ayesha Akter',
        recordType: 'Follow-up',
        diagnosis: 'Migraine',
        date: '18 Sep 2026',
        status: 'ACTIVE',
    },
    {
        id: 'MR-005',
        patient: 'Abdullah Al Mamun',
        recordType: 'General Consultation',
        diagnosis: 'Gastritis',
        date: '15 Sep 2026',
        status: 'ACTIVE',
    },
    {
        id: 'MR-006',
        patient: 'Nusrat Jahan',
        recordType: 'Follow-up',
        diagnosis: 'Vitamin Deficiency',
        date: '10 Sep 2026',
        status: 'ARCHIVED',
    },
];

const DoctorMedicalRecordsPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div>
                <div className="flex items-center gap-2">
                    <FileText className="size-6 text-primary" />

                    <h1 className="text-2xl font-semibold tracking-tight">
                        Medical Records
                    </h1>
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                    Review medical history, diagnoses, and consultation records
                    of your patients.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Total Records</CardDescription>
                        <CardTitle className="text-2xl">186</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Records created by you
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>This Month</CardDescription>
                        <CardTitle className="text-2xl">24</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            New medical records
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Active Records</CardDescription>
                        <CardTitle className="text-2xl">178</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Currently available
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Archived</CardDescription>
                        <CardTitle className="text-2xl">08</CardTitle>
                    </CardHeader>

                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            Archived records
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Records */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle>Patient Medical Records</CardTitle>

                            <CardDescription>
                                Search and review your patients&apos; medical
                                records.
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
                        <Button size="sm">All Records</Button>

                        <Button variant="outline" size="sm">
                            Active
                        </Button>

                        <Button variant="outline" size="sm">
                            Archived
                        </Button>

                        <Button variant="outline" size="sm">
                            Recent
                        </Button>
                    </div>

                    {/* Record List */}
                    <div className="space-y-3">
                        {medicalRecords.map((record) => (
                            <div
                                key={record.id}
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
                                                    {record.patient}
                                                </p>

                                                <Badge
                                                    variant={
                                                        record.status ===
                                                        'ACTIVE'
                                                            ? 'default'
                                                            : 'outline'
                                                    }
                                                >
                                                    {record.status}
                                                </Badge>
                                            </div>

                                            <p className="text-xs text-muted-foreground">
                                                {record.id}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Record Information */}
                                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:min-w-130">
                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Record Type
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {record.recordType}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Diagnosis
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {record.diagnosis}
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <CalendarDays className="size-4 text-muted-foreground" />

                                            <div>
                                                <p className="text-xs text-muted-foreground">
                                                    Visit Date
                                                </p>

                                                <p className="text-sm font-medium">
                                                    {record.date}
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
                                        View Record
                                        <ChevronRight className="ml-1 size-4" />
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="mt-6 flex flex-col gap-3 border-t pt-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                            Showing 1–6 of 186 records
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

export default DoctorMedicalRecordsPage;
