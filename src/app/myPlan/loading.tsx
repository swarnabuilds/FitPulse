const MyPlanSkeleton = () => {
  return (
    <main className="my-12 min-h-screen bg-[#0b0c0e] text-white py-10 px-4 sm:px-8 lg:px-16 container mx-auto">
      {/* Header Skeleton */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <div className="skeleton h-9 w-48 rounded-xl bg-zinc-800/60"></div>
          <div className="skeleton h-4 w-72 rounded-lg bg-zinc-800/60"></div>
        </div>
        <div className="skeleton h-8 w-52 rounded-xl bg-zinc-800/60"></div>
      </div>

      {/* Stats Cards Skeleton */}
      <div className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-20 bg-zinc-800/60"></div>
          <div className="skeleton h-10 w-16 bg-zinc-800/60"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-20 bg-zinc-800/60"></div>
          <div className="skeleton h-10 w-16 bg-zinc-800/60"></div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-20 bg-zinc-800/60"></div>
          <div className="skeleton h-10 w-16 bg-zinc-800/60"></div>
        </div>
      </div>

      {/* Tab Controls & Sort Skeleton */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
        <div className="skeleton h-11 w-56 rounded-xl bg-zinc-800/60"></div>
        <div className="skeleton h-8 w-32 rounded-lg bg-zinc-800/60 self-end sm:self-auto"></div>
      </div>

      {/* Plan Items List Skeleton (3 Cards) */}
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="skeleton h-20 w-24 rounded-xl bg-zinc-800/60 shrink-0"></div>
              <div className="flex flex-col gap-2 w-full sm:w-48">
                <div className="skeleton h-5 w-3/4 bg-zinc-800/60"></div>
                <div className="skeleton h-3 w-1/2 bg-zinc-800/60"></div>
                <div className="skeleton h-4 w-full bg-zinc-800/60 mt-1"></div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <div className="skeleton h-9 w-28 rounded-full bg-zinc-800/60"></div>
              <div className="skeleton h-9 w-32 rounded-full bg-zinc-800/60"></div>
              <div className="skeleton h-8 w-8 rounded-full bg-zinc-800/60"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MyPlanSkeleton;