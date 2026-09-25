import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    ArrowLeft,
    CalendarDays,
    CheckCircle2,
    Clock3,
    Download,
    FileText,
    Mail,
    Pill,
    Printer,
    Stethoscope,
    User,
} from 'lucide-react';

interface Medicine {
    name: string;
    dosage: string;
    frequency: string;
    duration: string;
    timing: string;
    instructions: string;
}

const medicines: Medicine[] = [
    {
        name: 'Paracetamol 500mg',
        dosage: '500 mg',
        frequency: '3 times daily',
        duration: '5 days',
        timing: 'After meal',
        instructions: 'Take with sufficient water.',
    },
    {
        name: 'Cetirizine 10mg',
        dosage: '10 mg',
        frequency: 'Once daily',
        duration: '5 days',
        timing: 'At bedtime',
        instructions: 'May cause drowsiness.',
    },
    {
        name: 'Omeprazole 20mg',
        dosage: '20 mg',
        frequency: 'Once daily',
        duration: '7 days',
        timing: 'Before breakfast',
        instructions: 'Take 30 minutes before breakfast.',
    },
];

const PrescriptionsDetailsPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-3">
                    <Button size="icon" variant="outline">
                        <Link href="/dashboard/prescriptions">
                            <ArrowLeft className="size-4" />
                            <span className="sr-only">
                                Back to prescriptions
                            </span>
                        </Link>
                    </Button>

                    <div>
                        <p className="text-sm font-medium text-primary">
                            Prescription
                        </p>

                        <h1 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                            Prescription Details
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            RX-2026-00124
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2">
                    <Button variant="outline">
                        <Printer className="mr-2 size-4" />
                        Print
                    </Button>

                    <Button>
                        <Download className="mr-2 size-4" />
                        Download PDF
                    </Button>
                </div>
            </div>

            {/* Prescription Status */}
            <Card>
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <FileText className="size-6" />
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center gap-2">
                                <h2 className="font-semibold">RX-2026-00124</h2>

                                <Badge className="gap-1">
                                    <CheckCircle2 className="size-3.5" />
                                    Active
                                </Badge>
                            </div>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Issued on September 24, 2026
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="size-4" />
                        September 24, 2026
                    </div>
                </CardContent>
            </Card>

            {/* Doctor & Patient Information */}
            <div className="grid gap-6 lg:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Stethoscope className="size-5 text-primary" />
                            Doctor Information
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="flex items-center gap-4">
                            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Stethoscope className="size-6" />
                            </div>

                            <div>
                                <h3 className="font-semibold">
                                    Dr. Sadiatut Taiyeba Siyana
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    General Physician
                                </p>

                                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                                    <Mail className="size-4" />
                                    doctor@srhealthcare.com
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="size-5 text-primary" />
                            Patient Information
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Patient Name
                                </p>

                                <p className="mt-1 text-sm font-medium">
                                    Sayed Anower Hossain
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Patient ID
                                </p>

                                <p className="mt-1 text-sm font-medium">
                                    PAT-2026-0012
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Age
                                </p>

                                <p className="mt-1 text-sm font-medium">
                                    31 Years
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Blood Group
                                </p>

                                <p className="mt-1 text-sm font-medium">O+</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Diagnosis */}
            <Card>
                <CardHeader>
                    <CardTitle>Diagnosis</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="rounded-lg bg-muted/50 p-4">
                        <p className="font-medium">Fever and Common Cold</p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Patient presented with mild fever, nasal congestion,
                            headache, and general body discomfort.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Medicines */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Pill className="size-5 text-primary" />
                        Prescribed Medicines
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Follow the dosage and duration prescribed by your
                        doctor.
                    </p>
                </CardHeader>

                <CardContent>
                    <div className="space-y-4">
                        {medicines.map((medicine, index) => (
                            <div
                                className="rounded-xl border p-5"
                                key={medicine.name}
                            >
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start gap-3">
                                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                                            {index + 1}
                                        </div>

                                        <div>
                                            <h3 className="font-semibold">
                                                {medicine.name}
                                            </h3>

                                            <p className="text-sm text-muted-foreground">
                                                {medicine.instructions}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid gap-4 rounded-lg bg-muted/40 p-4 sm:grid-cols-2 lg:grid-cols-4">
                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Dosage
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {medicine.dosage}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Frequency
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {medicine.frequency}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Duration
                                            </p>

                                            <p className="mt-1 text-sm font-medium">
                                                {medicine.duration}
                                            </p>
                                        </div>

                                        <div>
                                            <p className="text-xs text-muted-foreground">
                                                Timing
                                            </p>

                                            <p className="mt-1 flex items-center gap-1.5 text-sm font-medium">
                                                <Clock3 className="size-3.5 text-primary" />
                                                {medicine.timing}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Doctor's Instructions */}
            <Card>
                <CardHeader>
                    <CardTitle>Doctor's Instructions</CardTitle>
                </CardHeader>

                <CardContent>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            Take all medicines according to the prescribed
                            schedule.
                        </li>

                        <li className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            Drink plenty of water and get adequate rest.
                        </li>

                        <li className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            Do not stop prescribed medication without consulting
                            your doctor.
                        </li>

                        <li className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            Contact your healthcare provider if symptoms become
                            worse or do not improve.
                        </li>
                    </ul>
                </CardContent>
            </Card>

            {/* Follow-up */}
            <Card>
                <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h3 className="font-semibold">Follow-up</h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Follow-up consultation recommended after 7 days.
                        </p>
                    </div>

                    <Button variant="outline">
                        <Link href="/dashboard/my-appointments">
                            <div className="flex">
                                <CalendarDays className="mr-2 size-4" />
                                View Appointments
                            </div>
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            {/* Footer */}
            <div className="rounded-lg border bg-muted/30 p-4 text-center">
                <p className="text-xs text-muted-foreground">
                    This prescription was issued through SR HealthCare. Please
                    follow your doctor's instructions and consult your
                    healthcare provider before making changes to your treatment.
                </p>
            </div>
        </div>
    );
};

export default PrescriptionsDetailsPage;
