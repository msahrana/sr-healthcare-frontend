'use client';

import dynamic from 'next/dynamic';
import { ChangeEvent, Suspense, useState } from 'react';

import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import useDebounce from '@/hooks/debounce.hook';
import { DoctorParams, DoctorVerificationStatus } from '@/interface';

import DoctorApprovalTable from './doctor-approval-table';
import DoctorApprovalTableLoading from './doctor-approval-table-loading';

const DoctorReviewSheet = dynamic(() => import('./doctor-review-sheet'), {
    loading: () => (
        <div className="p-4 text-sm text-muted-foreground">
            Loading doctor details...
        </div>
    ),
});

const verificationStatus: ['ALL' | DoctorVerificationStatus, string][] = [
    ['APPROVED', 'Approved'],
    ['PENDING', 'Pending'],
    ['REJECTED', 'Rejected'],
    ['ALL', 'All'],
];

export default function DoctorApprovalTabs() {
    const [tab, setTab] = useState<'ALL' | DoctorVerificationStatus>('ALL');
    const [selectedId, setSelectedId] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [page, setPage] = useState(1);

    const debouncedSearch = useDebounce(searchInput);

    const handleSearch = (
        e: ChangeEvent<HTMLInputElement, HTMLInputElement>,
    ) => {
        setSearchInput(e.target.value);
        setPage(1);
    };

    const queryParams: DoctorParams = {
        page,
        limit: 1,
        ...(tab === 'ALL' ? {} : { verificationStatus: tab }),
        ...(debouncedSearch ? { searchTerm: debouncedSearch } : {}),
    };

    return (
        <>
            <div className="my-5 flex justify-between">
                <div>
                    <Input
                        onChange={handleSearch}
                        value={searchInput}
                        type="search"
                        placeholder="Search by name or email"
                    />
                </div>

                <Tabs value={tab} onValueChange={setTab}>
                    <TabsList>
                        {verificationStatus.map(([value, label]) => (
                            <TabsTrigger key={value} value={value}>
                                {label}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>
            </div>

            <Suspense fallback={<DoctorApprovalTableLoading />}>
                <DoctorApprovalTable
                    {...queryParams}
                    handleReview={setSelectedId}
                    handlePageChange={setPage}
                />
            </Suspense>

            {selectedId && (
                <DoctorReviewSheet
                    selectedId={selectedId}
                    onClose={() => setSelectedId('')}
                    {...queryParams}
                />
            )}
        </>
    );
}
