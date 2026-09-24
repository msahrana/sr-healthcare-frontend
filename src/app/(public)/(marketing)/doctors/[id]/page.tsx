import { getAllPublicDoctors, getPublicDoctorProfile } from '@/api';
import DoctorBooking from '@/components/modules/showDoctors/DoctorBooking';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import {
    ArrowLeft,
    BriefcaseBusiness,
    GraduationCap,
    ScrollText,
    Stethoscope,
    Wallet,
} from 'lucide-react';

export async function generateStaticParams() {
    const limit = 100;

    const firstPage = await getAllPublicDoctors({ page: 1, limit });

    const totalPages = firstPage.meta.totalPages ?? 1;

    const all = [...firstPage.data];

    for (let page = 2; page <= totalPages; page++) {
        const data = await getAllPublicDoctors({ page, limit });
        all.push(...data.data);
    }

    return all.map((doctor) => ({ id: doctor.id }));
}

const DoctorsDetailsPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;

    const data = await getPublicDoctorProfile(id);

    const doctor = data.data || undefined;

    if (!doctor) {
        return (
            <div className="py-10 text-center">
                <p className="text-muted-foreground">Doctor not found.</p>
                <Button
                    variant="link"
                    render={<Link href="/doctors">Back to doctors</Link>}
                    nativeButton={false}
                >
                    Back to doctors
                </Button>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-2xl space-y-8">
            <div className="my-10">
                <Button
                    variant="ghost"
                    size="sm"
                    className="mb-4 bg-blue-600 text-white"
                    render={<Link href="/doctors" />}
                    nativeButton={false}
                >
                    <ArrowLeft /> Back to doctors
                </Button>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            {doctor.name}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-1.5">
                            <span className="text-blue-600 font-bold">
                                <Stethoscope className="size-4" />
                            </span>
                            <span className="font-bold">
                                {doctor.specialization}
                            </span>
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3 text-muted-foreground">
                        <p className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">
                                <GraduationCap className="size-4 shrink-0" />
                            </span>
                            {doctor.qualifications}
                        </p>

                        <p className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">
                                <BriefcaseBusiness className="size-4 shrink-0" />
                            </span>
                            {doctor.experienceYears}{' '}
                            {doctor.experienceYears === 1 ? 'year' : 'years'} of
                            experience
                        </p>

                        <p className="flex items-center gap-2">
                            <span className="text-blue-600 font-bold">
                                <ScrollText className="size-4 shrink-0" />
                            </span>
                            License No:
                            <span className="font-bold">
                                {doctor.licenseNumber}
                            </span>
                        </p>

                        {doctor.consultationFee != null && (
                            <p className="flex items-center gap-2">
                                <span className="text-blue-600 font-bold">
                                    <Wallet className="size-4 shrink-0" />
                                </span>
                                Consultation fee:
                                <span className="text-red-600">
                                    ৳ {doctor.consultationFee}
                                </span>
                            </p>
                        )}

                        {doctor.bio && (
                            <div className="pt-2">
                                <p className="font-medium text-foreground text-xl">
                                    About
                                </p>
                                <p>{doctor.bio}</p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            <div className="space-y-4">
                <div>
                    <h2 className="text-lg font-semibold">Book appointment</h2>
                    <p className="text-sm text-muted-foreground">
                        Today&apos;s available slots. Booking redirects to bKash
                        payment.
                    </p>
                </div>

                <DoctorBooking doctorId={doctor.id} />
            </div>
        </div>
    );
};

export default DoctorsDetailsPage;
