import Link from 'next/link';

interface LogoProps {
    showText?: boolean;
    className?: string;
}

export default function Logo({ showText = true, className = '' }: LogoProps) {
    return (
        <Link
            href="/"
            className={`inline-flex items-center gap-3 ${className}`}
        >
            {/* Logo Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
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
                    <path strokeLinecap="round" d="M12 8v6M9 11h6" />
                </svg>
            </div>

            {/* Logo Text */}
            {showText && (
                <div>
                    <p className="text-xl font-bold tracking-tight text-slate-900">
                        SR <span className="text-blue-600">HealthCare</span>
                    </p>

                    <p className="text-xs font-medium text-slate-500">
                        Care. Connect. Heal.
                    </p>
                </div>
            )}
        </Link>
    );
}
