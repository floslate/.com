import { contentfulClient } from "@prophecy/contentful";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { EntrySkeletonType } from "contentful";
import { Document } from "@contentful/rich-text-types";
import {
    Item,
    ItemGroup,
    ItemContent,
    ItemTitle,
    ItemDescription,
} from "@/components/ui/item";

interface BlogPostFields extends EntrySkeletonType {
    contentTypeId: "blogPost";
    fields: {
        title: string;
        slug: string;
        blogContent: Document;
    };
}

async function getBlogObjects() {
    try {
        const entries = await contentfulClient.getEntries<BlogPostFields>({
            content_type: "blogPost",
        });
        return entries.items;
    } catch (error) {
        console.error("Error fetching blog posts:", error);
        return [];
    }
}

export async function BlogList() {
    const blogs = await getBlogObjects();

    return (
        <ScrollArea className="flex-1 h-full">
            <ItemGroup>
                {blogs.map((blog) => (
                    <Link
                        key={blog.sys.id}
                        href={`/blog/${blog.fields.slug}`}
                        className="group block"
                    >
                        <Item className="bg-transparent border-b border-white/10 p-6 hover:bg-white/5 transition-colors cursor-pointer rounded-none">
                            <ItemContent>
                                <ItemTitle className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                                    {blog.fields.title}
                                </ItemTitle>
                                <ItemDescription className="text-zinc-500 mt-2">
                                    {new Date(blog.sys.createdAt).toLocaleDateString()}
                                </ItemDescription>
                            </ItemContent>
                        </Item>
                    </Link>
                ))}

                {blogs.length === 0 && (
                    <div className="p-8 text-center text-zinc-500">
                        No blog posts found.
                    </div>
                )}
            </ItemGroup>
        </ScrollArea>
    );
}
