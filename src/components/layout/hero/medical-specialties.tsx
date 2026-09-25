import Link from 'next/link';
import type { ReactNode } from 'react';

interface Specialty {
    title: string;
    description: string;
    doctors: string;
    href: string;
    icon: ReactNode;
}

const specialties: Specialty[] = [
    {
        title: 'Cardiology',
        description:
            'Expert care for heart health, cardiovascular conditions, and preventive treatment.',
        doctors: '12+ Doctors',
        href: '/doctors?specialty=cardiology',
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 12h2l1-3 2 6 1-3h2"
                />
            </svg>
        ),
    },
    {
        title: 'Neurology',
        description:
            'Specialized diagnosis and treatment for brain, nerve, and neurological conditions.',
        doctors: '8+ Doctors',
        href: '/doctors?specialty=neurology',
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5a4 4 0 0 0-7.7 1.5A4.5 4.5 0 0 0 5.5 15 4 4 0 0 0 9 19h6a4 4 0 0 0 3.5-4 4.5 4.5 0 0 0 1.2-8.5A4 4 0 0 0 12 5Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m-3-9h3m3 3h-3"
                />
            </svg>
        ),
    },
    {
        title: 'Dermatology',
        description:
            'Professional skin, hair, and nail care with personalized treatment plans.',
        doctors: '10+ Doctors',
        href: '/doctors?specialty=dermatology',
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
            >
                <circle cx="12" cy="12" r="8" />
                <path
                    strokeLinecap="round"
                    d="M9 10h.01M15 10h.01M8.5 14a4.5 4.5 0 0 0 7 0"
                />
            </svg>
        ),
    },
    {
        title: 'Pediatrics',
        description:
            'Compassionate healthcare services focused on children and their healthy development.',
        doctors: '9+ Doctors',
        href: '/doctors?specialty=pediatrics',
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
            >
                <circle cx="12" cy="8" r="3" />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 20a7 7 0 0 1 14 0"
                />
                <path strokeLinecap="round" d="M4 11h2m12 0h2" />
            </svg>
        ),
    },
    {
        title: 'Dental Care',
        description:
            'Complete dental services for healthy teeth, gums, and confident smiles.',
        doctors: '7+ Doctors',
        href: '/doctors?specialty=dental',
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 4c2-1 3 1 5 1s3-2 5-1c3 1.5 3 5 2 8.5-.8 2.8-2 6.5-4 6.5-1.5 0-1.5-3-3-3s-1.5 3-3 3c-2 0-3.2-3.7-4-6.5C4 9 4 5.5 7 4Z"
                />
                <path
                    strokeLinecap="round"
                    d="M9 7c1 .5 2 .5 3 0m3 0c1 .5 2 .5 3 0"
                />
            </svg>
        ),
    },
    {
        title: 'General Medicine',
        description:
            'Everyday medical care, health checkups, diagnosis, and treatment for common conditions.',
        doctors: '15+ Doctors',
        href: '/doctors?specialty=general-medicine',
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s8-4.5 8-10V5l-8-3-8 3v6c0 5.5 8 10 8 10Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7v6m-3-3h6"
                />
            </svg>
        ),
    },
];

export default function MedicalSpecialties() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
            {/* Decorative elements */}
            <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
            <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                            Medical Specialties
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                            Find the Right Care for
                            <span className="text-blue-600"> Your Needs</span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                            Explore our medical specialties and connect with
                            doctors who can provide personalized care for you
                            and your family.
                        </p>
                    </div>

                    <Link
                        href="/doctors"
                        className="inline-flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
                    >
                        View All Doctors
                        <svg
                            aria-hidden="true"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7l5 5m0 0-5 5m5-5H6"
                            />
                        </svg>
                    </Link>
                </div>

                {/* Specialty Grid */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {specialties.map((specialty) => (
                        <Link
                            key={specialty.title}
                            href={specialty.href}
                            className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
                        >
                            {/* Hover decoration */}
                            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150" />

                            {/* Icon */}
                            <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                {specialty.icon}
                            </div>

                            {/* Content */}
                            <div className="relative mt-6">
                                <div className="flex items-center justify-between gap-3">
                                    <h3 className="text-xl font-bold text-slate-900">
                                        {specialty.title}
                                    </h3>

                                    <svg
                                        aria-hidden="true"
                                        className="h-5 w-5 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13 7l5 5m0 0-5 5m5-5H6"
                                        />
                                    </svg>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    {specialty.description}
                                </p>

                                {/* Doctor count */}
                                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                                    <svg
                                        aria-hidden="true"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM4 21a8 8 0 0 1 16 0"
                                        />
                                    </svg>

                                    {specialty.doctors}
                                </div>
                            </div>

                            {/* Bottom accent */}
                            <div className="mt-7 h-1 w-10 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
