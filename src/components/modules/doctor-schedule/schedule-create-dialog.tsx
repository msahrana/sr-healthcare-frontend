'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

const CreateScheduleForm = dynamic(
    () => import('@/components/form/create-schedule-form'),
    {
        loading: () => (
            <div className="space-y-3 py-4">
                <div className="h-10 animate-pulse rounded-md bg-muted" />
                <div className="h-10 animate-pulse rounded-md bg-muted" />
                <div className="h-10 animate-pulse rounded-md bg-muted" />
            </div>
        ),
        ssr: false,
    },
);

const ScheduleCreateDialog = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger render={<Button size="lg" />}>
                Create Schedule
            </DialogTrigger>

            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Schedule</DialogTitle>

                    <DialogDescription>
                        This schedule will be visible to patient
                    </DialogDescription>
                </DialogHeader>

                {open && (
                    <CreateScheduleForm handleClose={() => setOpen(false)} />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ScheduleCreateDialog;
