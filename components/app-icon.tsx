import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface AppIconProps {
    title: string;
    iconUrl: string;
    href: string;
    className?: string;
}

export function AppIcon({ title, iconUrl, href, className }: AppIconProps) {
    return (
        <Link
            href={href}
            className={cn(
                "flex flex-col items-center justify-center p-0 gap-[8.5px] w-[142px] h-[90.5px] isolate flex-none order-6 grow-0 hover:opacity-80 transition-opacity",
                className
            )}
        >
            <div className="relative w-[68px] h-[68px] flex-none order-0 grow-0 z-0">
                <Image
                    src={iconUrl}
                    alt={title}
                    fill
                    className="object-cover rounded-xl border border-border"
                />
            </div>
            <span
                className="text-[12px] leading-[14px] font-medium text-center text-foreground flex-none order-1 grow-0 z-1"
                style={{
                    fontFamily:
                        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    textShadow: "0px 2px 25px var(--background)", // Adjusted shadow to use background variable if possible, or keep black if strict design
                }}
            >
                {title}
            </span>
        </Link>
    );
}
