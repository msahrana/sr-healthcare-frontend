import {
    CalendarDays,
    ChevronRight,
    Download,
    FileText,
    Filter,
    HeartPulse,
    Search,
    Stethoscope,
} from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface MedicalRecord {
    id: string;
    title: string;
    type: 'Consultation' | 'Lab Report' | 'Imaging' | 'Diagnosis';
    doctor: string;
    date: string;
    description: string;
    status: 'Available' | 'Reviewed';
}

const medicalRecords: MedicalRecord[] = [
    {
        id: '1',
        title: 'General Health Consultation',
        type: 'Consultation',
        doctor: 'Dr. Sadiatut Taiyeba Siyana',
        date: 'September 24, 2026',
        description:
            'General consultation regarding fever, common cold, and body discomfort.',
        status: 'Reviewed',
    },
    {
        id: '2',
        title: 'Complete Blood Count (CBC)',
        type: 'Lab Report',
        doctor: 'Dr. Sadiatut Taiyeba Siyana',
        date: 'September 23, 2026',
        description:
            'Complete blood count laboratory test and related observations.',
        status: 'Reviewed',
    },
    {
        id: '3',
        title: 'Chest X-Ray',
        type: 'Imaging',
        doctor: 'Dr. Ahmed Rahman',
        date: 'September 15, 2026',
        description:
            'Chest radiology examination performed during medical consultation.',
        status: 'Available',
    },
    {
        id: '4',
        title: 'Gastritis Diagnosis',
        type: 'Diagnosis',
        doctor: 'Dr. Ahmed Rahman',
        date: 'September 15, 2026',
        description:
            'Clinical diagnosis and treatment notes related to gastritis.',
        status: 'Reviewed',
    },
];

const MedicalRecordsPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-medium text-primary">
                        Healthcare
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                        Medical Records
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        View and manage your medical history, reports, and
                        consultation records.
                    </p>
                </div>

                <Button variant="outline">
                    <Download className="mr-2 size-4" />
                    Download Records
                </Button>
            </div>

            {/* Summary Cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <FileText className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Records
                            </p>

                            <p className="text-2xl font-bold">4</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                            <Stethoscope className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Consultations
                            </p>

                            <p className="text-2xl font-bold">1</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400">
                            <HeartPulse className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Lab Reports
                            </p>

                            <p className="text-2xl font-bold">1</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400">
                            <CalendarDays className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Last Updated
                            </p>

                            <p className="text-sm font-semibold">
                                Sep 24, 2026
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Search & Filter */}
            <Card>
                <CardContent className="p-4">
                    <div className="flex flex-col gap-3 md:flex-row">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                className="pl-9"
                                placeholder="Search medical records..."
                            />
                        </div>

                        <Button variant="outline">
                            <Filter className="mr-2 size-4" />
                            Filter
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Medical Records */}
            <Card>
                <CardHeader>
                    <CardTitle>My Medical Records</CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Your medical history and healthcare documents
                    </p>
                </CardHeader>

                <CardContent className="space-y-4">
                    {medicalRecords.map((record) => (
                        <div
                            className="rounded-xl border p-5 transition-colors hover:bg-muted/30"
                            key={record.id}
                        >
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                {/* Record Information */}
                                <div className="flex gap-4">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <FileText className="size-6" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h3 className="font-semibold">
                                                {record.title}
                                            </h3>

                                            <Badge variant="secondary">
                                                {record.type}
                                            </Badge>

                                            <Badge
                                                variant={
                                                    record.status === 'Reviewed'
                                                        ? 'default'
                                                        : 'outline'
                                                }
                                            >
                                                {record.status}
                                            </Badge>
                                        </div>

                                        <p className="max-w-3xl text-sm text-muted-foreground">
                                            {record.description}
                                        </p>

                                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <Stethoscope className="size-4" />
                                                {record.doctor}
                                            </span>

                                            <span className="flex items-center gap-1.5">
                                                <CalendarDays className="size-4" />
                                                {record.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex shrink-0 gap-2">
                                    <Button variant="outline">
                                        <Link
                                            href={`/dashboard/medical-records/${record.id}`}
                                        >
                                            <div className="flex">
                                                View
                                                <ChevronRight className="ml-1 size-4" />
                                            </div>
                                        </Link>
                                    </Button>

                                    <Button
                                        size="icon"
                                        variant="outline"
                                        aria-label={`Download ${record.title}`}
                                    >
                                        <Download className="size-4" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Empty State */}
                    {medicalRecords.length === 0 && (
                        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-14 text-center">
                            <div className="flex size-14 items-center justify-center rounded-full bg-muted">
                                <FileText className="size-7 text-muted-foreground" />
                            </div>

                            <h3 className="mt-4 font-semibold">
                                No medical records found
                            </h3>

                            <p className="mt-1 max-w-md text-sm text-muted-foreground">
                                Your consultation records, laboratory reports,
                                diagnoses, and other medical documents will
                                appear here.
                            </p>

                            <Button className="mt-5">
                                <Link href="/dashboard/doctors">
                                    <Stethoscope className="mr-2 size-4" />
                                    Find a Doctor
                                </Link>
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default MedicalRecordsPage;
