'use client';

import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';

import Logo from '@/components/logo/logo';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/toast';
import { useGetMe, useLogout } from '@/hooks';

const Header = () => {
    const queryClient = useQueryClient();

    const routes = [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about-us' },
        { name: 'Contact Us', url: '/contact-us' },
    ];

    const { data, isLoading } = useGetMe();

    const { mutate: logout, isPending: logoutPending } = useLogout();

    const handleLogout = () => {
        logout(undefined, {
            onSuccess: () => {
                // Clear current user from React Query cache
                queryClient.setQueryData(['user'], null);

                // Remove user query
                queryClient.removeQueries({
                    queryKey: ['user'],
                });

                toast.add({
                    title: 'Logout Successful',
                    description: 'You have been logged out successfully.',
                    type: 'success',
                });
            },

            onError: () => {
                toast.add({
                    title: 'Logout Failed',
                    description:
                        'Something went wrong. Please try again later.',
                    type: 'error',
                });
            },
        });
    };

    console.log('User data:', data);

    return (
        <header className="h-16 w-full border-b">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
                {/* Logo */}
                <div>
                    <Logo />
                </div>

                {/* Navigation */}
                <nav className="flex gap-5">
                    {routes.map((route) => (
                        <Link key={route.url} href={route.url}>
                            {route.name}
                        </Link>
                    ))}
                </nav>

                {/* Authentication */}
                <div>
                    {/* Login */}
                    {!isLoading && !data && (
                        <Button
                            render={<Link href="/login" />}
                            nativeButton={false}
                        >
                            Login
                        </Button>
                    )}

                    {/* Logout */}
                    {!isLoading && data && (
                        <Button
                            onClick={handleLogout}
                            variant="destructive"
                            disabled={logoutPending}
                        >
                            {logoutPending ? 'Logging out...' : 'Logout'}
                        </Button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
