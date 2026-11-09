'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from '@/components/ui/sidebar';

import { SidebarItems, UserRole } from '@/interface';
import { adminRoutes, doctorRoutes, patientRoutes } from '@/routes';

import Logo from '../logo/logo';

const sidebarRoutes: Partial<Record<UserRole, SidebarItems>> = {
    SUPER_ADMIN: adminRoutes,
    ADMIN: adminRoutes,
    DOCTOR: doctorRoutes,
    PATIENT: patientRoutes,
};

export function DashboardSidebar({ role }: { role: UserRole }) {
    const pathname = usePathname();

    const routes = sidebarRoutes[role] ?? [];

    return (
        <Sidebar>
            <SidebarHeader>
                <Logo />
            </SidebarHeader>

            <SidebarContent>
                {routes.map((group) => (
                    <SidebarGroup key={group.title}>
                        <SidebarGroupLabel>{group.title}</SidebarGroupLabel>

                        <SidebarGroupContent>
                            <SidebarMenu>
                                {group.items.map((item) => {
                                    const isActive =
                                        pathname === item.url ||
                                        (item.url !== '/admin' &&
                                            pathname.startsWith(
                                                `${item.url}/`,
                                            ));

                                    return (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton
                                                render={
                                                    <Link href={item.url} />
                                                }
                                                isActive={isActive}
                                            >
                                                {item.title}
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>

            <SidebarRail />
        </Sidebar>
    );
}
