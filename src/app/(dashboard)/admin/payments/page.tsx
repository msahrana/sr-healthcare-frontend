'use client';

import {
    Banknote,
    CheckCircle2,
    Clock3,
    CreditCard,
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

interface Payment {
    id: string;
    patient: string;
    patientEmail: string;
    doctor: string;
    amount: string;
    method: 'bKash' | 'Stripe' | 'SSLCommerz';
    date: string;
    status: 'Paid' | 'Pending' | 'Failed' | 'Refunded';
    type: 'Consultation' | 'Appointment';
}

const payments: Payment[] = [
    {
        id: 'PAY-001',
        patient: 'Mohammad Rahim',
        patientEmail: 'rahim@example.com',
        doctor: 'Dr. Sadiatul Islam',
        amount: '৳1,000',
        method: 'bKash',
        date: '26 Sep 2026',
        status: 'Paid',
        type: 'Consultation',
    },
    {
        id: 'PAY-002',
        patient: 'Nusrat Jahan',
        patientEmail: 'nusrat@example.com',
        doctor: 'Dr. Arif Hossain',
        amount: '৳800',
        method: 'Stripe',
        date: '26 Sep 2026',
        status: 'Pending',
        type: 'Appointment',
    },
    {
        id: 'PAY-003',
        patient: 'Tanvir Ahmed',
        patientEmail: 'tanvir@example.com',
        doctor: 'Dr. Nusrat Jahan',
        amount: '৳1,200',
        method: 'SSLCommerz',
        date: '25 Sep 2026',
        status: 'Paid',
        type: 'Consultation',
    },
    {
        id: 'PAY-004',
        patient: 'Farhana Akter',
        patientEmail: 'farhana@example.com',
        doctor: 'Dr. Farhana Rahman',
        amount: '৳900',
        method: 'bKash',
        date: '24 Sep 2026',
        status: 'Refunded',
        type: 'Appointment',
    },
    {
        id: 'PAY-005',
        patient: 'Sabbir Hossain',
        patientEmail: 'sabbir@example.com',
        doctor: 'Dr. Tanvir Ahmed',
        amount: '৳700',
        method: 'bKash',
        date: '23 Sep 2026',
        status: 'Failed',
        type: 'Consultation',
    },
];

const statusStyles: Record<Payment['status'], string> = {
    Paid: 'bg-green-100 text-green-700 hover:bg-green-100',
    Pending: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
    Failed: 'bg-red-100 text-red-700 hover:bg-red-100',
    Refunded: 'bg-gray-100 text-gray-700 hover:bg-gray-100',
};

const AdminPaymentsPage = () => {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold tracking-tight">Payments</h1>

                <p className="text-muted-foreground">
                    Monitor consultation payments, transactions, refunds, and
                    payment activity.
                </p>
            </div>

            {/* Statistics */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-primary/10 p-3">
                            <Banknote className="size-5 text-primary" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Total Revenue
                            </p>

                            <p className="text-2xl font-bold">৳428,500</p>
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
                                Successful
                            </p>

                            <p className="text-2xl font-bold">412</p>
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

                            <p className="text-2xl font-bold">18</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-red-500/10 p-3">
                            <XCircle className="size-5 text-red-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Failed
                            </p>

                            <p className="text-2xl font-bold">9</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Payment Methods */}
            <div className="grid gap-4 sm:grid-cols-3">
                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="rounded-lg bg-pink-500/10 p-3">
                            <CreditCard className="size-5 text-pink-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                bKash
                            </p>
                            <p className="font-semibold">৳218,400</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="rounded-lg bg-blue-500/10 p-3">
                            <CreditCard className="size-5 text-blue-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                Stripe
                            </p>
                            <p className="font-semibold">৳124,600</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="flex items-center gap-4 p-5">
                        <div className="rounded-lg bg-purple-500/10 p-3">
                            <CreditCard className="size-5 text-purple-600" />
                        </div>

                        <div>
                            <p className="text-sm text-muted-foreground">
                                SSLCommerz
                            </p>
                            <p className="font-semibold">৳85,500</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Payments Table */}
            <Card>
                <CardHeader>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <CardTitle>All Transactions</CardTitle>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Review all payment transactions on SR
                                HealthCare.
                            </p>
                        </div>

                        <div className="relative w-full md:w-80">
                            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                            <Input
                                placeholder="Search transactions..."
                                className="pl-9"
                            />
                        </div>
                    </div>
                </CardHeader>

                <CardContent>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-300">
                            <thead>
                                <tr className="border-b text-left text-sm text-muted-foreground">
                                    <th className="px-4 py-3 font-medium">
                                        Transaction
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Patient
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Doctor
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Amount
                                    </th>

                                    <th className="px-4 py-3 font-medium">
                                        Method
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
                                {payments.map((payment) => (
                                    <tr
                                        key={payment.id}
                                        className="border-b last:border-0 hover:bg-muted/50"
                                    >
                                        {/* Transaction */}
                                        <td className="px-4 py-4">
                                            <p className="font-medium">
                                                {payment.id}
                                            </p>

                                            <p className="text-xs text-muted-foreground">
                                                {payment.type}
                                            </p>
                                        </td>

                                        {/* Patient */}
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                    <UserRound className="size-4 text-primary" />
                                                </div>

                                                <div>
                                                    <p className="text-sm font-medium">
                                                        {payment.patient}
                                                    </p>

                                                    <p className="text-xs text-muted-foreground">
                                                        {payment.patientEmail}
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Doctor */}
                                        <td className="px-4 py-4">
                                            <div className="flex items-center gap-2">
                                                <Stethoscope className="size-4 text-primary" />

                                                <p className="text-sm">
                                                    {payment.doctor}
                                                </p>
                                            </div>
                                        </td>

                                        {/* Amount */}
                                        <td className="px-4 py-4 font-semibold">
                                            {payment.amount}
                                        </td>

                                        {/* Method */}
                                        <td className="px-4 py-4">
                                            <Badge variant="outline">
                                                {payment.method}
                                            </Badge>
                                        </td>

                                        {/* Date */}
                                        <td className="px-4 py-4 text-sm">
                                            {payment.date}
                                        </td>

                                        {/* Status */}
                                        <td className="px-4 py-4">
                                            <Badge
                                                variant="secondary"
                                                className={
                                                    statusStyles[payment.status]
                                                }
                                            >
                                                {payment.status}
                                            </Badge>
                                        </td>

                                        {/* Actions */}
                                        <td className="px-4 py-4 text-right">
                                            <div className="flex justify-end gap-1">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    title="View transaction"
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

export default AdminPaymentsPage;
