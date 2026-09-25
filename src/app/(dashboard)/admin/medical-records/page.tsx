'use client';

import {
    CalendarDays,
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

interface MedicalRecord {
    id: string;
    patient: string;
    patientEmail: string;
    doctor: string;
    specialty: string;
    recordType: 'Consultation' | 'Lab Report' | 'Diagnosis' | 'Follow-up';
    date: string;
    status: 'Active' | 'Archived';
}

const medicalRecords: MedicalRecord[] = [
    {
        id: 'MED-001',
        patient: 'Mohammad Rahim',
        patientEmail: 'rahim@example.com',
        doctor: 'Dr. Sadiatul Islam',
        specialty: 'Cardiology',
        recordType: 'Consultation',
        date: '25 Sep 2026',
        status: 'Active',
    },
    {
        id: 'MED-002',
        patient: 'Nusrat Jahan',
        patientEmail: 'nusrat@example.com',
        doctor: 'Dr. Arif Hossain',
        specialty: 'Neurology',
        recordType: 'Diagnosis',
        date: '24 Sep 2026',
        status: 'Active',
    },
    {
        id: 'MED-003',
        patient: 'Tanvir Ahmed',
        patientEmail: 'tanvir@example.com',
        doctor: 'Dr. Nusrat Jahan',
        specialty: 'Dermatology',
        recordType: 'Lab Report',
        date: '22 Sep 2026',
        status: 'Active',
    },
    {
        id: 'MED-004',
        patient: 'Farhana Akter',
        patientEmail: 'farhana@example.com',
        doctor: 'Dr. Farhana Rahman',
        specialty: 'Gynecology',
        recordType: 'Follow-up',
        date: '20 Sep 2026',
        status: 'Archived',
    },
    {
        id: 'MED-005',
        patient: 'Sabbir Hossain',
        patientEmail: 'sabbir@example.com',
        doctor: 'Dr. Tanvir Ahmed',
        specialty: 'Medicine',
        recordType: 'Consultation',
        date: '18 Sep 2026',
        status: 'Active',
    },
];

const statusStyles: Record<MedicalRecord['status'], string> = {
    Active: 'bg-green-100 text-green-700 hover:bg-green-100',
    Archived: 'bg-gray-100 text-gray-700 hover:bg-gray-100',
};

const AdminMedicalRecordsPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">
                    Medical Records
                </h1>

                <p className="text-muted-foreground">
                    Manage patient medical records, diagnoses, consultations,
                    and clinical documents.
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
                                Total Records
                            </p>

                            <p className="text-2xl font-bold">3,842</p>
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
                                Active Records
                            </p>

                            <p className="text-2xl font-bold">3,421</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-blue-500/10 p-3">
                            <CalendarDays className="size-5 text-blue-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                This Month
                            </p>

                            <p className="text-2xl font-bold">428</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-purple-500/10 p-3">
                            <UserRound className="size-5 text-purple-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Patients With Records
                            </p>

                            <p className="text-2xl font-bold">2,186</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Medical Records */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle>All Medical Records</CardTitle>

                            <p className="mt-1 text-sm text-muted-foreground">
                                View and manage patient clinical records.
                            </p>
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search medical records..."
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
                                        Record Type
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Date
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
                                {medicalRecords.map((record) => (
                                    <tr
                                        key={record.id}
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
                                                        {record.patient}
                                                    </p>

                                                    <p className="text-sm text-muted-foreground">
                                                        {record.patientEmail}
                                                    </p>

                                                    <p className="text-xs text-muted-foreground">
                                                        {record.id}
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
                                                        {record.doctor}
                                                    </p>

                                                    <p className="text-xs text-muted-foreground">
                                                        {record.specialty}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Record Type */}
                                        <td className="px-4 py-4">
                                            <Badge variant="outline">
                                                {record.recordType}
                                            </Badge>
                                        </td>

                                        {/* Date */}
                                        <td className="px-4 py-4 text-sm">
                                            {record.date}
                                        </td>

                                        {/* Status */}
                                        <td className="px-4 py-4">
                                            <Badge
                                                variant="secondary"
                                                className={
                                                    statusStyles[record.status]
                                                }
                                            >
                                                {record.status}
                                            </Badge>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-4 py-4 text-right">
                                            <div className="flex justify-end gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    title="View medical record"
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

export default AdminMedicalRecordsPage;
