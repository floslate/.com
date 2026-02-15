import { contentfulClient } from "@prophecy/contentful";
import { AppIcon } from "@/components/app-icon";
import { EntrySkeletonType, Asset } from "contentful";
import { Document } from "@contentful/rich-text-types";

interface ApplicationDescriptionFields extends EntrySkeletonType {
    contentTypeId: "applicationDescription";
    fields: {
        titleOfApplication?: string;
        slug: string;
        iconOfApplication?: Asset;
        descriptionOfApplication?: Document;
    };
}

async function getApplications() {
    try {
        const entries =
            await contentfulClient.getEntries<ApplicationDescriptionFields>({
                content_type: "applicationDescription",
            });
        return entries.items;
    } catch (error) {
        console.error("Error fetching applications:", error);
        return [];
    }
}

export async function AppGrid() {
    const applications = await getApplications();

    if (applications.length === 0) {
        return null;
    }

    return (
        <div className="w-full flex justify-center py-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
                {applications.map((app) => {
                    const iconUrl =
                        (app.fields.iconOfApplication?.fields?.file?.url as string) || "";

                    // Ensure URL starts with https:
                    const secureIconUrl = iconUrl.startsWith("//")
                        ? `https:${iconUrl}`
                        : iconUrl;

                    return (
                        <AppIcon
                            key={app.sys.id}
                            title={app.fields.titleOfApplication}
                            iconUrl={secureIconUrl}
                            href={`/applications/${app.fields.slug}`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
