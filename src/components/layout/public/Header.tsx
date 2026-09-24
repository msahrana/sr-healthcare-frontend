'use client';

import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import Logo from '@/components/logo/logo';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';
import { useGetMe, useLogout } from '@/hooks';
import { UserRole } from '@/interface';

export default function Header() {
    const routes = [
        { name: 'Home', url: '/' },
        { name: 'Doctors', url: '/doctors' },
        { name: 'About', url: '/about-us' },
        { name: 'Contact', url: '/contact-us' },
        { name: 'ApplyAsDoctor', url: '/applyAsDoctor' },
    ];

    const dashboardRoute: Record<UserRole, string> = {
        SUPER_ADMIN: '/admin',
        ADMIN: '/admin',
        DOCTOR: '/doctor',
        PATIENT: '/dashboard',
    };

    const { data, isLoading } = useGetMe();
    const { mutate: logout } = useLogout();
    const queryClient = useQueryClient();

    const role: UserRole = !!data?.data && data?.data.role;

    const handleLogout = () => {
        logout(undefined, {
            onSuccess: () => {
                toast.add({
                    title: 'Logout Successful!',
                    description: 'You have been logged out successfully.',
                    type: 'success',
                });
                queryClient.removeQueries({ queryKey: ['user'] });
            },
            onError: () => {
                toast.add({
                    title: 'Logout failed',
                    description: 'Something went wrong. Please try later.',
                    type: 'error',
                });
            },
        });
    };

    return (
        <header className="w-full h-16 border border-b">
            <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <Logo />
                </div>

                <nav className="flex gap-5">
                    {routes.map((route) => (
                        <Link key={route.url} href={route.url}>
                            {route.name}
                        </Link>
                    ))}

                    {role && <Link href={dashboardRoute[role]}>Dashboard</Link>}
                </nav>
                <div>
                    {!isLoading && !data && (
                        <Button
                            render={<Link href="/login">Login</Link>}
                            nativeButton={false}
                        >
                            Login
                        </Button>
                    )}
                    {!isLoading && data && (
                        <Button onClick={handleLogout} variant="destructive">
                            Logout
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
}
