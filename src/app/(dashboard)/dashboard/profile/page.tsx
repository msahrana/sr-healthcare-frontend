import {
    CalendarDays,
    Camera,
    CheckCircle2,
    Edit,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    User,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const ProfilePage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div>
                <p className="text-sm font-medium text-primary">Account</p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                    My Profile
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Manage your personal information and account details.
                </p>
            </div>

            {/* Profile Overview */}
            <Card>
                <CardContent className="p-6">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col items-center gap-4 sm:flex-row">
                            <div className="relative">
                                <Avatar className="size-24 border-4 border-background shadow-md">
                                    <AvatarImage
                                        alt="Patient profile"
                                        src="/avatar.png"
                                    />

                                    <AvatarFallback className="bg-primary/10 text-2xl font-semibold text-primary">
                                        SR
                                    </AvatarFallback>
                                </Avatar>

                                <Button
                                    className="absolute right-0 bottom-0 size-8 rounded-full"
                                    size="icon"
                                    type="button"
                                >
                                    <Camera className="size-4" />
                                    <span className="sr-only">
                                        Change profile photo
                                    </span>
                                </Button>
                            </div>

                            <div className="text-center sm:text-left">
                                <div className="flex flex-col items-center gap-2 sm:flex-row">
                                    <h2 className="text-xl font-semibold">
                                        Sayed Anower Hossain
                                    </h2>

                                    <Badge variant="secondary">Patient</Badge>
                                </div>

                                <p className="mt-1 text-sm text-muted-foreground">
                                    Manage your SR HealthCare patient account
                                </p>

                                <div className="mt-3 flex flex-wrap justify-center gap-3 sm:justify-start">
                                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Mail className="size-3.5" />
                                        patient@example.com
                                    </span>

                                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Phone className="size-3.5" />
                                        +880 1XXX-XXXXXX
                                    </span>
                                </div>
                            </div>
                        </div>

                        <Button variant="outline">
                            <Edit className="mr-2 size-4" />
                            Edit Profile
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Personal Information */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User className="size-5 text-primary" />
                        Personal Information
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Your basic personal information
                    </p>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>

                            <Input
                                defaultValue="Sayed Anower Hossain"
                                id="name"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>

                            <Input
                                defaultValue="patient@example.com"
                                disabled
                                id="email"
                                type="email"
                            />

                            <p className="text-xs text-muted-foreground">
                                Email address cannot be changed here.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Contact Number</Label>

                            <Input
                                defaultValue="+880 1XXX-XXXXXX"
                                id="phone"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="dateOfBirth">Date of Birth</Label>

                            <div className="relative">
                                <CalendarDays className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    className="pl-9"
                                    defaultValue="01/01/1995"
                                    id="dateOfBirth"
                                    type="text"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="gender">Gender</Label>

                            <Input defaultValue="Male" id="gender" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="bloodGroup">Blood Group</Label>

                            <Input defaultValue="O+" id="bloodGroup" />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Contact & Address */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MapPin className="size-5 text-primary" />
                        Contact & Address
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Your contact and residential information
                    </p>
                </CardHeader>

                <CardContent>
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>

                            <Input
                                defaultValue="Dhaka, Bangladesh"
                                id="address"
                                placeholder="Enter your address"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="city">City</Label>

                            <Input
                                defaultValue="Dhaka"
                                id="city"
                                placeholder="Enter your city"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>

                            <Input
                                defaultValue="Bangladesh"
                                id="country"
                                placeholder="Enter your country"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="emergencyContact">
                                Emergency Contact
                            </Label>

                            <Input
                                defaultValue="+880 1XXX-XXXXXX"
                                id="emergencyContact"
                                placeholder="Emergency contact number"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Account Status */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ShieldCheck className="size-5 text-primary" />
                        Account Information
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium">
                                    Account Status
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    Your SR HealthCare account is currently
                                    active.
                                </p>
                            </div>

                            <Badge className="gap-1">
                                <CheckCircle2 className="size-3.5" />
                                Active
                            </Badge>
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium">
                                    Account Type
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    Your current account role
                                </p>
                            </div>

                            <Badge variant="outline">Patient</Badge>
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm font-medium">
                                    Member Since
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    Your account registration date
                                </p>
                            </div>

                            <span className="text-sm font-medium">
                                September 2026
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Save Actions */}
            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <Button variant="outline">Cancel</Button>

                <Button>
                    <CheckCircle2 className="mr-2 size-4" />
                    Save Changes
                </Button>
            </div>
        </div>
    );
};

export default ProfilePage;
