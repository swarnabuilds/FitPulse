import Image from "next/image";
import { IExercise } from "@/type/plan";
import { FiClock, FiStar } from "react-icons/fi";
import { IoMdFlame } from "react-icons/io";

interface IDataProps {
  data: IExercise;
}

const PlanCard = ({ data }: IDataProps) => {
  return (
    <div className="bg-[#12141a] rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Top Image Container */}
        <div className="relative w-full h-48 sm:h-52 bg-zinc-900 overflow-hidden">
          <Image
            src={data.image}
            alt={data.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Card Body */}
        <div className="p-5">
          {/* Muscle Groups Badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            {data.muscleGroups?.map((muscle, index) => (
              <span
                key={index}
                className="bg-[#8bf500] text-black font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-md tracking-wider"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-black text-white uppercase tracking-wide leading-snug">
            {data.name}
          </h3>

          <p className="text-zinc-500 text-xs mt-1 font-medium">
            {data.equipment}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-2 flex items-center gap-4 text-zinc-400 text-xs font-medium border-t border-zinc-800/40 mt-2">
        <div className="flex items-center gap-1.5">
          <FiClock className="text-zinc-400 text-sm" />
          <span>{data.duration} min</span>
        </div>

        <div className="flex items-center gap-1.5">
          <IoMdFlame className="text-zinc-400 text-base" />
          <span>{data.caloriesBurned} kcal</span>
        </div>

        <div className="flex items-center gap-1.5 ml-auto">
          <FiStar className="text-zinc-400 text-sm" />
          <span className="text-zinc-300 font-semibold">{data.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;