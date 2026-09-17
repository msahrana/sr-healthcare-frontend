import { Clock3, Mail, MapPin, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInformation = [
    {
        icon: MapPin,
        title: 'Our Location',
        description: 'Dhaka, Bangladesh',
    },
    {
        icon: Phone,
        title: 'Phone Number',
        description: '+880 1XXX-XXXXXX',
    },
    {
        icon: Mail,
        title: 'Email Address',
        description: 'support@srhealthcare.com',
    },
    {
        icon: Clock3,
        title: 'Working Hours',
        description: 'Sat - Thu: 9:00 AM - 8:00 PM',
    },
];

const ContactUsPage = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-blue-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        We are here to help
                    </span>

                    <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                        Contact{' '}
                        <span className="text-blue-600">SR HealthCare</span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                        Have a question, need assistance, or want to learn more
                        about our healthcare services? Our team is ready to help
                        you.
                    </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {contactInformation.map((item) => {
                            const Icon = item.icon;

                            return (
                                <Card
                                    key={item.title}
                                    className="border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                                            <Icon className="h-6 w-6" />
                                        </div>

                                        <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-600">
                                            {item.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form + Message */}
            <section className="bg-slate-50 py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center">
                            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Get in touch
                            </span>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                                We would love to hear from you
                            </h2>

                            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                                Whether you have a question about an
                                appointment, our doctors, healthcare services,
                                or your account, feel free to reach out. Our
                                support team will get back to you as soon as
                                possible.
                            </p>

                            <div className="mt-8 rounded-2xl bg-blue-600 p-6 text-white md:p-8">
                                <h3 className="text-xl font-semibold">
                                    Need immediate assistance?
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-blue-100">
                                    Our support team is available during working
                                    hours to assist you with your healthcare
                                    needs.
                                </p>

                                <div className="mt-6 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                                        <Phone className="h-5 w-5" />
                                    </div>

                                    <div>
                                        <p className="text-xs text-blue-100">
                                            Call us
                                        </p>
                                        <p className="font-semibold">
                                            +880 1XXX-XXXXXX
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <Card className="border-slate-200 shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    Send us a message
                                </CardTitle>

                                <p className="text-sm text-slate-500">
                                    Fill out the form below and we will get back
                                    to you shortly.
                                </p>
                            </CardHeader>

                            <CardContent>
                                <form className="space-y-5">
                                    <div className="grid gap-5 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <label
                                                htmlFor="name"
                                                className="text-sm font-medium text-slate-700"
                                            >
                                                Full Name
                                            </label>

                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Enter your name"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label
                                                htmlFor="email"
                                                className="text-sm font-medium text-slate-700"
                                            >
                                                Email Address
                                            </label>

                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="phone"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Phone Number
                                        </label>

                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+880 1XXX-XXXXXX"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="subject"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Subject
                                        </label>

                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label
                                            htmlFor="message"
                                            className="text-sm font-medium text-slate-700"
                                        >
                                            Message
                                        </label>

                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Write your message here..."
                                            className="min-h-32 resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-600 hover:bg-blue-700"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Map / Location Section */}
            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 text-center">
                        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                            Find us
                        </span>

                        <h2 className="mt-2 text-3xl font-bold text-slate-900">
                            Visit Our Healthcare Center
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                            We are committed to making quality healthcare
                            accessible and convenient for everyone.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-sm">
                        <div className="flex h-80 flex-col items-center justify-center p-6 text-center md:h-96">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                <MapPin className="h-8 w-8" />
                            </div>

                            <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                SR HealthCare
                            </h3>

                            <p className="mt-2 text-sm text-slate-600">
                                Dhaka, Bangladesh
                            </p>

                            <Button
                                variant="outline"
                                className="mt-5 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                            >
                                Get Directions
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ContactUsPage;
