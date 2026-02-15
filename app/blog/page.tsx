import { BlogList } from "@/components/blog-list";

export const revalidate = 60;

export default function BlogPage() {
    return (
        <div className="flex flex-col h-[calc(100vh-theme(spacing.14))] bg-background text-foreground">
            <div className="p-6 border-b border-border shrink-0">
                <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
                <p className="text-muted-foreground mt-2">Latest updates and stories.</p>
            </div>
            <BlogList />
        </div>
    );
}
