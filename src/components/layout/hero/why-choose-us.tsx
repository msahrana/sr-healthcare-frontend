import Link from 'next/link';

const features = [
    {
        number: '01',
        title: 'Qualified Doctors',
        description:
            'Connect with experienced and qualified doctors across different medical specialties.',
        icon: (
            <svg
                aria-hidden="true"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 7a3 3 0 11-6 0 3 3 0 016 0Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 21a8 8 0 0116 0"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 8v5m-2.5-2.5h5"
                />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Easy Appointments',
        description:
            'Find your preferred doctor and schedule an appointment at a convenient time.',
        icon: (
            <svg
                aria-hidden="true"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 3v3m8-3v3M4 9h16"
                />
                <rect width="16" height="14" x="4" y="5" rx="2" />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 13h2m2 0h2m-6 3h2m2 0h2"
                />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Online Consultation',
        description:
            'Consult with your doctor online and receive healthcare support from anywhere.',
        icon: (
            <svg
                aria-hidden="true"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
            >
                <rect width="16" height="12" x="4" y="5" rx="2" />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m10 9 5 2.5-5 2.5V9Z"
                />
            </svg>
        ),
    },
    {
        number: '04',
        title: 'Secure Healthcare',
        description:
            'Your personal healthcare information is handled through a secure and reliable platform.',
        icon: (
            <svg
                aria-hidden="true"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3 5 6v5c0 4.5 2.9 8.5 7 10 4.1-1.5 7-5.5 7-10V6l-7-3Z"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9 12 2 2 4-4"
                />
            </svg>
        ),
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
            {/* Decorative background */}
            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        Why SR HealthCare
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                        Healthcare Made
                        <span className="text-blue-600">
                            {' '}
                            Simple & Accessible
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                        SR HealthCare brings doctors, appointments, and online
                        consultations together in one convenient digital
                        healthcare platform.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.number}
                            className="group relative rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
                        >
                            {/* Number */}
                            <span className="absolute right-5 top-5 text-sm font-bold text-slate-200 transition-colors group-hover:text-blue-100">
                                {feature.number}
                            </span>

                            {/* Icon */}
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="mt-6 text-lg font-bold text-slate-900">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-500">
                                {feature.description}
                            </p>

                            {/* Bottom line */}
                            <div className="mt-6 h-1 w-8 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-16" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-3xl bg-slate-950 px-7 py-8 sm:flex-row sm:px-10">
                    <div>
                        <p className="text-xl font-bold text-white">
                            Your health deserves better care.
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                            Start your healthcare journey with SR HealthCare.
                        </p>
                    </div>

                    <Link
                        href="/register"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                        Get Started
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
        </section>
    );
}
