"use client";

import { useContext } from "react";
import { useRouter } from "next/navigation";
import { FiBookmark, FiPlusCircle } from "react-icons/fi";
import { PlanContext } from "@/context/PlanContext";
import { IExercise } from "@/type/plan";

interface PlanButtonsProps {
  item: IExercise;
}

const PlanBtn = ({ item }: PlanButtonsProps) => {
  const router = useRouter();
  const context = useContext(PlanContext);

  // Handle Add to Today's Plan
  const handleAddToToday = () => {
    if (context) {
      context.addToTodayPlan(item);
      context.setActiveTab("today");
      router.push("/myPlan");
    }
  };

  // Handle Save for Later
  const handleSaveForLater = () => {
    if (context) {
      context.addToSavedPlan(item);
      context.setActiveTab("saved");
      router.push("/myPlan");
    }
  };

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      {/* Add to Today's Plan Button */}
      <button
        onClick={handleAddToToday}
        className="flex items-center justify-center gap-2 bg-[#8bf500] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl hover:bg-[#7be000] transition-all duration-200 shadow-lg shadow-[#8bf500]/10 cursor-pointer"
      >
        <FiPlusCircle className="text-base" />
        Add to today&apos;s plan
      </button>

      {/* Save for Later Button */}
      <button
        onClick={handleSaveForLater}
        className="flex items-center justify-center gap-2 border border-zinc-800 bg-[#13151b] text-zinc-300 hover:text-white hover:border-zinc-700 font-semibold text-xs uppercase px-5 py-3 rounded-xl transition-all duration-200 cursor-pointer"
      >
        <FiBookmark className="text-base" />
        Save for later
      </button>
    </div>
  );
};

export default PlanBtn;