import { contentfulClient } from "@prophecy/contentful";
import { EntrySkeletonType, Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import { notFound } from "next/navigation";

interface ApplicationDescriptionFields extends EntrySkeletonType {
    contentTypeId: "applicationDescription";
    fields: {
        titleOfApplication?: string;
        slug: string;
        iconOfApplication?: Asset;
        descriptionOfApplication?: Document;
    };
}

async function getApplication(slug: string) {
    try {
        const entries = await contentfulClient.getEntries<ApplicationDescriptionFields>({
            content_type: "applicationDescription",
            "fields.slug": slug,
            limit: 1,
        });
        return entries.items[0];
    } catch (error) {
        console.error("Error fetching application:", error);
        return null;
    }
}

export const revalidate = 60;

export default async function ApplicationDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const application = await getApplication(slug);
    if (!application) {
        notFound();
    }

    const title = application.fields.titleOfApplication || "Untitled Application";
    const iconUrl =
        (application.fields.iconOfApplication?.fields?.file?.url as string) || "";
    const secureIconUrl = iconUrl.startsWith("//")
        ? `https:${iconUrl}`
        : iconUrl;

    // Ensure description has content before rendering
    const hasDescription = application.fields.descriptionOfApplication &&
        application.fields.descriptionOfApplication.content &&
        application.fields.descriptionOfApplication.content.length > 0;

    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground items-center pt-16 px-4">
            <div className="flex flex-col items-center gap-4 mb-8">
                {secureIconUrl && (
                    <div className="relative w-[68px] h-[68px]">
                        <Image
                            src={secureIconUrl}
                            alt={title}
                            fill
                            className="object-cover rounded-xl border border-border"
                        />
                    </div>
                )}
                <h1 className="text-2xl font-bold">
                    {title}
                </h1>
            </div>

            <div className="prose prose-invert max-w-2xl w-full">
                {hasDescription ? (
                    documentToReactComponents(application.fields.descriptionOfApplication!)
                ) : (
                    <p className="text-muted-foreground text-center">No description available.</p>
                )}
            </div>
        </div>
    );
}
