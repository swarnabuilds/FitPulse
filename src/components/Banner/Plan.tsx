import PlanCard from "../shared/PlanCard";
import { IExercise } from "@/type/plan";


const getPlan = async() => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog', {cache: 'no-store'});

    if (!res.ok) {
      throw new Error(`Failed to fetch plans data: ${res.status}`);
    }

    const data = await res.json();
    return data;
}
const Plan = async () => {
  const AllPlans = await getPlan();

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-black text-white uppercase tracking-tight">
          THE LIBRARY
        </h2>
        <p className="text-zinc-400 text-sm mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {AllPlans.map((data: IExercise) => (
          <PlanCard key={data.id} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Plan;