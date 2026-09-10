import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
    showText?: boolean;
    width?: number;
    height?: number;
    className?: string;
}

export default function Logo({
    showText = true,
    width = 40,
    height = 40,
    className = '',
}: LogoProps) {
    return (
        <Link
            href="/"
            className={`flex items-center gap-2 font-medium ${className}`}
        >
            <Image
                src="/logo.png"
                alt="SR HealthCare Logo"
                width={width}
                height={height}
                priority
            />

            {/* {showText && <span>SR Healthcare</span>} */}

            {showText && (
                <span className="text-xl font-bold text-blue-600">
                    SR HealthCare
                </span>
            )}
        </Link>
    );
}
