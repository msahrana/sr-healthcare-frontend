'use client';

import {
    CalendarCheck,
    CheckCircle2,
    Clock3,
    Eye,
    MoreHorizontal,
    Search,
    Stethoscope,
    UserRound,
    XCircle,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Appointment {
    id: string;
    patient: string;
    patientEmail: string;
    doctor: string;
    specialty: string;
    date: string;
    time: string;
    type: 'Online' | 'In Person';
    status: 'Scheduled' | 'Completed' | 'Cancelled' | 'Pending';
    payment: 'Paid' | 'Pending';
}

const appointments: Appointment[] = [
    {
        id: 'APT-001',
        patient: 'Mohammad Rahim',
        patientEmail: 'rahim@example.com',
        doctor: 'Dr. Sadiatul Islam',
        specialty: 'Cardiology',
        date: '26 Sep 2026',
        time: '10:30 AM',
        type: 'Online',
        status: 'Scheduled',
        payment: 'Paid',
    },
    {
        id: 'APT-002',
        patient: 'Nusrat Jahan',
        patientEmail: 'nusrat@example.com',
        doctor: 'Dr. Arif Hossain',
        specialty: 'Neurology',
        date: '26 Sep 2026',
        time: '11:00 AM',
        type: 'Online',
        status: 'Pending',
        payment: 'Pending',
    },
    {
        id: 'APT-003',
        patient: 'Tanvir Ahmed',
        patientEmail: 'tanvir@example.com',
        doctor: 'Dr. Nusrat Jahan',
        specialty: 'Dermatology',
        date: '25 Sep 2026',
        time: '02:30 PM',
        type: 'In Person',
        status: 'Completed',
        payment: 'Paid',
    },
    {
        id: 'APT-004',
        patient: 'Farhana Akter',
        patientEmail: 'farhana@example.com',
        doctor: 'Dr. Tanvir Ahmed',
        specialty: 'Medicine',
        date: '24 Sep 2026',
        time: '04:00 PM',
        type: 'Online',
        status: 'Cancelled',
        payment: 'Paid',
    },
    {
        id: 'APT-005',
        patient: 'Sabbir Hossain',
        patientEmail: 'sabbir@example.com',
        doctor: 'Dr. Farhana Rahman',
        specialty: 'Gynecology',
        date: '23 Sep 2026',
        time: '05:30 PM',
        type: 'In Person',
        status: 'Completed',
        payment: 'Paid',
    },
];

const statusStyles: Record<Appointment['status'], string> = {
    Scheduled: 'bg-blue-100 text-blue-700 hover:bg-blue-100',
    Completed: 'bg-green-100 text-green-700 hover:bg-green-100',
    Cancelled: 'bg-red-100 text-red-700 hover:bg-red-100',
    Pending: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
};

const paymentStyles: Record<Appointment['payment'], string> = {
    Paid: 'bg-green-100 text-green-700 hover:bg-green-100',
    Pending: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
};

const AdminAppointmentsPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Appointments
                </h1>

                <p className="text-muted-foreground">
                    Monitor and manage patient appointments, consultations, and
                    payment status.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-primary/10 p-3">
                            <CalendarCheck className="size-5 text-primary" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Appointments
                            </p>

                            <p className="text-2xl font-bold">356</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-blue-500/10 p-3">
                            <Clock3 className="size-5 text-blue-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Scheduled
                            </p>

                            <p className="text-2xl font-bold">124</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-green-500/10 p-3">
                            <CheckCircle2 className="size-5 text-green-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Completed
                            </p>

                            <p className="text-2xl font-bold">198</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-yellow-500/10 p-3">
                            <Clock3 className="size-5 text-yellow-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Pending
                            </p>

                            <p className="text-2xl font-bold">34</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Appointments Table */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle>All Appointments</CardTitle>

                            <p className="mt-1 text-sm text-muted-foreground">
                                View and manage all patient appointments.
                            </p>
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search appointments..."
                                className="pl-9"
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-275">
                            <thead>
                                <tr className="border-b text-left text-sm text-muted-foreground">
                                    <th className="px-4 py-3 font-medium">
                                        Patient
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Doctor
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Date & Time
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Type
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Status
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Payment
                                    </th>

                                    <th className="px-4 py-3 text-right font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {appointments.map((appointment) => (
                                    <tr
                                        key={appointment.id}
                                        className="border-b last:border-0 hover:bg-muted/50"
                                    >
                                        {/* Patient */}
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                    <UserRound className="size-5 text-primary" />
                                                </div>

                                                <div>
                                                    <p className="font-medium">
                                                        {appointment.patient}
                                                    </p>

                                                    <p className="text-sm text-muted-foreground">
                                                        {
                                                            appointment.patientEmail
                                                        }
                                                    </p>

                                                    <p className="text-xs text-muted-foreground">
                                                        {appointment.id}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Doctor */}
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2">
                                                <Stethoscope className="size-4 text-primary" />

                                                <div>
                                                    <p className="text-sm font-medium">
                                                        {appointment.doctor}
                                                    </p>

                                                    <p className="text-xs text-muted-foreground">
                                                        {appointment.specialty}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Date & Time */}
                                        <td className="px-4 py-4">
                                            <p className="text-sm font-medium">
                                                {appointment.date}
                                            </p>

                                            <p className="text-xs text-muted-foreground">
                                                {appointment.time}
                                            </p>
                                        </td>

                                        {/* Type */}
                                        <td className="px-4 py-4">
                                            <Badge variant="outline">
                                                {appointment.type}
                                            </Badge>
                                        </td>

                                        {/* Status */}
                                        <td className="px-4 py-4">
                                            <Badge
                                                variant="secondary"
                                                className={
                                                    statusStyles[
                                                        appointment.status
                                                    ]
                                                }
                                            >
                                                {appointment.status}
                                            </Badge>
                                        </td>

                                        {/* Payment */}
                                        <td className="px-4 py-4">
                                            <Badge
                                                variant="secondary"
                                                className={
                                                    paymentStyles[
                                                        appointment.payment
                                                    ]
                                                }
                                            >
                                                {appointment.payment}
                                            </Badge>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-4 py-4 text-right">
                                            <div className="flex justify-end gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    title="View appointment"
                                                >
                                                    <Eye className="size-4" />
                                                </Button>

                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    title="More actions"
                                                >
                                                    <MoreHorizontal className="size-4" />
                                                </Button>

                                                {appointment.status ===
                                                    'Scheduled' && (
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        title="Cancel appointment"
                                                    >
                                                        <XCircle className="size-4 text-destructive" />
                                                    </Button>
                                                )}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminAppointmentsPage;
