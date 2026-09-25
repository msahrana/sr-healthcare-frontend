import {
    Activity,
    ArrowLeft,
    CalendarDays,
    CheckCircle2,
    Download,
    FileText,
    HeartPulse,
    Printer,
    Stethoscope,
    User,
} from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DetailsMedicalRecords = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-start gap-3">
                    <Button size="icon" variant="outline">
                        <Link href="/dashboard/medical-records">
                            <ArrowLeft className="size-4" />

                            <span className="sr-only">
                                Back to medical records
                            </span>
                        </Link>
                    </Button>

                    <div>
                        <p className="text-sm font-medium text-primary">
                            Medical Records
                        </p>

                        <h1 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                            Medical Record Details
                        </h1>

                        <p className="mt-1 text-sm text-muted-foreground">
                            MR-2026-00421
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

            {/* Record Summary */}
            <Card>
                <CardContent className="p-5">
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-start gap-4">
                            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <FileText className="size-7" />
                            </div>

                            <div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <h2 className="text-lg font-semibold">
                                        General Health Consultation
                                    </h2>

                                    <Badge variant="secondary">
                                        Consultation
                                    </Badge>

                                    <Badge className="gap-1">
                                        <CheckCircle2 className="size-3.5" />
                                        Reviewed
                                    </Badge>
                                </div>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    Fever and common cold consultation record
                                </p>

                                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                                    <span className="flex items-center gap-1.5">
                                        <CalendarDays className="size-4" />
                                        September 24, 2026
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <Stethoscope className="size-4" />
                                        General Physician
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Patient & Doctor */}
            <div className="grid gap-6 lg:grid-cols-2">
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
                                    Full Name
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
                                    Gender
                                </p>

                                <p className="mt-1 text-sm font-medium">Male</p>
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Blood Group
                                </p>

                                <p className="mt-1 text-sm font-medium">O+</p>
                            </div>

                            <div>
                                <p className="text-xs text-muted-foreground">
                                    Contact
                                </p>

                                <p className="mt-1 text-sm font-medium">
                                    +880 1XXX-XXXXXX
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

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

                                <p className="mt-2 text-xs text-muted-foreground">
                                    SR HealthCare
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Chief Complaint */}
            <Card>
                <CardHeader>
                    <CardTitle>Chief Complaint</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="rounded-xl bg-muted/40 p-5">
                        <p className="text-sm leading-6">
                            Patient reported mild fever, nasal congestion,
                            headache, and general body discomfort for the past
                            two days.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Vital Signs */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Activity className="size-5 text-primary" />
                        Vital Signs
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Vital measurements recorded during the consultation.
                    </p>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-xl border p-4">
                            <p className="text-xs text-muted-foreground">
                                Blood Pressure
                            </p>

                            <p className="mt-2 text-xl font-semibold">120/80</p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                mmHg
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <p className="text-xs text-muted-foreground">
                                Heart Rate
                            </p>

                            <p className="mt-2 text-xl font-semibold">76</p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                bpm
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <p className="text-xs text-muted-foreground">
                                Temperature
                            </p>

                            <p className="mt-2 text-xl font-semibold">99.2°F</p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Fahrenheit
                            </p>
                        </div>

                        <div className="rounded-xl border p-4">
                            <p className="text-xs text-muted-foreground">
                                SpO₂
                            </p>

                            <p className="mt-2 text-xl font-semibold">98%</p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Oxygen saturation
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Diagnosis */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <HeartPulse className="size-5 text-primary" />
                        Diagnosis
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="rounded-xl border p-5">
                        <h3 className="font-semibold">Fever and Common Cold</h3>

                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                            Clinical findings are consistent with a common viral
                            upper respiratory infection. No serious symptoms
                            were identified during the consultation.
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Clinical Notes */}
            <Card>
                <CardHeader>
                    <CardTitle>Clinical Notes</CardTitle>
                </CardHeader>

                <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">
                        Patient was advised to maintain adequate hydration and
                        rest. Medication was prescribed to manage fever and
                        associated symptoms. Patient was advised to monitor
                        symptoms and contact the healthcare provider if the
                        condition worsens.
                    </p>
                </CardContent>
            </Card>

            {/* Prescription */}
            <Card>
                <CardHeader>
                    <CardTitle>Related Prescription</CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Prescription issued during this consultation.
                    </p>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-4 rounded-xl border p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <FileText className="size-5" />
                            </div>

                            <div>
                                <p className="font-semibold">RX-2026-00124</p>

                                <p className="text-sm text-muted-foreground">
                                    3 medicines · September 24, 2026
                                </p>
                            </div>
                        </div>

                        <Button variant="outline">
                            <Link href="/dashboard/prescriptions/1">
                                View Prescription
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Follow-up */}
            <Card>
                <CardHeader>
                    <CardTitle>Follow-up</CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="font-medium">Recommended follow-up</p>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Follow up with your doctor after 7 days or
                                earlier if symptoms become worse.
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
                    </div>
                </CardContent>
            </Card>

            {/* Record Footer */}
            <div className="rounded-xl border bg-muted/30 p-5 text-center">
                <p className="text-xs leading-5 text-muted-foreground">
                    Medical Record ID: MR-2026-00421
                    <br />
                    This record is maintained securely by SR HealthCare.
                </p>
            </div>
        </div>
    );
};

export default DetailsMedicalRecords;
