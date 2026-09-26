const DetailSkeleton = () => {
  return (
    <div className="my-12 min-h-screen bg-[#0b0c0e] text-white py-10 px-4 sm:px-8 lg:px-16 container mx-auto">
      {/* Back Button Skeleton */}
      <div className="skeleton h-8 w-24 rounded-lg bg-zinc-800/60 mb-8"></div>

      {/* Main Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Left Side: Large Image Skeleton */}
        <div className="bg-[#12141a] border border-zinc-800/80 rounded-3xl p-4 sm:p-6 shadow-xl">
          <div className="skeleton h-80 sm:h-[420px] w-full rounded-2xl bg-zinc-800/60"></div>
        </div>

        {/* Right Side: Information Skeleton */}
        <div className="flex flex-col gap-6">
          {/* Badge & Category Skeleton */}
          <div className="flex gap-3">
            <div className="skeleton h-6 w-24 rounded-full bg-zinc-800/60"></div>
            <div className="skeleton h-6 w-28 rounded-full bg-zinc-800/60"></div>
          </div>

          {/* Title Skeleton */}
          <div className="skeleton h-10 w-3/4 rounded-xl bg-zinc-800/60"></div>

          {/* Stats Bar Skeleton (Duration, Calories, Rating) */}
          <div className="grid grid-cols-3 gap-4 bg-[#12141a] p-4 rounded-2xl border border-zinc-800/80">
            <div className="flex flex-col gap-2 items-center">
              <div className="skeleton h-4 w-12 bg-zinc-800/60"></div>
              <div className="skeleton h-6 w-16 bg-zinc-800/60"></div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="skeleton h-4 w-12 bg-zinc-800/60"></div>
              <div className="skeleton h-6 w-16 bg-zinc-800/60"></div>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <div className="skeleton h-4 w-12 bg-zinc-800/60"></div>
              <div className="skeleton h-6 w-16 bg-zinc-800/60"></div>
            </div>
          </div>

          {/* Description Paragraph Skeleton */}
          <div className="flex flex-col gap-2.5 mt-2">
            <div className="skeleton h-4 w-full bg-zinc-800/60"></div>
            <div className="skeleton h-4 w-full bg-zinc-800/60"></div>
            <div className="skeleton h-4 w-4/5 bg-zinc-800/60"></div>
            <div className="skeleton h-4 w-2/3 bg-zinc-800/60"></div>
          </div>

          {/* Instructions / Steps List Skeleton */}
          <div className="flex flex-col gap-3 mt-2">
            <div className="skeleton h-5 w-36 rounded-lg bg-zinc-800/60"></div>
            <div className="skeleton h-4 w-full bg-zinc-800/60"></div>
            <div className="skeleton h-4 w-11/12 bg-zinc-800/60"></div>
            <div className="skeleton h-4 w-4/5 bg-zinc-800/60"></div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="skeleton h-12 w-full sm:w-1/2 rounded-2xl bg-zinc-800/60"></div>
            <div className="skeleton h-12 w-full sm:w-1/2 rounded-2xl bg-zinc-800/60"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSkeleton;