import Link from "next/link";
import { buttonVariants } from "@/components/ui/button-variants";
import { BlogList } from "@/components/blog-list";
import { AppGrid } from "@/components/app-grid";

export const revalidate = 60;

export default function Page() {
    return (
        <div className="flex flex-col min-h-[calc(100vh-14rem)] ">


            <div className="flex flex-col flex-1">
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-2xl font-bold mb-4">Applications</h2>
                    <AppGrid />
                </div>
                <div className="p-6 border-b border-white/10">
                    <h2 className="text-2xl font-bold">Latest Posts</h2>
                </div>
                <BlogList />
            </div>
        </div>
    );
}