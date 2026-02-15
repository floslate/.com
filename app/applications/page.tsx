import { AppGrid } from "@/components/app-grid";

export const revalidate = 60;

export default function ApplicationsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground">
            <div className="p-6 border-b border-border shrink-0">
                <h1 className="text-3xl font-bold tracking-tight">Applications</h1>
                <p className="text-muted-foreground mt-2">Explore our suite of applications.</p>
            </div>
            <div className="flex-1 p-6">
                <AppGrid />
            </div>
        </div>
    );
}
