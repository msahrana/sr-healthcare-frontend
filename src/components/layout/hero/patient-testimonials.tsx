import Image from 'next/image';
import { Star, Quote, Heart, BadgeCheck } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Patient',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
        rating: 5,
        review: 'SR HealthCare made getting medical advice so convenient. I was able to find an experienced doctor and book my appointment without any hassle. Highly recommended!',
    },
    {
        id: 2,
        name: 'Michael Anderson',
        role: 'Patient',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
        rating: 5,
        review: 'The online consultation experience was excellent. The doctor was professional, friendly, and took time to understand my concerns. The digital prescription feature is amazing.',
    },
    {
        id: 3,
        name: 'Emily Williams',
        role: 'Patient',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
        rating: 5,
        review: 'I love how easy it is to manage appointments through SR HealthCare. Everything is organized, accessible, and patient-friendly. A wonderful healthcare platform!',
    },
];

const PatientTestimonials = () => {
    return (
        <section className="relative overflow-hidden bg-white py-20 md:py-28">
            {/* Background */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#155DFC]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-100/40 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-3xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#155DFC]/20 bg-[#155DFC]/5 px-4 py-2 text-sm font-semibold text-[#155DFC]">
                        <Heart size={17} />
                        PATIENT EXPERIENCES
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Stories That Inspire{' '}
                        <span className="text-[#155DFC]">Trust</span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                        Your trust motivates us to deliver better healthcare.
                        Discover what patients say about their experiences with
                        SR HealthCare.
                    </p>
                </div>

                {/* Rating Summary */}
                <div className="mb-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#155DFC]/10 bg-[#155DFC]/5 p-7 sm:flex-row sm:gap-8">
                    <div className="text-center">
                        <h3 className="text-4xl font-extrabold text-slate-900">
                            4.9/5
                        </h3>

                        <div className="mt-2 flex justify-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={17}
                                    className="fill-amber-400 text-amber-400"
                                />
                            ))}
                        </div>

                        <p className="mt-2 text-xs text-slate-500">
                            Average Rating
                        </p>
                    </div>

                    <div className="hidden h-16 w-px bg-[#155DFC]/20 sm:block" />

                    <div className="text-center sm:text-left">
                        <p className="text-lg font-bold text-slate-900">
                            Patient Satisfaction Matters
                        </p>
                        <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                            We continuously work to make healthcare more
                            accessible, convenient, and patient-focused.
                        </p>
                    </div>

                    <div className="hidden h-16 w-px bg-[#155DFC]/20 sm:block" />

                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                            <BadgeCheck size={25} />
                        </div>
                        <div>
                            <p className="font-bold text-slate-900">
                                Trusted Care
                            </p>
                            <p className="text-xs text-slate-500">
                                Patient-focused experience
                            </p>
                        </div>
                    </div>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#155DFC]/30 hover:shadow-xl hover:shadow-[#155DFC]/10"
                        >
                            {/* Quote Icon */}
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex gap-1">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={17}
                                            className="fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>

                                <Quote
                                    size={32}
                                    className="text-[#155DFC]/10 transition-colors group-hover:text-[#155DFC]/40"
                                />
                            </div>

                            {/* Review */}
                            <p className="min-h-32 text-sm leading-8 text-slate-600">
                                &ldquo;{testimonial.review}&rdquo;
                            </p>

                            <div className="my-6 border-t border-slate-100" />

                            {/* Patient Info */}
                            <div className="flex items-center gap-4">
                                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-[#155DFC]/10">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        sizes="48px"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-bold text-slate-900">
                                        {testimonial.name}
                                    </h3>

                                    <div className="mt-1 flex items-center gap-1.5">
                                        <BadgeCheck
                                            size={14}
                                            className="text-teal-600"
                                        />
                                        <span className="text-xs text-slate-500">
                                            {testimonial.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PatientTestimonials;
