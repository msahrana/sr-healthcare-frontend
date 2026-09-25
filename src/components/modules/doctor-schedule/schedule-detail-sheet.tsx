'use client';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { Schedule } from '@/interface';
import Link from 'next/link';

interface Props {
    schedule: Schedule;
    open: boolean;
    onClose: () => void;
}

const ScheduleDetailSheet = ({ schedule, open, onClose }: Props) => {
    return (
        <Sheet open={open} onOpenChange={onClose}>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle>Schedule details</SheetTitle>
                    <SheetDescription>
                        {new Date(schedule.startDateTime).toLocaleDateString(
                            undefined,
                            {
                                dateStyle: 'full',
                            },
                        )}
                    </SheetDescription>
                </SheetHeader>

                <dl className="mt-4 flex flex-col gap-3 text-sm px-2">
                    <div className="flex justify-between">
                        <dt className="text-muted-foreground">Start</dt>

                        <dd>
                            {new Date(
                                schedule.startDateTime,
                            ).toLocaleTimeString(undefined, {
                                timeStyle: 'short',
                            })}
                        </dd>
                    </div>

                    <div className="flex justify-between">
                        <dt className="text-muted-foreground">End</dt>

                        <dd>
                            {new Date(schedule.endDateTime).toLocaleTimeString(
                                undefined,
                                {
                                    timeStyle: 'short',
                                },
                            )}
                        </dd>
                    </div>

                    <div className="flex justify-between">
                        <dt className="text-muted-foreground">Status</dt>

                        <dd>{schedule.status}</dd>
                    </div>

                    <div className="flex justify-between">
                        <dt className="text-muted-foreground">Slots</dt>

                        <dd>
                            {schedule.totalSlots - schedule.availableSlots}/
                            {schedule.totalSlots} booked
                        </dd>
                    </div>

                    <div className="flex justify-between gap-4">
                        <dt className="text-muted-foreground">Meeting link</dt>

                        <dd className="truncate">
                            <Link
                                href={schedule.meetingLink}
                                target="_blank"
                                rel="noreferrer"
                                className="underline underline-offset-4 text-green-600 font-bold hover:text-primary"
                            >
                                Join
                            </Link>
                        </dd>
                    </div>
                </dl>
            </SheetContent>
        </Sheet>
    );
};

export default ScheduleDetailSheet;
