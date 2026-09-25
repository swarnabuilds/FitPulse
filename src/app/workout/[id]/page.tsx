import PlanBtn from "@/app/planBtn/PlanBtn";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

interface DetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getPlan = async (id: string) => {
  try {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch plans data: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default async function WorkoutDetailsPage({ params }: DetailsPageProps) {
  const { id } = await params;
  const data = await getPlan(id);

  if (!data) {
    return (
      <div className="min-h-screen bg-[#0c0d10] text-white flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold">Workout details not found!</h2>
        <Link href="/" className="mt-4 text-[#8bf500] hover:underline flex items-center gap-2">
          <FiArrowLeft /> Back to Workouts
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0c0d10] text-white py-10 px-4 sm:px-8 lg:px-16">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors"
        >
          <FiArrowLeft /> Back to Workouts
        </Link>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Side: Image */}
        <div className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-square bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800/80 shadow-2xl">
          <Image
            src={data.image || "/placeholder.png"}
            alt={data.name || "Workout"}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Side: Details */}
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Header Title */}
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
              {data.name || "BARBELL BENCH PRESS"}
            </h1>

            {/* Description */}
            <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
              {data.description ||
                "A compound press that builds chest thickness, triceps, and pressing power from a stable bench."}
            </p>

            {/* Muscle Group Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {data.muscleGroups?.map((muscle: string, idx: number) => (
                <span
                  key={idx}
                  className="bg-[#8bf500] text-black font-black text-[11px] uppercase px-3 py-1 rounded-full tracking-wider"
                >
                  {muscle}
                </span>
              )) || (
                <>
                  <span className="bg-[#8bf500] text-black font-black text-[11px] uppercase px-3 py-1 rounded-full tracking-wider">
                    Chest
                  </span>
                  <span className="bg-[#8bf500] text-black font-black text-[11px] uppercase px-3 py-1 rounded-full tracking-wider">
                    Arms
                  </span>
                </>
              )}
            </div>

            {/* Meta Table Box */}
            <div className="mt-6 bg-[#13151b]/80 border border-zinc-800/70 rounded-2xl p-5 space-y-3.5 text-xs">
              <div className="flex justify-between items-center text-zinc-400 uppercase tracking-wider font-semibold">
                <span>Equipment</span>
                <span className="text-white capitalize">{data.equipment || "Barbell, Bench"}</span>
              </div>
              
              <div className="flex justify-between items-center text-zinc-400 uppercase tracking-wider font-semibold">
                <span>Difficulty</span>
                <span className="text-white capitalize">{data.difficulty || "Intermediate"}</span>
              </div>

              <div className="flex justify-between items-center text-zinc-400 uppercase tracking-wider font-semibold">
                <span>Sets</span>
                <span className="text-white">{data.sets || "4"}</span>
              </div>

              <div className="flex justify-between items-center text-zinc-400 uppercase tracking-wider font-semibold">
                <span>Reps</span>
                <span className="text-white">{data.reps || "6-8"}</span>
              </div>

              <div className="flex justify-between items-center text-zinc-400 uppercase tracking-wider font-semibold">
                <span>Duration</span>
                <span className="text-white">{data.duration ? `${data.duration} min` : "25 min"}</span>
              </div>

              <div className="flex justify-between items-center text-zinc-400 uppercase tracking-wider font-semibold">
                <span>Calories</span>
                <span className="text-white">{data.caloriesBurned ? `${data.caloriesBurned} kcal` : "180 kcal"}</span>
              </div>

              <div className="flex justify-between items-center text-zinc-400 uppercase tracking-wider font-semibold">
                <span>Rating</span>
                <span className="text-white">{data.rating || "4.8"}</span>
              </div>
            </div>

            {/* Instructions Section */}
            <div className="mt-8">
              <h3 className="text-white font-extrabold text-sm uppercase tracking-wider mb-3">
                Instructions
              </h3>

              <ol className="space-y-2 text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {data.instructions?.map((step: string, index: number) => (
                  <li key={index} className="flex gap-2">
                    <span>{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                )) || (
                  <>
                    <li className="flex gap-2">
                      <span>1.</span>
                      <span>Lie on the bench with eyes under the bar and feet planted.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>2.</span>
                      <span>Unrack with locked elbows and lower the bar to mid-chest.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>3.</span>
                      <span>Press up in a slight arc until elbows lock without bouncing.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>4.</span>
                      <span>Keep shoulder blades pinched and a natural arch in the back.</span>
                    </li>
                  </>
                )}
              </ol>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <PlanBtn item={data}></PlanBtn>

             
          </div>
        </div>

      </div>
    </main>
  );
}