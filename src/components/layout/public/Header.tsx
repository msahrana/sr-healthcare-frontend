'use client';

import Link from 'next/link';

import { useRouter } from 'next/navigation';

import { useAuth } from '@/providers/auth.provider';

import { useLogout } from '@/hooks';

import { Button } from '@/components/ui/button';

import { toast } from '@/components/ui/toast';

import Logo from '@/components/logo/logo';

const Header = () => {
    const router = useRouter();

    const { user, isLoading } = useAuth();

    const { mutate: logout, isPending: logoutPending } = useLogout();

    const routes = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'About Us',
            url: '/about-us',
        },
        {
            name: 'Contact Us',
            url: '/contact-us',
        },
    ];

    const handleLogout = () => {
        logout(undefined, {
            onSuccess: () => {
                toast.add({
                    title: 'Logout Successful',
                    description: 'You have been logged out successfully.',
                    type: 'success',
                });

                router.push('/login');
            },

            onError: (error) => {
                toast.add({
                    title: 'Logout Failed',
                    description:
                        error.message ||
                        'Something went wrong. Please try again later.',
                    type: 'error',
                });
            },
        });
    };

    return (
        <header className="h-16 w-full border-b">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
                <div>
                    <Logo />
                </div>

                <nav className="flex gap-5">
                    {routes.map((route) => (
                        <Link key={route.url} href={route.url}>
                            {route.name}
                        </Link>
                    ))}
                </nav>

                <div>
                    {!isLoading && !user && (
                        <Button
                            render={<Link href="/login" />}
                            nativeButton={false}
                        >
                            Login
                        </Button>
                    )}

                    {!isLoading && user && (
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
