"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { PowerIcon } from "@phosphor-icons/react";

export function Header() {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shrink-0">
            <div className="container flex h-14 items-center justify-between px-4">
                <div className="mr-4 flex items-center">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="font-bold flex gap-1 text-foreground text-base">
                                    <PowerIcon weight="bold" className="h-5 w-5 mt-[2px]" /> floslate
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            {segments.map((segment, index) => {
                                const href = `/${segments.slice(0, index + 1).join("/")}`;
                                const isLast = index === segments.length - 1;
                                const title = segment.charAt(0).toUpperCase() + segment.slice(1);

                                return (
                                    <React.Fragment key={href}>
                                        <BreadcrumbSeparator />
                                        <BreadcrumbItem>
                                            {isLast ? (
                                                <BreadcrumbPage>{title}</BreadcrumbPage>
                                            ) : (
                                                <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
                                            )}
                                        </BreadcrumbItem>
                                    </React.Fragment>
                                );
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="flex items-center space-x-2">
                    <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
                        BLOG
                    </Link>
                    <Link href="/applications" className={cn(buttonVariants({ variant: "ghost" }))}>
                        APPLICATIONS
                    </Link>
                    <Link href="/contact" className={cn(buttonVariants({ variant: "ghost" }))}>
                        CONTACT
                    </Link>
                </div>
            </div>
        </header>
    );
}
