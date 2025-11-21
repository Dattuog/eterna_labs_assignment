import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-[1400px] space-y-3 px-4 py-6">
      <Skeleton className="h-14 w-full rounded-2xl" />
      <Skeleton className="h-12 w-1/2 rounded-xl" />
      <Skeleton className="h-12 w-full rounded-2xl" />
      <div className="space-y-2 rounded-2xl border border-border-subtle bg-surface-800/60 p-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Skeleton key={idx} className="h-14 w-full rounded-xl" />
        ))}
      </div>
    </main>
  );
}
