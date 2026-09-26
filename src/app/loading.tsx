const ExerciseSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <div 
          key={index} 
          className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-5 flex flex-col gap-4 shadow-lg"
        >
          {/* Skeleton Image Box */}
          <div className="skeleton h-48 w-full rounded-xl bg-zinc-800/60"></div>
          
          {/* Skeleton Title & Content Lines */}
          <div className="skeleton h-5 w-28 bg-zinc-800/60"></div>
          <div className="skeleton h-4 w-full bg-zinc-800/60"></div>
          <div className="skeleton h-4 w-3/4 bg-zinc-800/60"></div>
          
          {/* Skeleton Action Button */}
          <div className="skeleton h-10 w-full rounded-xl bg-zinc-800/60 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default ExerciseSkeleton;