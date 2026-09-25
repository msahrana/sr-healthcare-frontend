'use client';

import {
    Activity,
    ArrowDownRight,
    ArrowUpRight,
    Banknote,
    CalendarCheck,
    Clock3,
    Stethoscope,
    TrendingUp,
    Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface MonthlyRevenue {
    month: string;
    revenue: number;
    percentage: number;
}

interface DoctorPerformance {
    name: string;
    specialty: string;
    appointments: number;
    patients: number;
    revenue: string;
    growth: number;
}

interface AppointmentSummary {
    label: string;
    value: number;
    percentage: number;
}

const monthlyRevenue: MonthlyRevenue[] = [
    {
        month: 'Apr',
        revenue: 28400,
        percentage: 42,
    },
    {
        month: 'May',
        revenue: 32600,
        percentage: 48,
    },
    {
        month: 'Jun',
        revenue: 38900,
        percentage: 57,
    },
    {
        month: 'Jul',
        revenue: 42100,
        percentage: 62,
    },
    {
        month: 'Aug',
        revenue: 46700,
        percentage: 69,
    },
    {
        month: 'Sep',
        revenue: 52800,
        percentage: 78,
    },
];

const doctorPerformance: DoctorPerformance[] = [
    {
        name: 'Dr. Sadiatul Islam',
        specialty: 'Cardiology',
        appointments: 86,
        patients: 64,
        revenue: '৳86,000',
        growth: 18,
    },
    {
        name: 'Dr. Arif Hossain',
        specialty: 'Neurology',
        appointments: 74,
        patients: 58,
        revenue: '৳74,800',
        growth: 12,
    },
    {
        name: 'Dr. Nusrat Jahan',
        specialty: 'Dermatology',
        appointments: 68,
        patients: 52,
        revenue: '৳62,400',
        growth: 9,
    },
    {
        name: 'Dr. Farhana Rahman',
        specialty: 'Gynecology',
        appointments: 61,
        patients: 49,
        revenue: '৳57,900',
        growth: 7,
    },
];

const appointmentSummary: AppointmentSummary[] = [
    {
        label: 'Completed',
        value: 218,
        percentage: 61,
    },
    {
        label: 'Scheduled',
        value: 84,
        percentage: 24,
    },
    {
        label: 'Pending',
        value: 32,
        percentage: 9,
    },
    {
        label: 'Cancelled',
        value: 22,
        percentage: 6,
    },
];

const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-BD', {
        style: 'currency',
        currency: 'BDT',
        maximumFractionDigits: 0,
    }).format(value);

export default function AdminAnalyticsPage() {
    return (
        <div className="space-y-6 p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                            <Activity className="size-5 text-primary" />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">
                                Analytics
                            </h1>

                            <p className="text-sm text-muted-foreground">
                                Monitor SR HealthCare performance and business
                                insights.
                            </p>
                        </div>
                    </div>
                </div>

                <Badge
                    variant="outline"
                    className="w-fit gap-2 rounded-full px-3 py-1.5"
                >
                    <span className="size-2 rounded-full bg-green-500" />
                    Live Analytics
                </Badge>
            </div>

            {/* Main Stats */}
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <Card>
                    <CardContent className="p-5">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Total Revenue
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    ৳428,500
                                </h2>

                                <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
                                    <ArrowUpRight className="size-3.5" />
                                    <span>12.8% from last month</span>
                                </div>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-green-100 dark:bg-green-950">
                                <Banknote className="size-5 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Appointments
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">356</h2>

                                <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
                                    <ArrowUpRight className="size-3.5" />
                                    <span>8.4% from last month</span>
                                </div>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-950">
                                <CalendarCheck className="size-5 text-blue-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Active Doctors
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">108</h2>

                                <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
                                    <ArrowUpRight className="size-3.5" />
                                    <span>5.2% from last month</span>
                                </div>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-950">
                                <Stethoscope className="size-5 text-purple-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Total Patients
                                </p>

                                <h2 className="mt-2 text-2xl font-bold">
                                    2,845
                                </h2>

                                <div className="mt-2 flex items-center gap-1 text-xs text-green-600">
                                    <ArrowUpRight className="size-3.5" />
                                    <span>14.6% from last month</span>
                                </div>
                            </div>

                            <div className="flex size-11 items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-950">
                                <Users className="size-5 text-orange-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Revenue + Appointment Overview */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Revenue Chart */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle>Revenue Overview</CardTitle>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    Monthly revenue performance
                                </p>
                            </div>

                            <Badge variant="secondary" className="gap-1">
                                <TrendingUp className="size-3.5" />
                                +12.8%
                            </Badge>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="flex h-72 items-end gap-3 md:gap-5">
                            {monthlyRevenue.map((item) => (
                                <div
                                    key={item.month}
                                    className="flex h-full flex-1 flex-col items-center justify-end gap-3"
                                >
                                    <span className="text-xs font-medium text-muted-foreground">
                                        {formatCurrency(item.revenue)}
                                    </span>

                                    <div className="flex h-full w-full max-w-12 items-end">
                                        <div
                                            className="w-full rounded-t-lg bg-primary/80 transition-all hover:bg-primary"
                                            style={{
                                                height: `${item.percentage}%`,
                                            }}
                                        />
                                    </div>

                                    <span className="text-xs font-medium">
                                        {item.month}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Appointment Overview */}
                <Card>
                    <CardHeader>
                        <CardTitle>Appointment Overview</CardTitle>

                        <p className="text-sm text-muted-foreground">
                            Current appointment distribution
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-5">
                        {appointmentSummary.map((item) => (
                            <div key={item.label} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">
                                        {item.label}
                                    </span>

                                    <span className="text-sm text-muted-foreground">
                                        {item.value}
                                    </span>
                                </div>

                                <div className="h-2 overflow-hidden rounded-full bg-muted">
                                    <div
                                        className="h-full rounded-full bg-primary"
                                        style={{
                                            width: `${item.percentage}%`,
                                        }}
                                    />
                                </div>

                                <p className="text-right text-xs text-muted-foreground">
                                    {item.percentage}%
                                </p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>

            {/* Performance Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardContent className="p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                                <CalendarCheck className="size-5 text-blue-600" />
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Avg. Daily Appointments
                                </p>

                                <p className="text-xl font-bold">42</p>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-1 text-xs text-green-600">
                            <ArrowUpRight className="size-3.5" />
                            6.7% increase
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-950">
                                <Clock3 className="size-5 text-purple-600" />
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Avg. Consultation
                                </p>

                                <p className="text-xl font-bold">28 min</p>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-1 text-xs text-green-600">
                            <ArrowDownRight className="size-3.5" />
                            3.2% lower
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-green-100 dark:bg-green-950">
                                <TrendingUp className="size-5 text-green-600" />
                            </div>

                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Patient Growth
                                </p>

                                <p className="text-xl font-bold">14.6%</p>
                            </div>
                        </div>

                        <div className="mt-4 flex items-center gap-1 text-xs text-green-600">
                            <ArrowUpRight className="size-3.5" />
                            4.1% from last month
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Doctor Performance */}
            <Card>
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Doctor Performance</CardTitle>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Appointment and revenue performance by doctor
                            </p>
                        </div>

                        <Badge variant="outline">September 2026</Badge>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-850 text-sm">
                            <thead>
                                <tr className="border-b text-left">
                                    <th className="pb-3 font-medium text-muted-foreground">
                                        Doctor
                                    </th>

                                    <th className="pb-3 font-medium text-muted-foreground">
                                        Appointments
                                    </th>

                                    <th className="pb-3 font-medium text-muted-foreground">
                                        Patients
                                    </th>

                                    <th className="pb-3 font-medium text-muted-foreground">
                                        Revenue
                                    </th>

                                    <th className="pb-3 font-medium text-muted-foreground">
                                        Growth
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {doctorPerformance.map((doctor) => (
                                    <tr
                                        key={doctor.name}
                                        className="border-b last:border-0"
                                    >
                                        <td className="py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-9 items-center justify-center rounded-full bg-primary/10">
                                                    <Stethoscope className="size-4 text-primary" />
                                                </div>

                                                <div>
                                                    <p className="font-medium">
                                                        {doctor.name}
                                                    </p>

                                                    <p className="text-xs text-muted-foreground">
                                                        {doctor.specialty}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-4 font-medium">
                                            {doctor.appointments}
                                        </td>

                                        <td className="py-4">
                                            {doctor.patients}
                                        </td>

                                        <td className="py-4 font-medium">
                                            {doctor.revenue}
                                        </td>

                                        <td className="py-4">
                                            <Badge
                                                variant="secondary"
                                                className="gap-1 text-green-600"
                                            >
                                                <ArrowUpRight className="size-3" />
                                                {doctor.growth}%
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>

            {/* Bottom Summary */}
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Healthcare Activity</CardTitle>

                        <p className="text-sm text-muted-foreground">
                            Platform activity summary
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center gap-3">
                                <Users className="size-5 text-primary" />

                                <span className="text-sm font-medium">
                                    New Patients
                                </span>
                            </div>

                            <span className="font-semibold">428</span>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center gap-3">
                                <Stethoscope className="size-5 text-primary" />

                                <span className="text-sm font-medium">
                                    Active Doctors
                                </span>
                            </div>

                            <span className="font-semibold">108</span>
                        </div>

                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="flex items-center gap-3">
                                <CalendarCheck className="size-5 text-primary" />

                                <span className="text-sm font-medium">
                                    Completed Appointments
                                </span>
                            </div>

                            <span className="font-semibold">218</span>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Revenue Breakdown</CardTitle>

                        <p className="text-sm text-muted-foreground">
                            Revenue generated from healthcare services
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-5">
                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm">
                                    Online Consultation
                                </span>

                                <span className="font-medium">৳248,500</span>
                            </div>

                            <div className="h-2 rounded-full bg-muted">
                                <div className="h-full w-[58%] rounded-full bg-primary" />
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm">
                                    In-Person Appointment
                                </span>

                                <span className="font-medium">৳126,000</span>
                            </div>

                            <div className="h-2 rounded-full bg-muted">
                                <div className="h-full w-[29%] rounded-full bg-primary/70" />
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm">
                                    Follow-up Consultation
                                </span>

                                <span className="font-medium">৳54,000</span>
                            </div>

                            <div className="h-2 rounded-full bg-muted">
                                <div className="h-full w-[13%] rounded-full bg-primary/50" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}