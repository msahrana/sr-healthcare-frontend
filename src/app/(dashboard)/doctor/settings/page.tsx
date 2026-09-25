import {
    Bell,
    CalendarDays,
    Check,
    Clock3,
    LockKeyhole,
    Mail,
    Save,
    ShieldCheck,
    Smartphone,
    Video,
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

export default function DoctorSettingsPage() {
    return (
        <div className="space-y-6 p-6">
            {/* Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">
                        Settings
                    </h1>
                    <p className="text-muted-foreground">
                        Manage your doctor account, consultation preferences,
                        notifications, and security.
                    </p>
                </div>

                <Button>
                    <Save className="mr-2 size-4" />
                    Save Changes
                </Button>
            </div>

            {/* Account Settings */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                            <ShieldCheck className="size-5 text-primary" />
                        </div>

                        <div>
                            <CardTitle>Account Settings</CardTitle>
                            <CardDescription>
                                Manage your basic account information.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                                id="name"
                                defaultValue="Dr. Sadiatut Taiyeba Siyana"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>

                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="email"
                                    type="email"
                                    defaultValue="doctor@example.com"
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>

                            <div className="relative">
                                <Smartphone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="phone"
                                    defaultValue="+880 1712-345678"
                                    className="pl-9"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label>Account Status</Label>

                            <div className="flex h-10 items-center">
                                <Badge
                                    variant="secondary"
                                    className="gap-1.5 px-3 py-1"
                                >
                                    <span className="size-2 rounded-full bg-green-500" />
                                    ACTIVE
                                </Badge>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Consultation Preferences */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                            <Video className="size-5 text-primary" />
                        </div>

                        <div>
                            <CardTitle>Consultation Preferences</CardTitle>
                            <CardDescription>
                                Configure how you provide online consultations.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="fee">Consultation Fee</Label>

                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                                    ৳
                                </span>

                                <Input
                                    id="fee"
                                    type="number"
                                    defaultValue="800"
                                    className="pl-8"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="duration">
                                Consultation Duration
                            </Label>

                            <div className="relative">
                                <Clock3 className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

                                <Input
                                    id="duration"
                                    defaultValue="30 Minutes"
                                    className="pl-9"
                                />
                            </div>
                        </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-start gap-3">
                                <Video className="mt-0.5 size-5 text-muted-foreground" />

                                <div>
                                    <p className="font-medium">
                                        Video Consultation
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Allow patients to book video
                                        consultations.
                                    </p>
                                </div>
                            </div>

                            <Switch defaultChecked />
                        </div>

                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-start gap-3">
                                <CalendarDays className="mt-0.5 size-5 text-muted-foreground" />

                                <div>
                                    <p className="font-medium">
                                        Appointment Requests
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Allow patients to request appointments
                                        from your available schedule.
                                    </p>
                                </div>
                            </div>

                            <Switch defaultChecked />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Availability */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                            <Clock3 className="size-5 text-primary" />
                        </div>

                        <div>
                            <CardTitle>Availability</CardTitle>
                            <CardDescription>
                                Configure your general consultation
                                availability.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="rounded-lg border p-4">
                            <p className="text-sm text-muted-foreground">
                                Working Days
                            </p>

                            <p className="mt-1 font-medium">
                                Saturday – Thursday
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <p className="text-sm text-muted-foreground">
                                Start Time
                            </p>

                            <p className="mt-1 font-medium">09:00 AM</p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <p className="text-sm text-muted-foreground">
                                End Time
                            </p>

                            <p className="mt-1 font-medium">05:00 PM</p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button variant="outline">
                            <CalendarDays className="mr-2 size-4" />
                            Manage Schedule
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                            <Bell className="size-5 text-primary" />
                        </div>

                        <div>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>
                                Choose how you want to receive notifications.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="font-medium">
                                Appointment Notifications
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Get notified about new and updated appointments.
                            </p>
                        </div>

                        <Switch defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="font-medium">Patient Messages</p>
                            <p className="text-sm text-muted-foreground">
                                Receive notifications when patients send
                                messages.
                            </p>
                        </div>

                        <Switch defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="font-medium">Email Notifications</p>
                            <p className="text-sm text-muted-foreground">
                                Receive important account updates by email.
                            </p>
                        </div>

                        <Switch defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-4">
                        <div>
                            <p className="font-medium">
                                Consultation Reminders
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Receive reminders before upcoming consultations.
                            </p>
                        </div>

                        <Switch defaultChecked />
                    </div>
                </CardContent>
            </Card>

            {/* Security */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                            <LockKeyhole className="size-5 text-primary" />
                        </div>

                        <div>
                            <CardTitle>Security</CardTitle>
                            <CardDescription>
                                Manage your password and account security.
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="grid gap-5 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="current-password">
                                Current Password
                            </Label>

                            <Input
                                id="current-password"
                                type="password"
                                placeholder="Enter current password"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>

                            <Input
                                id="new-password"
                                type="password"
                                placeholder="Enter new password"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="confirm-password">
                                Confirm New Password
                            </Label>

                            <Input
                                id="confirm-password"
                                type="password"
                                placeholder="Confirm new password"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 rounded-lg border bg-muted/30 p-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="mt-0.5 size-5 text-primary" />

                            <div>
                                <p className="font-medium">
                                    Two-Factor Authentication
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    Add an extra layer of security to your
                                    doctor account.
                                </p>
                            </div>
                        </div>

                        <Button variant="outline">Enable 2FA</Button>
                    </div>

                    <div className="flex justify-end">
                        <Button>
                            <Check className="mr-2 size-4" />
                            Update Password
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Bottom Save */}
            <div className="flex justify-end">
                <Button size="lg">
                    <Save className="mr-2 size-4" />
                    Save Changes
                </Button>
            </div>
        </div>
    );
}
