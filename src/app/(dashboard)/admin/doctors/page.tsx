'use client';

import {
    Eye,
    MoreHorizontal,
    Search,
    Stethoscope,
    UserRound,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface Doctor {
    id: string;
    name: string;
    email: string;
    specialty: string;
    experience: string;
    patients: number;
    status: 'Active' | 'Inactive' | 'Pending';
    verified: boolean;
}

const doctors: Doctor[] = [
    {
        id: 'DOC-001',
        name: 'Dr. Sadiatul Islam',
        email: 'sadiatul@example.com',
        specialty: 'Cardiology',
        experience: '8 Years',
        patients: 428,
        status: 'Active',
        verified: true,
    },
    {
        id: 'DOC-002',
        name: 'Dr. Arif Hossain',
        email: 'arif@example.com',
        specialty: 'Neurology',
        experience: '6 Years',
        patients: 315,
        status: 'Active',
        verified: true,
    },
    {
        id: 'DOC-003',
        name: 'Dr. Nusrat Jahan',
        email: 'nusrat@example.com',
        specialty: 'Dermatology',
        experience: '5 Years',
        patients: 267,
        status: 'Active',
        verified: true,
    },
    {
        id: 'DOC-004',
        name: 'Dr. Tanvir Ahmed',
        email: 'tanvir@example.com',
        specialty: 'Medicine',
        experience: '4 Years',
        patients: 189,
        status: 'Pending',
        verified: false,
    },
    {
        id: 'DOC-005',
        name: 'Dr. Farhana Rahman',
        email: 'farhana@example.com',
        specialty: 'Gynecology',
        experience: '7 Years',
        patients: 356,
        status: 'Inactive',
        verified: true,
    },
];

const statusStyles: Record<Doctor['status'], string> = {
    Active: 'bg-green-100 text-green-700 hover:bg-green-100',
    Inactive: 'bg-gray-100 text-gray-700 hover:bg-gray-100',
    Pending: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
};

const AdminDoctorsPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Doctors</h1>
                <p className="text-muted-foreground">
                    Manage registered doctors and monitor their account status.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-primary/10 p-3">
                            <Stethoscope className="size-5 text-primary" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Doctors
                            </p>
                            <p className="text-2xl font-bold">124</p>
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
                                Active
                            </p>
                            <p className="text-2xl font-bold">106</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-yellow-500/10 p-3">
                            <Stethoscope className="size-5 text-yellow-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Pending
                            </p>
                            <p className="text-2xl font-bold">18</p>
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
                                Verified
                            </p>
                            <p className="text-2xl font-bold">119</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Doctors Table */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <CardTitle>All Doctors</CardTitle>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search doctors..."
                                className="pl-9"
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-200">
                            <thead>
                                <tr className="border-b text-left text-sm text-muted-foreground">
                                    <th className="px-4 py-3 font-medium">
                                        Doctor
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Specialty
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Experience
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Patients
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Status
                                    </th>
                                    <th className="px-4 py-3 font-medium">
                                        Verification
                                    </th>
                                    <th className="px-4 py-3 text-right font-medium">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {doctors.map((doctor) => (
                                    <tr
                                        key={doctor.id}
                                        className="border-b last:border-0 hover:bg-muted/50"
                                    >
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                    <Stethoscope className="size-5 text-primary" />
                                                </div>

                                                <div>
                                                    <p className="font-medium">
                                                        {doctor.name}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {doctor.email}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-4 py-4 text-sm">
                                            {doctor.specialty}
                                        </td>

                                        <td className="px-4 py-4 text-sm">
                                            {doctor.experience}
                                        </td>

                                        <td className="px-4 py-4 text-sm">
                                            {doctor.patients}
                                        </td>

                                        <td className="px-4 py-4">
                                            <Badge
                                                variant="secondary"
                                                className={
                                                    statusStyles[doctor.status]
                                                }
                                            >
                                                {doctor.status}
                                            </Badge>
                                        </td>

                                        <td className="px-4 py-4">
                                            <Badge
                                                variant={
                                                    doctor.verified
                                                        ? 'default'
                                                        : 'secondary'
                                                }
                                            >
                                                {doctor.verified
                                                    ? 'Verified'
                                                    : 'Not Verified'}
                                            </Badge>
                                        </td>

                                        <td className="px-4 py-4 text-right">
                                            <div className="flex justify-end gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    title="View doctor"
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

export default AdminDoctorsPage;
