'use client';

import {
    CalendarCheck,
    Eye,
    MoreHorizontal,
    Search,
    UserRound,
    Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Patient {
    id: string;
    name: string;
    email: string;
    contactNumber: string;
    appointments: number;
    lastVisit: string;
    status: 'Active' | 'Inactive';
}

const patients: Patient[] = [
    {
        id: 'PAT-001',
        name: 'Mohammad Rahim',
        email: 'rahim@example.com',
        contactNumber: '+8801712345678',
        appointments: 12,
        lastVisit: '25 Sep 2026',
        status: 'Active',
    },
    {
        id: 'PAT-002',
        name: 'Nusrat Jahan',
        email: 'nusrat@example.com',
        contactNumber: '+8801812345678',
        appointments: 8,
        lastVisit: '24 Sep 2026',
        status: 'Active',
    },
    {
        id: 'PAT-003',
        name: 'Tanvir Ahmed',
        email: 'tanvir@example.com',
        contactNumber: '+8801912345678',
        appointments: 15,
        lastVisit: '22 Sep 2026',
        status: 'Active',
    },
    {
        id: 'PAT-004',
        name: 'Farhana Akter',
        email: 'farhana@example.com',
        contactNumber: '+8801612345678',
        appointments: 5,
        lastVisit: '18 Sep 2026',
        status: 'Inactive',
    },
    {
        id: 'PAT-005',
        name: 'Sabbir Hossain',
        email: 'sabbir@example.com',
        contactNumber: '+8801512345678',
        appointments: 21,
        lastVisit: '15 Sep 2026',
        status: 'Active',
    },
];

const statusStyles: Record<Patient['status'], string> = {
    Active: 'bg-green-100 text-green-700 hover:bg-green-100',
    Inactive: 'bg-gray-100 text-gray-700 hover:bg-gray-100',
};

const AdminPatientsPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Patients</h1>

                <p className="text-muted-foreground">
                    Manage registered patients and monitor their healthcare
                    activity.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-primary/10 p-3">
                            <Users className="size-5 text-primary" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Patients
                            </p>

                            <p className="text-2xl font-bold">2,845</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-green-500/10 p-3">
                            <UserRound className="size-5 text-green-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Active Patients
                            </p>

                            <p className="text-2xl font-bold">2,612</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-blue-500/10 p-3">
                            <UserRound className="size-5 text-blue-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                New This Month
                            </p>

                            <p className="text-2xl font-bold">184</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-purple-500/10 p-3">
                            <CalendarCheck className="size-5 text-purple-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Active Appointments
                            </p>

                            <p className="text-2xl font-bold">356</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Patients Table */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle>All Patients</CardTitle>

                            <p className="mt-1 text-sm text-muted-foreground">
                                View and manage patient accounts.
                            </p>
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search patients..."
                                className="pl-9"
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-245">
                            <thead>
                                <tr className="border-b text-left text-sm text-muted-foreground">
                                    <th className="px-4 py-3 font-medium">
                                        Patient
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Contact
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Appointments
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Last Visit
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
                                {patients.map((patient) => (
                                    <tr
                                        key={patient.id}
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
                                                        {patient.name}
                                                    </p>

                                                    <p className="text-sm text-muted-foreground">
                                                        {patient.email}
                                                    </p>

                                                    <p className="text-xs text-muted-foreground">
                                                        {patient.id}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Contact */}
                                        <td className="px-4 py-4 text-sm">
                                            {patient.contactNumber}
                                        </td>

                                        {/* Appointments */}
                                        <td className="px-4 py-4 text-sm">
                                            {patient.appointments}
                                        </td>

                                        {/* Last Visit */}
                                        <td className="px-4 py-4 text-sm">
                                            {patient.lastVisit}
                                        </td>

                                        {/* Status */}
                                        <td className="px-4 py-4">
                                            <Badge
                                                variant="secondary"
                                                className={
                                                    statusStyles[patient.status]
                                                }
                                            >
                                                {patient.status}
                                            </Badge>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-4 py-4 text-right">
                                            <div className="flex justify-end gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    title="View patient"
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

export default AdminPatientsPage;
