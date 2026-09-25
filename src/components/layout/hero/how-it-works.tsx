import Link from 'next/link';
import type { ReactNode } from 'react';

interface Step {
    number: string;
    title: string;
    description: string;
    href: string;
    icon: ReactNode;
}

const steps: Step[] = [
    {
        number: '01',
        title: 'Find a Doctor',
        description:
            'Search for qualified doctors by specialty and find the right healthcare professional for your needs.',
        href: '/doctors',
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
            >
                <circle cx="11" cy="11" r="6" />
                <path strokeLinecap="round" d="m16 16 4.5 4.5" />
                <path strokeLinecap="round" d="M11 8v6m-3-3h6" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Book Appointment',
        description:
            'Choose an available schedule and book an appointment at a time that works best for you.',
        href: '/dashboard/my-appointments',
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
            >
                <rect width="17" height="17" x="3.5" y="3.5" rx="2.5" />
                <path strokeLinecap="round" d="M8 2.5v4m8-4v4M3.5 9h17" />
                <path
                    strokeLinecap="round"
                    d="M8 13h2m2 0h2m2 0h1M8 17h2m2 0h2"
                />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Dashboard',
        description:
            'Complete your appointment payment through a secure and convenient online payment process.',
        href: '/dashboard',
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
            >
                <rect width="18" height="14" x="3" y="5" rx="2" />
                <path strokeLinecap="round" d="M3 10h18" />
                <path strokeLinecap="round" d="M7 15h3" />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Online Contact',
        description:
            'Meet your doctor online, discuss your health concerns, and receive professional medical guidance.',
        href: '/contact-us',
        icon: (
            <svg
                aria-hidden="true"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.7}
            >
                <rect width="17" height="12" x="3.5" y="4" rx="2" />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10 8 5 2-5 2V8Z"
                />
                <path strokeLinecap="round" d="M8 20h8" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
            {/* Background decoration */}
            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-400">
                        <span className="h-2 w-2 rounded-full bg-blue-400" />
                        Simple Healthcare Journey
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Healthcare in{' '}
                        <span className="text-blue-400">Four Simple Steps</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
                        From finding the right doctor to completing your online
                        consultation, SR HealthCare makes your healthcare
                        journey simple and convenient.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative mt-16">
                    {/* Connecting line */}
                    <div className="absolute left-[12.5%] right-[12.5%] top-12 hidden h-px bg-linear-to-r from-blue-500/10 via-blue-500/50 to-blue-500/10 lg:block" />

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <Link
                                key={step.number}
                                href={step.href}
                                className="group relative"
                            >
                                {/* Step icon */}
                                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-slate-700 bg-slate-900 shadow-xl transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-600 group-hover:shadow-blue-900/30">
                                    <div className="text-blue-400 transition-colors duration-300 group-hover:text-white">
                                        {step.icon}
                                    </div>

                                    {/* Number badge */}
                                    <span className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-500 text-xs font-bold text-white">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-7 text-center">
                                    <h3 className="text-lg font-bold text-white transition-colors group-hover:text-blue-400">
                                        {step.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-400">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div className="mt-5 flex justify-center">
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-500 transition-all duration-300 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white">
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
                                                d="m9 18 6-6-6-6"
                                            />
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-7 sm:p-10">
                    <div className="flex flex-col items-center justify-between gap-7 lg:flex-row">
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center gap-3 lg:justify-start">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                                    <svg
                                        aria-hidden="true"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 21s-7-4.35-9.5-9.1C.5 7.7 3.1 4 6.8 4c2.1 0 4.1 1.2 5.2 3 1.1-1.8 3.1-3 5.2-3 3.7 0 6.3 3.7 4.3 7.9C19 16.65 12 21 12 21Z"
                                        />
                                    </svg>
                                </div>

                                <p className="text-lg font-bold text-white">
                                    Ready to take care of your health?
                                </p>
                            </div>

                            <p className="mt-3 text-sm text-slate-400">
                                Find a doctor and book your appointment today.
                            </p>
                        </div>

                        <Link
                            href="/doctors"
                            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-500"
                        >
                            Find a Doctor
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
                </div>
            </div>
        </section>
    );
}
