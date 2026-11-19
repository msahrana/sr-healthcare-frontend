import Image from 'next/image';
import Link from 'next/link';
import {
    ArrowRight,
    ArrowUpRight,
    CalendarDays,
    Clock3,
    BookOpen,
} from 'lucide-react';

const articles = [
    {
        id: 1,
        title: '10 Simple Habits for a Healthier Lifestyle',
        description:
            'Discover simple daily habits that can improve your physical health, mental well-being, and overall quality of life.',
        category: 'Healthy Lifestyle',
        author: 'Dr. Sarah Ahmed',
        date: 'November 15, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900',
        slug: 'healthy-lifestyle-habits',
        featured: true,
    },
    {
        id: 2,
        title: 'Why Regular Health Checkups Matter',
        description:
            'Learn why preventive healthcare and regular medical checkups are essential for detecting potential health problems early.',
        category: 'Preventive Care',
        author: 'Dr. James Wilson',
        date: 'November 12, 2026',
        readTime: '4 min read',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900',
        slug: 'importance-of-health-checkups',
        featured: false,
    },
    {
        id: 3,
        title: 'The Importance of Mental Health',
        description:
            'Understand the importance of mental wellness and explore practical ways to maintain a healthy and balanced mind.',
        category: 'Mental Health',
        author: 'Dr. Emily Carter',
        date: 'November 10, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900',
        slug: 'importance-of-mental-health',
        featured: false,
    },
];

const HealthArticles = () => {
    const featuredArticle = articles.find((article) => article.featured);
    const otherArticles = articles.filter((article) => !article.featured);

    return (
        <section className="relative overflow-hidden bg-[#155DFC]/2.5 py-20 md:py-28">
            {/* Background Decorations */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#155DFC]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                {/* Section Heading */}
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#155DFC]/20 bg-[#155DFC]/5 px-4 py-2 text-sm font-semibold text-[#155DFC]">
                            <BookOpen size={17} />
                            HEALTH & WELLNESS
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Knowledge for a{' '}
                            <span className="text-[#155DFC]">
                                Healthier Life
                            </span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                            Explore expert health advice, wellness tips, and
                            informative medical articles to help you make better
                            decisions about your health.
                        </p>
                    </div>

                    <Link
                        href="/articles"
                        className="group inline-flex w-fit items-center gap-2 rounded-xl bg-[#155DFC] px-6 py-3.5 font-semibold text-white shadow-md shadow-[#155DFC]/20 transition-all hover:-translate-y-0.5 hover:bg-[#104ACB] hover:shadow-lg"
                    >
                        View All Articles
                        <ArrowRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </div>

                {/* Articles Layout */}
                <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
                    {/* Featured Article */}
                    {featuredArticle && (
                        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#155DFC]/20 hover:shadow-xl hover:shadow-[#155DFC]/10">
                            <Link
                                href={`/articles/${featuredArticle.slug}`}
                                className="block"
                            >
                                <div className="relative h-64 overflow-hidden bg-[#155DFC]/10 sm:h-80">
                                    <Image
                                        src={featuredArticle.image}
                                        alt={featuredArticle.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    <div className="absolute left-5 top-5 rounded-lg bg-[#155DFC] px-4 py-2 text-xs font-bold text-white shadow-md">
                                        FEATURED ARTICLE
                                    </div>
                                </div>
                            </Link>

                            <div className="p-7 sm:p-8">
                                <span className="inline-block rounded-full bg-[#155DFC]/5 px-3 py-1.5 text-xs font-semibold text-[#155DFC]">
                                    {featuredArticle.category}
                                </span>

                                <Link
                                    href={`/articles/${featuredArticle.slug}`}
                                >
                                    <h3 className="mt-4 text-2xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#155DFC] sm:text-3xl">
                                        {featuredArticle.title}
                                    </h3>
                                </Link>

                                <p className="mt-4 text-sm leading-7 text-slate-600">
                                    {featuredArticle.description}
                                </p>

                                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-slate-100 pt-5 text-xs text-slate-500">
                                    <span className="flex items-center gap-1.5">
                                        <CalendarDays size={15} />
                                        {featuredArticle.date}
                                    </span>

                                    <span className="flex items-center gap-1.5">
                                        <Clock3 size={15} />
                                        {featuredArticle.readTime}
                                    </span>
                                </div>

                                <Link
                                    href={`/articles/${featuredArticle.slug}`}
                                    className="mt-7 inline-flex items-center gap-2 font-semibold text-[#155DFC] transition-colors hover:text-[#104ACB]"
                                >
                                    Read Full Article
                                    <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </article>
                    )}

                    {/* Other Articles */}
                    <div className="flex flex-col gap-7">
                        {otherArticles.map((article) => (
                            <article
                                key={article.id}
                                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#155DFC]/20 hover:shadow-xl hover:shadow-[#155DFC]/10 sm:flex-row"
                            >
                                {/* Image */}
                                <Link
                                    href={`/articles/${article.slug}`}
                                    className="relative h-56 shrink-0 overflow-hidden bg-[#155DFC]/10 sm:h-auto sm:w-2/5"
                                >
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, 40vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </Link>

                                {/* Content */}
                                <div className="flex flex-1 flex-col justify-center p-6">
                                    <span className="mb-3 w-fit rounded-full bg-[#155DFC]/5 px-3 py-1.5 text-xs font-semibold text-[#155DFC]">
                                        {article.category}
                                    </span>

                                    <Link href={`/articles/${article.slug}`}>
                                        <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#155DFC]">
                                            {article.title}
                                        </h3>
                                    </Link>

                                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                                        {article.description}
                                    </p>

                                    <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                                        <span className="flex items-center gap-1.5">
                                            <CalendarDays size={14} />
                                            {article.date}
                                        </span>

                                        <span className="flex items-center gap-1.5">
                                            <Clock3 size={14} />
                                            {article.readTime}
                                        </span>
                                    </div>

                                    <Link
                                        href={`/articles/${article.slug}`}
                                        className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#155DFC] transition-colors hover:text-[#104ACB]"
                                    >
                                        Read More
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-[#155DFC]/10 bg-white p-7 shadow-sm sm:flex-row sm:p-9">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                            Invest in Your Health Knowledge
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Stay informed with helpful healthcare tips and
                            expert insights.
                        </p>
                    </div>

                    <Link
                        href="/articles"
                        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#155DFC] px-6 py-3.5 font-semibold text-white shadow-md shadow-[#155DFC]/20 transition-all hover:-translate-y-0.5 hover:bg-[#104ACB] hover:shadow-lg"
                    >
                        Explore Articles
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HealthArticles;
