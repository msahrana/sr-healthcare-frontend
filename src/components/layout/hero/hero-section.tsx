import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-cyan-50">
            {/* Background decoration */}
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

            <div className="relative mx-auto grid min-h-170 max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
                {/* Left Content */}
                <div className="z-10 max-w-2xl">
                    {/* Logo / Brand */}
                    <div className="mb-7 inline-flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
                            <svg
                                aria-hidden="true"
                                className="h-7 w-7 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21s-7-4.35-9.5-9.1C.5 7.7 3.1 4 6.8 4c2.1 0 4.1 1.2 5.2 3 1.1-1.8 3.1-3 5.2-3 3.7 0 6.3 3.7 4.3 7.9C19 16.65 12 21 12 21Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    d="M12 8v6M9 11h6"
                                />
                            </svg>
                        </div>

                        <div>
                            <p className="text-xl font-bold tracking-tight text-slate-900">
                                SR{' '}
                                <span className="text-blue-600">
                                    HealthCare
                                </span>
                            </p>

                            <p className="text-xs font-medium text-slate-500">
                                Care. Connect. Heal.
                            </p>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        Trusted Digital Healthcare Platform
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        Better Healthcare,
                        <span className="block text-blue-600">
                            Better Life.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                        Connect with qualified doctors, book appointments, get
                        online consultations, and manage your healthcare journey
                        from one simple and secure platform.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/doctors"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
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
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </svg>
                        </Link>

                        <Link
                            href="/about-us"
                            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Statistics */}
                    <div className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-100 bg-white/70 p-5 shadow-sm backdrop-blur">
                        <div className="px-3 text-center sm:px-5">
                            <p className="text-2xl font-bold text-slate-900">
                                100+
                            </p>
                            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                Doctors
                            </p>
                        </div>

                        <div className="px-3 text-center sm:px-5">
                            <p className="text-2xl font-bold text-slate-900">
                                5K+
                            </p>
                            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                Patients
                            </p>
                        </div>

                        <div className="px-3 text-center sm:px-5">
                            <p className="text-2xl font-bold text-slate-900">
                                24/7
                            </p>
                            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                                Support
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Doctor Image */}
                <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
                    {/* Decorative circles */}
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-18 border-blue-100/70" />
                    <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border-22 border-cyan-100/70" />

                    {/* Main image container */}
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-blue-100 shadow-2xl shadow-blue-900/10">
                        <div className="absolute inset-0 bg-linear-to-t from-blue-950/20 via-transparent to-transparent" />

                        <Image
                            src="/doctor-banner.png"
                            alt="SR HealthCare doctor"
                            width={700}
                            height={800}
                            priority
                            className="h-130 w-full object-cover object-top sm:h-150"
                        />

                        {/* Floating appointment card */}
                        <div className="absolute bottom-6 left-5 right-5 rounded-2xl border border-white/60 bg-white/90 p-4 shadow-xl backdrop-blur-md sm:left-6 sm:right-auto sm:w-72">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100">
                                    <svg
                                        aria-hidden="true"
                                        className="h-5 w-5 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2Z"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        Easy Appointment
                                    </p>

                                    <p className="text-xs text-slate-500">
                                        Book your consultation online
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience badge */}
                    <div className="absolute -right-4 top-24 hidden rounded-2xl border border-white bg-white p-4 shadow-xl sm:block">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5 text-cyan-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 00-8.618 3.04A12.02 12.02 0 003 12c0 5.591 3.824 10.29 9 11.622C17.176 22.29 21 17.591 21 12c0-1.04-.133-2.049-.382-3.016Z"
                                    />
                                </svg>
                            </div>

                            <div>
                                <p className="text-sm font-bold text-slate-900">
                                    Secure & Trusted
                                </p>

                                <p className="text-xs text-slate-500">
                                    Your health matters
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
