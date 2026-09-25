import {
    Bell,
    ChevronRight,
    Globe,
    KeyRound,
    Lock,
    Mail,
    Moon,
    ShieldCheck,
    Smartphone,
    UserRound,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const SettingsPage = () => {
    return (
        <div className="flex flex-1 flex-col gap-6 p-4 md:p-6">
            {/* Header */}
            <div>
                <p className="text-sm font-medium text-primary">Account</p>

                <h1 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                    Settings
                </h1>

                <p className="mt-1 text-sm text-muted-foreground">
                    Manage your account preferences, notifications, and security
                    settings.
                </p>
            </div>

            {/* Account Settings */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <UserRound className="size-5 text-primary" />
                        Account Settings
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Manage your basic account preferences.
                    </p>
                </CardHeader>

                <CardContent className="space-y-1">
                    <div className="flex items-center justify-between gap-4 rounded-lg p-4 transition-colors hover:bg-muted/50">
                        <div className="flex items-center gap-4">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Mail className="size-4" />
                            </div>

                            <div>
                                <p className="text-sm font-medium">
                                    Email Address
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    patient@example.com
                                </p>
                            </div>
                        </div>

                        <Badge variant="secondary">Verified</Badge>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-4 rounded-lg p-4 transition-colors hover:bg-muted/50">
                        <div className="flex items-center gap-4">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Smartphone className="size-4" />
                            </div>

                            <div>
                                <p className="text-sm font-medium">
                                    Phone Number
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    +880 1XXX-XXXXXX
                                </p>
                            </div>
                        </div>

                        <Button size="sm" variant="outline">
                            Change
                        </Button>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-4 rounded-lg p-4 transition-colors hover:bg-muted/50">
                        <div className="flex items-center gap-4">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Globe className="size-4" />
                            </div>

                            <div>
                                <p className="text-sm font-medium">Language</p>

                                <p className="text-xs text-muted-foreground">
                                    Choose your preferred language.
                                </p>
                            </div>
                        </div>

                        <Button size="sm" variant="outline">
                            English
                            <ChevronRight className="ml-1 size-4" />
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bell className="size-5 text-primary" />
                        Notifications
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Choose how you want to receive healthcare updates.
                    </p>
                </CardHeader>

                <CardContent className="space-y-1">
                    <div className="flex items-center justify-between gap-4 rounded-lg p-4">
                        <div>
                            <p className="text-sm font-medium">
                                Appointment Reminders
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Receive reminders about upcoming appointments.
                            </p>
                        </div>

                        <Switch defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-4 rounded-lg p-4">
                        <div>
                            <p className="text-sm font-medium">
                                Prescription Updates
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Get notified when a doctor updates your
                                prescription.
                            </p>
                        </div>

                        <Switch defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-4 rounded-lg p-4">
                        <div>
                            <p className="text-sm font-medium">
                                Email Notifications
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Receive important healthcare updates by email.
                            </p>
                        </div>

                        <Switch defaultChecked />
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-4 rounded-lg p-4">
                        <div>
                            <p className="text-sm font-medium">
                                SMS Notifications
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Receive appointment and healthcare alerts by
                                SMS.
                            </p>
                        </div>

                        <Switch />
                    </div>
                </CardContent>
            </Card>

            {/* Appearance */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Moon className="size-5 text-primary" />
                        Appearance
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Customize how SR HealthCare looks on your device.
                    </p>
                </CardHeader>

                <CardContent>
                    <div className="flex items-center justify-between gap-4 rounded-lg p-4">
                        <div>
                            <p className="text-sm font-medium">Dark Mode</p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Use a darker appearance throughout the
                                dashboard.
                            </p>
                        </div>

                        <Switch />
                    </div>
                </CardContent>
            </Card>

            {/* Security */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ShieldCheck className="size-5 text-primary" />
                        Security
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Protect your account and manage your login security.
                    </p>
                </CardHeader>

                <CardContent className="space-y-1">
                    <div className="flex items-center justify-between gap-4 rounded-lg p-4 transition-colors hover:bg-muted/50">
                        <div className="flex items-center gap-4">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <KeyRound className="size-4" />
                            </div>

                            <div>
                                <p className="text-sm font-medium">
                                    Change Password
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    Update your account password.
                                </p>
                            </div>
                        </div>

                        <Button size="sm" variant="outline">
                            Change
                        </Button>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-4 rounded-lg p-4">
                        <div className="flex items-center gap-4">
                            <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Lock className="size-4" />
                            </div>

                            <div>
                                <p className="text-sm font-medium">
                                    Two-Factor Authentication
                                </p>

                                <p className="text-xs text-muted-foreground">
                                    Add an extra layer of security to your
                                    account.
                                </p>
                            </div>
                        </div>

                        <Badge variant="outline">Not Enabled</Badge>
                    </div>
                </CardContent>
            </Card>

            {/* Privacy */}
            <Card>
                <CardHeader>
                    <CardTitle>Privacy & Data</CardTitle>

                    <p className="text-sm text-muted-foreground">
                        Manage your personal data and privacy preferences.
                    </p>
                </CardHeader>

                <CardContent className="space-y-1">
                    <div className="flex items-center justify-between gap-4 rounded-lg p-4 transition-colors hover:bg-muted/50">
                        <div>
                            <p className="text-sm font-medium">
                                Download My Data
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Download a copy of your personal healthcare
                                data.
                            </p>
                        </div>

                        <Button size="sm" variant="outline">
                            Download
                        </Button>
                    </div>

                    <Separator />

                    <div className="flex items-center justify-between gap-4 rounded-lg p-4">
                        <div>
                            <p className="text-sm font-medium">
                                Privacy Settings
                            </p>

                            <p className="mt-1 text-xs text-muted-foreground">
                                Review how your information is used within SR
                                HealthCare.
                            </p>
                        </div>

                        <Button size="sm" variant="outline">
                            Manage
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Save */}
            <div className="flex justify-end">
                <Button>Save Preferences</Button>
            </div>
        </div>
    );
};

export default SettingsPage;
