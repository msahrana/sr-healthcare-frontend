import {
    Activity,
    Award,
    Clock3,
    HeartPulse,
    ShieldCheck,
    Stethoscope,
    Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const values = [
    {
        icon: HeartPulse,
        title: 'Patient-Centered Care',
        description:
            'We put patients first by focusing on their individual needs, comfort, and overall healthcare experience.',
    },
    {
        icon: ShieldCheck,
        title: 'Trust & Safety',
        description:
            'We are committed to maintaining a safe, secure, and trustworthy environment for every patient.',
    },
    {
        icon: Award,
        title: 'Quality Healthcare',
        description:
            'We strive to connect patients with qualified healthcare professionals and reliable medical services.',
    },
    {
        icon: Users,
        title: 'Compassionate Service',
        description:
            'We believe healthcare should be delivered with empathy, respect, and genuine care for every individual.',
    },
];

const highlights = [
    {
        icon: Stethoscope,
        title: 'Qualified Doctors',
        description:
            'Connect with healthcare professionals who are dedicated to providing quality medical care.',
    },
    {
        icon: Clock3,
        title: 'Easy Appointments',
        description:
            'Find suitable doctors and manage your appointments through a simple and convenient platform.',
    },
    {
        icon: Activity,
        title: 'Better Healthcare Experience',
        description:
            'Our platform is designed to make accessing healthcare services easier and more convenient.',
    },
];

const AboutUsPage = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-blue-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                            About SR HealthCare
                        </span>

                        <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                            Healthcare that puts{' '}
                            <span className="text-blue-600">you first</span>
                        </h1>

                        <p className="mt-6 text-base leading-7 text-slate-600 md:text-lg">
                            SR HealthCare is a modern healthcare platform
                            designed to make quality medical care more
                            accessible, convenient, and patient-focused.
                        </p>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        {/* Visual */}
                        <div className="relative">
                            <div className="overflow-hidden rounded-3xl bg-blue-600 p-8 md:p-12">
                                <div className="flex min-h-80 flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm md:min-h-96">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-600">
                                        <HeartPulse className="h-8 w-8" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-medium text-blue-100">
                                            Our commitment
                                        </p>

                                        <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
                                            Better care.
                                            <br />
                                            Better experience.
                                        </h2>

                                        <p className="mt-4 max-w-md text-sm leading-6 text-blue-100">
                                            We are building a healthcare
                                            experience where technology and
                                            compassionate care work together.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white p-5 shadow-xl sm:block md:-right-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                        <ShieldCheck className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">
                                            Trusted Care
                                        </p>
                                        <p className="text-xs text-slate-500">
                                            Patient focused
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Who We Are
                            </span>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                                Making healthcare simpler and more accessible
                            </h2>

                            <p className="mt-6 text-base leading-7 text-slate-600">
                                SR HealthCare is built with a simple goal: to
                                make it easier for people to access healthcare
                                services and connect with healthcare
                                professionals.
                            </p>

                            <p className="mt-4 text-base leading-7 text-slate-600">
                                From discovering doctors to managing
                                appointments, our platform brings essential
                                healthcare services together in one convenient
                                place.
                            </p>

                            <p className="mt-4 text-base leading-7 text-slate-600">
                                We combine modern technology with a
                                patient-first approach to create a healthcare
                                experience that is convenient, transparent, and
                                focused on quality.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button className="bg-blue-600 hover:bg-blue-700">
                                    Find a Doctor
                                </Button>

                                <Button
                                    variant="outline"
                                    className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                            Our Purpose
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                            What drives us
                        </h2>

                        <p className="mt-4 text-slate-600">
                            Everything we do is guided by our commitment to
                            creating a better healthcare experience.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        <Card className="border-slate-200">
                            <CardContent className="p-8 md:p-10">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                    <Activity className="h-7 w-7" />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                    Our Mission
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    Our mission is to make quality healthcare
                                    easier to access by providing a convenient
                                    digital platform that connects patients with
                                    healthcare professionals and services.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-slate-200">
                            <CardContent className="p-8 md:p-10">
                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                    <HeartPulse className="h-7 w-7" />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                    Our Vision
                                </h3>

                                <p className="mt-4 leading-7 text-slate-600">
                                    Our vision is to build a trusted digital
                                    healthcare ecosystem where technology helps
                                    people receive better, simpler, and more
                                    accessible healthcare experiences.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                            Our Values
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                            What we stand for
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                            Our values shape how we build our platform and how
                            we serve our patients and healthcare professionals.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <Card
                                    key={value.title}
                                    className="border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                            {value.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">
                                            {value.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Healthcare Experience */}
            <section className="bg-blue-600 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-100">
                            Why SR HealthCare
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                            Designed around your healthcare journey
                        </h2>

                        <p className="mt-4 leading-7 text-blue-100">
                            We focus on making every step of the healthcare
                            journey easier, from finding the right doctor to
                            managing appointments.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {highlights.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-white/15 bg-white/10 p-7 backdrop-blur-sm"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600">
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <h3 className="mt-5 text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-blue-100">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl border border-blue-100 bg-blue-50 px-6 py-12 text-center md:px-12 md:py-16">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                            <Stethoscope className="h-7 w-7" />
                        </div>

                        <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
                            Your health deserves better care
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
                            Take the next step toward a simpler healthcare
                            experience with SR HealthCare.
                        </p>

                        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                                Get Started
                            </Button>

                            <Button
                                variant="outline"
                                className="border-blue-200 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutUsPage;
