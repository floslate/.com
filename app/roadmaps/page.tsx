
export default function RoadmapsPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
                <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" >
                <div className="p-4">
                    <h1 className="text-2xl font-bold">Roadmaps</h1>
                    <p className="text-muted-foreground">Future plans and directions.</p>
                </div>
            </div>
        </div>
    )
}
