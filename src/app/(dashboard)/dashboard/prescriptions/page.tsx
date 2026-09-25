import {
    CalendarDays,
    ChevronRight,
    Clock3,
    FileText,
    Pill,
    Search,
    Stethoscope,
} from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Prescription {
    id: string;
    prescriptionNumber: string;
    doctorName: string;
    specialty: string;
    date: string;
    status: 'Active' | 'Completed';
    medicines: number;
    diagnosis: string;
}

const prescriptions: Prescription[] = [
    {
        id: '1',
        prescriptionNumber: 'RX-2026-00124',
        doctorName: 'Dr. Sadiatut Taiyeba Siyana',
        specialty: 'General Physician',
        date: 'September 24, 2026',
        status: 'Active',
        medicines: 3,
        diagnosis: 'Fever and common cold',
    },
    {
        id: '2',
        prescriptionNumber: 'RX-2026-00108',
        doctorName: 'Dr. Ahmed Rahman',
        specialty: 'Internal Medicine',
        date: 'September 15, 2026',
        status: 'Active',
        medicines: 2,
        diagnosis: 'Gastritis',
    },
    {
        id: '3',
        prescriptionNumber: 'RX-2026-00091',
        doctorName: 'Dr. Nusrat Jahan',
        specialty: 'Dermatology',
        date: 'August 28, 2026',
        status: 'Completed',
        medicines: 2,
        diagnosis: 'Skin allergy',
    },
];

const PrescriptionsPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-medium text-primary">
                        Healthcare
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                        Prescriptions
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        View and manage prescriptions provided by your doctors.
                    </p>
                </div>

                <Button>
                    <Link href="/dashboard/doctors">
                        <Stethoscope className="mr-2 size-4" />
                        Find a Doctor
                    </Link>
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
                                Total
                            </p>
                            <p className="text-2xl font-bold">3</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400">
                            <Pill className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Active
                            </p>
                            <p className="text-2xl font-bold">2</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                            <Clock3 className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Medicines
                            </p>
                            <p className="text-2xl font-bold">7</p>
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

            {/* Search */}
            <Card>
                <CardContent className="p-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            className="pl-9"
                            placeholder="Search prescriptions, doctors, or diagnosis..."
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Prescriptions */}
            <Card>
                <CardHeader>
                    <CardTitle>My Prescriptions</CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Your recently issued prescriptions
                    </p>
                </CardHeader>

                <CardContent className="space-y-4">
                    {prescriptions.map((prescription) => (
                        <div
                            className="rounded-xl border p-5 transition-colors hover:bg-muted/30"
                            key={prescription.id}
                        >
                            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                {/* Prescription Info */}
                                <div className="flex gap-4">
                                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <FileText className="size-6" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <h3 className="font-semibold">
                                                {
                                                    prescription.prescriptionNumber
                                                }
                                            </h3>

                                            <Badge
                                                variant={
                                                    prescription.status ===
                                                    'Active'
                                                        ? 'default'
                                                        : 'secondary'
                                                }
                                            >
                                                {prescription.status}
                                            </Badge>
                                        </div>

                                        <p className="text-sm text-muted-foreground">
                                            {prescription.diagnosis}
                                        </p>

                                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                                            <span className="flex items-center gap-1.5">
                                                <Stethoscope className="size-4" />
                                                {prescription.doctorName}
                                            </span>

                                            <span>
                                                {prescription.specialty}
                                            </span>

                                            <span className="flex items-center gap-1.5">
                                                <CalendarDays className="size-4" />
                                                {prescription.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Medicine + Action */}
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                    <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-sm">
                                        <Pill className="size-4 text-primary" />

                                        <span>
                                            {prescription.medicines}{' '}
                                            {prescription.medicines === 1
                                                ? 'Medicine'
                                                : 'Medicines'}
                                        </span>
                                    </div>

                                    <Button variant="outline">
                                        <Link
                                            href={`/dashboard/prescriptions/${prescription.id}`}
                                        >
                                            <div className="flex">
                                                View Details
                                                <ChevronRight className="ml-1 size-4" />
                                            </div>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}

                    {prescriptions.length === 0 && (
                        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-12 text-center">
                            <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                                <FileText className="size-6 text-muted-foreground" />
                            </div>

                            <h3 className="mt-4 font-semibold">
                                No prescriptions found
                            </h3>

                            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                                Your prescriptions will appear here after a
                                doctor provides one.
                            </p>

                            <Button className="mt-4">
                                <Link href="/dashboard/doctors">
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

export default PrescriptionsPage;
