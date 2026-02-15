import { contentfulClient } from "@prophecy/contentful";
import { EntrySkeletonType } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { RichText } from "@/components/rich-text";
import { notFound } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BlogPostFields extends EntrySkeletonType {
    contentTypeId: "blogPost";
    fields: {
        title: string;
        slug: string;
        blogContent: Document;
    };
}

async function getBlogPost(slug: string) {
    try {
        const entries = await contentfulClient.getEntries<BlogPostFields>({
            content_type: "blogPost",
            "fields.slug": slug,
            limit: 1,
        });
        return entries.items[0];
    } catch (error) {
        console.error("Error fetching blog post:", error);
        return null;
    }
}

export const revalidate = 60;

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blogPost = await getBlogPost(slug);

    if (!blogPost) {
        console.log("Blog post not found for slug:", slug);
        notFound();
    }

    console.log("Fetched blog post:", JSON.stringify(blogPost.fields.title, null, 2));
    console.log("Blog content node type:", blogPost.fields.blogContent?.nodeType);
    console.log("Blog content content length:", blogPost.fields.blogContent?.content?.length);

    return (
        <div className="flex flex-col h-[calc(100vh-theme(spacing.14))] bg-background text-foreground">
            <div className="p-6 border-b border-border shrink-0">
                <h1 className="text-3xl font-bold tracking-tight mb-2">
                    {blogPost.fields.title}
                </h1>
                <p className="text-muted-foreground">
                    {new Date(blogPost.sys.createdAt).toLocaleDateString()}
                </p>
            </div>

            <ScrollArea className="flex-1">
                <div className="p-6 max-w-3xl mx-auto prose prose-invert">
                    <RichText document={blogPost.fields.blogContent} />
                </div>
            </ScrollArea>
        </div>
    );
}
