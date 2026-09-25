import {
    CalendarDays,
    Clock3,
    FileText,
    HeartPulse,
    Search,
    Stethoscope,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PatientPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm font-medium text-primary">
                        Patient Dashboard
                    </p>

                    <h1 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                        Welcome back!
                    </h1>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage your appointments, doctors, prescriptions, and
                        healthcare information.
                    </p>
                </div>

                <Button>
                    <Link href="/doctors">
                        <div className="flex">
                            <Search className="mr-2 size-4" />
                            Find a Doctor
                        </div>
                    </Link>
                </Button>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <CalendarDays className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Appointments
                            </p>

                            <p className="text-2xl font-bold">12</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400">
                            <Clock3 className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Upcoming
                            </p>

                            <p className="text-2xl font-bold">2</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                            <FileText className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Prescriptions
                            </p>

                            <p className="text-2xl font-bold">5</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-rose-100 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400">
                            <HeartPulse className="size-5" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Medical Records
                            </p>

                            <p className="text-2xl font-bold">8</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Upcoming Appointment */}
                <Card className="lg:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Upcoming Appointment</CardTitle>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Your next scheduled consultation
                            </p>
                        </div>

                        <CalendarDays className="size-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <div className="rounded-xl border bg-muted/30 p-5">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
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

                                        <p className="mt-1 text-sm font-medium">
                                            Today · 10:30 AM
                                        </p>
                                    </div>
                                </div>

                                <Button>
                                    <Link href="/dashboard/my-appointments">
                                        View Appointment
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>

                        <p className="text-sm text-muted-foreground">
                            Access your healthcare services
                        </p>
                    </CardHeader>

                    <CardContent className="grid gap-3">
                        <Button
                            className="w-full justify-start"
                            variant="outline"
                        >
                            <Link href="/doctors">
                                <div className="flex">
                                    <Search className="mr-3 size-4" />
                                    Find a Doctor
                                </div>
                            </Link>
                        </Button>

                        <Button
                            className="w-full justify-start"
                            variant="outline"
                        >
                            <Link href="/dashboard/my-appointments">
                                <div className="flex">
                                    <CalendarDays className="mr-3 size-4" />
                                    My Appointments
                                </div>
                            </Link>
                        </Button>

                        <Button
                            className="w-full justify-start"
                            variant="outline"
                        >
                            <Link href="/dashboard/prescriptions">
                                <div className="flex">
                                    <FileText className="mr-3 size-4" />
                                    Prescriptions
                                </div>
                            </Link>
                        </Button>

                        <Button
                            className="w-full justify-start"
                            variant="outline"
                        >
                            <Link href="/dashboard/medical-records">
                                <div className="flex">
                                    <HeartPulse className="mr-3 size-4" />
                                    Medical Records
                                </div>
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Recent Activity */}
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Your latest healthcare activities
                    </p>
                </CardHeader>

                <CardContent>
                    <div className="divide-y rounded-lg border">
                        <div className="flex items-center justify-between gap-4 p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <CalendarDays className="size-4" />
                                </div>

                                <div>
                                    <p className="text-sm font-medium">
                                        Appointment booked
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        General Physician consultation
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-muted-foreground">
                                Today
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-950/40 dark:text-green-400">
                                    <FileText className="size-4" />
                                </div>

                                <div>
                                    <p className="text-sm font-medium">
                                        Prescription updated
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        New prescription added by your doctor
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-muted-foreground">
                                Yesterday
                            </span>
                        </div>

                        <div className="flex items-center justify-between gap-4 p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
                                    <Stethoscope className="size-4" />
                                </div>

                                <div>
                                    <p className="text-sm font-medium">
                                        Doctor consultation completed
                                    </p>

                                    <p className="text-xs text-muted-foreground">
                                        Online consultation
                                    </p>
                                </div>
                            </div>

                            <span className="text-xs text-muted-foreground">
                                3 days ago
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default PatientPage;
