import Image from 'next/image';
import Link from 'next/link';

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    rating: number;
    reviews: number;
    fee: string;
    available: boolean;
    image: string;
}

const doctors: Doctor[] = [
    {
        id: 1,
        name: 'Dr. Sadiatut Taiyeba Siyana',
        specialty: 'General Medicine',
        experience: '8+ Years Experience',
        rating: 4.9,
        reviews: 124,
        fee: '৳800',
        available: true,
        image: '/doctors/doctor-1.jpg',
    },
    {
        id: 2,
        name: 'Dr. Arif Hossain',
        specialty: 'Cardiology',
        experience: '12+ Years Experience',
        rating: 4.8,
        reviews: 98,
        fee: '৳1,200',
        available: true,
        image: '/doctors/doctor-2.jpg',
    },
    {
        id: 3,
        name: 'Dr. Nusrat Jahan',
        specialty: 'Dermatology',
        experience: '7+ Years Experience',
        rating: 4.9,
        reviews: 86,
        fee: '৳900',
        available: false,
        image: '/doctors/doctor-3.jpg',
    },
    {
        id: 4,
        name: 'Dr. Mahmud Hasan',
        specialty: 'Neurology',
        experience: '10+ Years Experience',
        rating: 4.8,
        reviews: 112,
        fee: '৳1,000',
        available: true,
        image: '/doctors/doctor-4.jpg',
    },
];

export default function FeaturedDoctors() {
    return (
        <section className="relative overflow-hidden bg-white py-20 sm:py-24">
            {/* Decorative background */}
            <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
            <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                            Our Doctors
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                            Meet Our{' '}
                            <span className="text-blue-600">
                                Featured Doctors
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                            Get professional healthcare from experienced doctors
                            who are dedicated to providing personalized care for
                            every patient.
                        </p>
                    </div>

                    <Link
                        href="/doctors"
                        className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
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

                {/* Doctor Cards */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {doctors.map((doctor) => (
                        <article
                            key={doctor.id}
                            className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
                        >
                            {/* Doctor Image */}
                            <div className="relative h-72 overflow-hidden bg-slate-100">
                                <Image
                                    src={doctor.image}
                                    alt={doctor.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                                />

                                {/* Availability */}
                                <div className="absolute left-4 top-4">
                                    {doctor.available ? (
                                        <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur">
                                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                                            Available
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-500 shadow-sm backdrop-blur">
                                            <span className="h-2 w-2 rounded-full bg-slate-400" />
                                            Offline
                                        </span>
                                    )}
                                </div>

                                {/* Favorite */}
                                <button
                                    type="button"
                                    aria-label={`Add ${doctor.name} to favorites`}
                                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-400 shadow-sm backdrop-blur transition hover:text-red-500"
                                >
                                    <svg
                                        aria-hidden="true"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Doctor Information */}
                            <div className="p-5">
                                <div className="flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="font-bold text-slate-900">
                                            {doctor.name}
                                        </h3>

                                        <p className="mt-1 text-sm font-medium text-blue-600">
                                            {doctor.specialty}
                                        </p>
                                    </div>

                                    {/* Verified */}
                                    <div
                                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600"
                                        title="Verified Doctor"
                                    >
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
                                                d="m5 12 4 4L19 6"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <p className="mt-3 text-xs text-slate-500">
                                    {doctor.experience}
                                </p>

                                {/* Rating */}
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <svg
                                            aria-hidden="true"
                                            className="h-4 w-4 fill-current text-amber-400"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                                        </svg>

                                        <span className="text-sm font-bold text-slate-900">
                                            {doctor.rating}
                                        </span>

                                        <span className="text-xs text-slate-400">
                                            ({doctor.reviews})
                                        </span>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-xs text-slate-400">
                                            Consultation
                                        </p>

                                        <p className="text-sm font-bold text-slate-900">
                                            {doctor.fee}
                                        </p>
                                    </div>
                                </div>

                                {/* Button */}
                                <Link
                                    // href={`/doctors/${doctor.id}`}
                                    href={'#'}
                                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-600 px-4 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                                >
                                    View Profile
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
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 text-center">
                    <p className="text-sm text-slate-500">
                        Can't find the right specialist?
                    </p>

                    <Link
                        href="/doctors"
                        className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                        Explore all doctors
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
