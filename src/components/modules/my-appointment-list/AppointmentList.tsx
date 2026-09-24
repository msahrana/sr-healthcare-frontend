'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useGetMyAppointments } from '@/hooks/appointment.hook';

const AppointmentList = () => {
    const params = useSearchParams();
    const status = params.get('status');

    const { data } = useGetMyAppointments({ page: 1, limit: 100 });

    const appointments = data?.data || [];

    if (status === 'failure') {
        return (
            <div>
                <div>
                    <h1>Payment Failed</h1>
                    <p>Please check your vendor</p>
                    <Link href="/dashboard/my-appointments">
                        Go back to appointments
                    </Link>
                </div>
            </div>
        );
    }

    if (status === 'success') {
        return (
            <div>
                <div>
                    <h1 className="text-green-600">Payment Successful</h1>
                    <p>Please be prepared to join the video call</p>
                    <Link href="/dashboard/my-appointments">
                        <span className="mt-1 bg-blue-600">
                            Go back to appointments
                        </span>
                    </Link>
                </div>
            </div>
        );
    }

    if (appointments.length === 0) {
        return <p>There is not appointment.</p>;
    }

    return (
        <div>
            {appointments.map(({ doctor, status, id }) => (
                <div key={id} className="border rounded-md p-3">
                    <div className="w-full flex gap-3">
                        <p>
                            Doctor:{' '}
                            <span className="font-bold mr-4">
                                {doctor.name}
                            </span>
                        </p>
                        <p>
                            Status:<span className="text-green-600 font-bold"> {status}</span>
                        </p>

                        <div className="ml-auto">
                            <Button>Join Meet</Button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AppointmentList;
