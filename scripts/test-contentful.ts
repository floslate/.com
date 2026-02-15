import { contentfulClient } from "../lib/contentful";

async function testFetch() {
    try {
        console.log("Fetching all blog posts...");
        const entries = await contentfulClient.getEntries({
            content_type: "blogPost",
        });
        console.log("Total entries:", entries.total);
        entries.items.forEach((entry) => {
            console.log(`- Title: ${entry.fields.title}, Slug: ${entry.fields.slug}, ID: ${entry.sys.id}`);
        });

        console.log("\nFetching all applications...");
        const apps = await contentfulClient.getEntries({
            content_type: "applicationDescription",
        });
        console.log("Total applications:", apps.total);
        apps.items.forEach((app) => {
            console.log(`- Title: ${app.fields.titleOfApplication}, Slug: ${app.fields.slug}, ID: ${app.sys.id}`);
        });

    } catch (error) {
        console.error("Error:", error);
    }
}

testFetch();
