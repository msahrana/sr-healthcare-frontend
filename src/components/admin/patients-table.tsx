'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Eye, MoreHorizontal, Search, UserRound } from 'lucide-react';

import { useVirtualizer } from '@tanstack/react-virtual';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import type { Patient } from '@/lib/mock-patients';

interface PatientsTableProps {
    patients: Patient[];
}

const statusStyles: Record<Patient['status'], string> = {
    Active: 'bg-green-100 text-green-700 hover:bg-green-100',
    Inactive: 'bg-gray-100 text-gray-700 hover:bg-gray-100',
};

export default function PatientsTable({ patients }: PatientsTableProps) {
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    const parentRef = useRef<HTMLDivElement>(null);

    // Debounce search input by 300ms
    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setDebouncedSearch(search.trim().toLowerCase());
        }, 300);

        return () => window.clearTimeout(timeoutId);
    }, [search]);

    // Filter patients only when the debounced search or data changes
    const filteredPatients = useMemo(() => {
        if (!debouncedSearch) return patients;

        return patients.filter((patient) => {
            return [
                patient.name,
                patient.email,
                patient.id,
                patient.contactNumber,
            ].some((value) => value.toLowerCase().includes(debouncedSearch));
        });
    }, [patients, debouncedSearch]);

    // Virtualize patient rows
    const virtualizer = useVirtualizer({
        count: filteredPatients.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 73,
        overscan: 8,
    });

    const virtualRows = virtualizer.getVirtualItems();

    return (
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
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                </div>

                <p className="text-sm text-muted-foreground">
                    Showing {filteredPatients.length.toLocaleString()} patients
                </p>
            </CardHeader>

            <CardContent>
                <div className="overflow-x-auto">
                    <div className="min-w-245">
                        {/* Table Header */}
                        <div className="grid grid-cols-[2fr_1.3fr_0.8fr_1fr_0.8fr_0.6fr] border-b text-left text-sm text-muted-foreground">
                            {[
                                'Patient',
                                'Contact',
                                'Appointments',
                                'Last Visit',
                                'Status',
                                'Action',
                            ].map((heading) => (
                                <div
                                    key={heading}
                                    className="px-4 py-3 font-medium"
                                >
                                    {heading}
                                </div>
                            ))}
                        </div>

                        {/* Virtualized Rows */}
                        <div ref={parentRef} className="h-140 overflow-y-auto">
                            {filteredPatients.length > 0 ? (
                                <div
                                    className="relative w-full"
                                    style={{
                                        height: `${virtualizer.getTotalSize()}px`,
                                    }}
                                >
                                    {virtualRows.map((virtualRow) => {
                                        const patient =
                                            filteredPatients[virtualRow.index];

                                        return (
                                            <div
                                                key={patient.id}
                                                data-index={virtualRow.index}
                                                ref={virtualizer.measureElement}
                                                className="absolute left-0 top-0 grid w-full grid-cols-[2fr_1.3fr_0.8fr_1fr_0.8fr_0.6fr] items-center border-b hover:bg-muted/50"
                                                style={{
                                                    height: `${virtualRow.size}px`,
                                                    transform: `translateY(${virtualRow.start}px)`,
                                                }}
                                            >
                                                {/* Patient */}
                                                <div className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                            <UserRound className="size-5 text-primary" />
                                                        </div>

                                                        <div className="min-w-0">
                                                            <p className="truncate font-medium">
                                                                {patient.name}
                                                            </p>

                                                            <p className="truncate text-sm text-muted-foreground">
                                                                {patient.email}
                                                            </p>

                                                            <p className="text-xs text-muted-foreground">
                                                                {patient.id}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Contact */}
                                                <div className="px-4 py-4 text-sm">
                                                    {patient.contactNumber}
                                                </div>

                                                {/* Appointments */}
                                                <div className="px-4 py-4 text-sm">
                                                    {patient.appointments}
                                                </div>

                                                {/* Last Visit */}
                                                <div className="px-4 py-4 text-sm">
                                                    {patient.lastVisit}
                                                </div>

                                                {/* Status */}
                                                <div className="px-4 py-4">
                                                    <Badge
                                                        variant="secondary"
                                                        className={
                                                            statusStyles[
                                                                patient.status
                                                            ]
                                                        }
                                                    >
                                                        {patient.status}
                                                    </Badge>
                                                </div>

                                                {/* Actions */}
                                                <div className="px-4 py-4">
                                                    <div className="flex justify-end gap-1">
                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            title="View patient"
                                                            aria-label={`View ${patient.name}`}
                                                        >
                                                            <Eye className="size-4" />
                                                        </Button>

                                                        <Button
                                                            variant="ghost"
                                                            size="icon"
                                                            title="More actions"
                                                            aria-label={`More actions for ${patient.name}`}
                                                        >
                                                            <MoreHorizontal className="size-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="py-12 text-center text-sm text-muted-foreground">
                                    No patients found.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
