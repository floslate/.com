import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-14rem)] gap-8 p-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight">Welcome to prophecy.vision</h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
                Select a destination to get started.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <Link href="/applications" className={buttonVariants({ variant: "outline", size: "lg" })}>
                    Applications
                </Link>
                <Link href="/blog" className={buttonVariants({ variant: "outline", size: "lg" })}>
                    Blog
                </Link>
                <Link href="/dashboard" className={buttonVariants({ variant: "default", size: "lg" })}>
                    Dashboard
                </Link>
                <Link href="/roadmaps" className={buttonVariants({ variant: "outline", size: "lg" })}>
                    Roadmaps
                </Link>
                <Link href="/stacks" className={buttonVariants({ variant: "outline", size: "lg" })}>
                    Stacks
                </Link>
            </div>
        </div>
    );
}