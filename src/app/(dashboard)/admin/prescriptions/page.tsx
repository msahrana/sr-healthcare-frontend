'use client';

import {
    CheckCircle2,
    Eye,
    FileText,
    MoreHorizontal,
    Search,
    Stethoscope,
    UserRound,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Prescription {
    id: string;
    patient: string;
    patientEmail: string;
    doctor: string;
    specialty: string;
    date: string;
    medicines: number;
    status: 'Active' | 'Completed';
}

const prescriptions: Prescription[] = [
    {
        id: 'PRE-001',
        patient: 'Mohammad Rahim',
        patientEmail: 'rahim@example.com',
        doctor: 'Dr. Sadiatul Islam',
        specialty: 'Cardiology',
        date: '25 Sep 2026',
        medicines: 4,
        status: 'Active',
    },
    {
        id: 'PRE-002',
        patient: 'Nusrat Jahan',
        patientEmail: 'nusrat@example.com',
        doctor: 'Dr. Arif Hossain',
        specialty: 'Neurology',
        date: '24 Sep 2026',
        medicines: 3,
        status: 'Active',
    },
    {
        id: 'PRE-003',
        patient: 'Tanvir Ahmed',
        patientEmail: 'tanvir@example.com',
        doctor: 'Dr. Nusrat Jahan',
        specialty: 'Dermatology',
        date: '22 Sep 2026',
        medicines: 2,
        status: 'Completed',
    },
    {
        id: 'PRE-004',
        patient: 'Farhana Akter',
        patientEmail: 'farhana@example.com',
        doctor: 'Dr. Farhana Rahman',
        specialty: 'Gynecology',
        date: '20 Sep 2026',
        medicines: 5,
        status: 'Completed',
    },
    {
        id: 'PRE-005',
        patient: 'Sabbir Hossain',
        patientEmail: 'sabbir@example.com',
        doctor: 'Dr. Tanvir Ahmed',
        specialty: 'Medicine',
        date: '18 Sep 2026',
        medicines: 3,
        status: 'Active',
    },
];

const statusStyles: Record<Prescription['status'], string> = {
    Active: 'bg-green-100 text-green-700 hover:bg-green-100',
    Completed: 'bg-gray-100 text-gray-700 hover:bg-gray-100',
};

const AdminPrescriptionsPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Prescriptions
                </h1>

                <p className="text-muted-foreground">
                    Monitor prescriptions issued by doctors and review patient
                    medication records.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-primary/10 p-3">
                            <FileText className="size-5 text-primary" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Prescriptions
                            </p>

                            <p className="text-2xl font-bold">1,284</p>
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
                                Active
                            </p>

                            <p className="text-2xl font-bold">486</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-blue-500/10 p-3">
                            <FileText className="size-5 text-blue-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                This Month
                            </p>

                            <p className="text-2xl font-bold">218</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-purple-500/10 p-3">
                            <Stethoscope className="size-5 text-purple-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Prescribing Doctors
                            </p>

                            <p className="text-2xl font-bold">98</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Prescriptions Table */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle>All Prescriptions</CardTitle>

                            <p className="mt-1 text-sm text-muted-foreground">
                                View prescription history across the healthcare
                                platform.
                            </p>
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search prescriptions..."
                                className="pl-9"
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-250">
                            <thead>
                                <tr className="border-b text-left text-sm text-muted-foreground">
                                    <th className="px-4 py-3 font-medium">
                                        Patient
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Doctor
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Date
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Medicines
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Status
                                    </th>

                                    <th className="px-4 py-3 text-right font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {prescriptions.map((prescription) => (
                                    <tr
                                        key={prescription.id}
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
                                                        {prescription.patient}
                                                    </p>

                                                    <p className="text-sm text-muted-foreground">
                                                        {
                                                            prescription.patientEmail
                                                        }
                                                    </p>

                                                    <p className="text-xs text-muted-foreground">
                                                        {prescription.id}
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
                                                        {prescription.doctor}
                                                    </p>

                                                    <p className="text-xs text-muted-foreground">
                                                        {prescription.specialty}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Date */}
                                        <td className="px-4 py-4 text-sm">
                                            {prescription.date}
                                        </td>

                                        {/* Medicines */}
                                        <td className="px-4 py-4 text-sm">
                                            {prescription.medicines} medicines
                                        </td>

                                        {/* Status */}
                                        <td className="px-4 py-4">
                                            <Badge
                                                variant="secondary"
                                                className={
                                                    statusStyles[
                                                        prescription.status
                                                    ]
                                                }
                                            >
                                                {prescription.status}
                                            </Badge>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-4 py-4 text-right">
                                            <div className="flex justify-end gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    title="View prescription"
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

export default AdminPrescriptionsPage;
