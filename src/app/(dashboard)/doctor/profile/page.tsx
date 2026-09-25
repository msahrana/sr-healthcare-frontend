import {
    Award,
    CalendarDays,
    Edit,
    GraduationCap,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Stethoscope,
    UserRound,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const DoctorProfilePage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <div className="flex items-center gap-2">
                        <UserRound className="size-6 text-primary" />

                        <h1 className="text-2xl font-semibold tracking-tight">
                            My Profile
                        </h1>
                    </div>

                    <p className="mt-1 text-sm text-muted-foreground">
                        Manage your professional and personal profile
                        information.
                    </p>
                </div>

                <Button>
                    <Edit className="mr-2 size-4" />
                    Edit Profile
                </Button>
            </div>

            {/* Profile Overview */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center">
                        {/* Avatar */}
                        <div className="flex size-28 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Stethoscope className="size-12 text-primary" />
                        </div>

                        {/* Doctor Information */}
                        <div className="flex-1">
                            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                                <h2 className="text-2xl font-semibold">
                                    Dr. Sadiatut Taiyeba Siyana
                                </h2>

                                <Badge>
                                    <ShieldCheck className="mr-1 size-3" />
                                    Verified Doctor
                                </Badge>
                            </div>

                            <p className="mt-1 text-muted-foreground">
                                MBBS, FCPS — General Medicine
                            </p>

                            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-3">
                                <div className="flex items-center gap-2">
                                    <Mail className="size-4 text-muted-foreground" />
                                    <span>doctor@example.com</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Phone className="size-4 text-muted-foreground" />
                                    <span>+880 1712-345678</span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="size-4 text-muted-foreground" />
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>
                        </div>

                        {/* Status */}
                        <div className="flex flex-col items-start gap-2 md:items-end">
                            <Badge variant="outline">AVAILABLE</Badge>

                            <p className="text-xs text-muted-foreground">
                                Available for consultations
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Main Content */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Professional Information */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Professional Information</CardTitle>

                        <CardDescription>
                            Your medical qualifications and professional
                            information.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Stethoscope className="size-4 text-primary" />
                                    Specialization
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    General Medicine
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <GraduationCap className="size-4 text-primary" />
                                    Qualification
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    MBBS, FCPS
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <Award className="size-4 text-primary" />
                                    Experience
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    8+ Years
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm font-medium">
                                    <ShieldCheck className="size-4 text-primary" />
                                    Medical Registration
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    BMDC-123456
                                </p>
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-2">
                            <h3 className="text-sm font-medium">
                                Professional Bio
                            </h3>

                            <p className="text-sm leading-6 text-muted-foreground">
                                Experienced medical professional providing
                                patient-focused consultation and follow-up care.
                                Specializes in general medicine, preventive
                                healthcare, diagnosis, and treatment planning.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Consultation Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Consultation Information</CardTitle>

                        <CardDescription>
                            Your current consultation settings.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-5">
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Consultation Type
                            </p>

                            <p className="mt-1 text-sm font-medium">
                                Online & Video
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Consultation Fee
                            </p>

                            <p className="mt-1 text-lg font-semibold">৳ 800</p>
                        </div>

                        <Separator />

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Consultation Duration
                            </p>

                            <p className="mt-1 text-sm font-medium">
                                30 Minutes
                            </p>
                        </div>

                        <Separator />

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Weekly Availability
                            </p>

                            <p className="mt-1 text-sm font-medium">
                                Saturday – Thursday
                            </p>
                        </div>

                        <Button className="w-full" variant="outline">
                            <Link href={'/doctor/schedules'}>
                                <div className="flex">
                                    <CalendarDays className="mr-2 size-4" />
                                    Manage Schedule
                                </div>
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Account Information */}
            <Card>
                <CardHeader>
                    <CardTitle>Account Information</CardTitle>

                    <CardDescription>
                        Basic account and verification information.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <p className="text-xs text-muted-foreground">
                                Account Role
                            </p>

                            <p className="mt-1 text-sm font-medium">DOCTOR</p>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Account Status
                            </p>

                            <Badge className="mt-1">ACTIVE</Badge>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Email Verification
                            </p>

                            <div className="mt-1 flex items-center gap-1.5 text-sm font-medium">
                                <ShieldCheck className="size-4 text-primary" />
                                Verified
                            </div>
                        </div>

                        <div>
                            <p className="text-xs text-muted-foreground">
                                Member Since
                            </p>

                            <p className="mt-1 text-sm font-medium">
                                January 2026
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default DoctorProfilePage;
