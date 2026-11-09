'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Eye, MoreHorizontal, Search, Stethoscope } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

import type { Doctor } from '@/lib/mock-doctors';

interface DoctorsTableProps {
    doctors: Doctor[];
}

const statusStyles: Record<Doctor['status'], string> = {
    Active: 'bg-green-100 text-green-700 hover:bg-green-100',
    Inactive: 'bg-gray-100 text-gray-700 hover:bg-gray-100',
    Pending: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100',
};

const DoctorsTable = ({ doctors }: DoctorsTableProps) => {
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');

    const parentRef = useRef<HTMLDivElement>(null);

    // Debounce search by 300ms
    useEffect(() => {
        const timeoutId = window.setTimeout(() => {
            setDebouncedSearch(search.trim().toLowerCase());
        }, 300);

        return () => window.clearTimeout(timeoutId);
    }, [search]);

    // Filter only when the debounced search value changes
    const filteredDoctors = useMemo(() => {
        if (!debouncedSearch) return doctors;

        return doctors.filter((doctor) => {
            return (
                doctor.name.toLowerCase().includes(debouncedSearch) ||
                doctor.email.toLowerCase().includes(debouncedSearch) ||
                doctor.specialty.toLowerCase().includes(debouncedSearch) ||
                doctor.id.toLowerCase().includes(debouncedSearch)
            );
        });
    }, [doctors, debouncedSearch]);

    const virtualizer = useVirtualizer({
        count: filteredDoctors.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 73,
        overscan: 8,
    });

    return (
        <Card>
            <CardHeader>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                        <CardTitle>All Doctors</CardTitle>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Showing {filteredDoctors.length.toLocaleString()}{' '}
                            doctors
                        </p>
                    </div>

                    <div className="relative w-full md:w-80">
                        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search doctors..."
                            className="pl-9"
                        />
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <div className="overflow-x-auto">
                    <div className="min-w-250">
                        {/* Table header */}
                        <div className="sticky top-0 z-10 grid grid-cols-[2.2fr_1.2fr_0.9fr_0.7fr_0.9fr_1fr_0.6fr] border-b bg-background text-left text-sm text-muted-foreground">
                            {[
                                'Doctor',
                                'Specialty',
                                'Experience',
                                'Patients',
                                'Status',
                                'Verification',
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

                        {/* Virtualized rows */}
                        <div
                            ref={parentRef}
                            className="h-140 overflow-y-auto"
                        >
                            {filteredDoctors.length > 0 ? (
                                <div
                                    style={{
                                        height: `${virtualizer.getTotalSize()}px`,
                                        position: 'relative',
                                        width: '100%',
                                    }}
                                >
                                    {virtualizer
                                        .getVirtualItems()
                                        .map((virtualRow) => {
                                            const doctor =
                                                filteredDoctors[
                                                    virtualRow.index
                                                ];

                                            return (
                                                <div
                                                    key={doctor.id}
                                                    data-index={
                                                        virtualRow.index
                                                    }
                                                    ref={
                                                        virtualizer.measureElement
                                                    }
                                                    className="absolute left-0 top-0 grid w-full grid-cols-[2.2fr_1.2fr_0.9fr_0.7fr_0.9fr_1fr_0.6fr] items-center border-b hover:bg-muted/50"
                                                    style={{
                                                        height: `${virtualRow.size}px`,
                                                        transform: `translateY(${virtualRow.start}px)`,
                                                    }}
                                                >
                                                    <div className="px-4 py-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                                                                <Stethoscope className="size-5 text-primary" />
                                                            </div>

                                                            <div className="min-w-0">
                                                                <p className="truncate font-medium">
                                                                    {
                                                                        doctor.name
                                                                    }
                                                                </p>
                                                                <p className="truncate text-sm text-muted-foreground">
                                                                    {
                                                                        doctor.email
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="px-4 py-3 text-sm">
                                                        {doctor.specialty}
                                                    </div>

                                                    <div className="px-4 py-3 text-sm">
                                                        {doctor.experience}
                                                    </div>

                                                    <div className="px-4 py-3 text-sm">
                                                        {doctor.patients}
                                                    </div>

                                                    <div className="px-4 py-3">
                                                        <Badge
                                                            variant="secondary"
                                                            className={
                                                                statusStyles[
                                                                    doctor
                                                                        .status
                                                                ]
                                                            }
                                                        >
                                                            {doctor.status}
                                                        </Badge>
                                                    </div>

                                                    <div className="px-4 py-3">
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
                                                    </div>

                                                    <div className="px-4 py-3">
                                                        <div className="flex justify-end gap-1">
                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                title="View doctor"
                                                                aria-label={`View ${doctor.name}`}
                                                            >
                                                                <Eye className="size-4" />
                                                            </Button>

                                                            <Button
                                                                variant="ghost"
                                                                size="icon"
                                                                title="More actions"
                                                                aria-label={`More actions for ${doctor.name}`}
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
                                <p className="py-12 text-center text-sm text-muted-foreground">
                                    No doctors found.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default DoctorsTable;
