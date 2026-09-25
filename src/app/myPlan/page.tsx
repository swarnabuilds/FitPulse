"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlanContext } from "@/context/PlanContext";
import {
  FiChevronDown,
  FiClock,
  FiZap,
  FiStar,
  FiCheck,
  FiX,
} from "react-icons/fi";

const MyPlanPage = () => {
  const context = useContext(PlanContext);

  const todayPlan = context?.todayPlan || [];
  const savedPlan = context?.savedPlan || [];
  const activeTab = context?.activeTab || "today";
  const setActiveTab = context?.setActiveTab || (() => {});
  const removeFromTodayPlan = context?.removeFromTodayPlan || (() => {});
  const removeFromSavedPlan = context?.removeFromSavedPlan || (() => {});

  const currentList = activeTab === "today" ? todayPlan : savedPlan;

  // Dynamic Stats Calculation
  const stats = {
    exercises: currentList.length,
    minutes: currentList.reduce(
      (acc, curr) => acc + (Number(curr.duration) || 0),
      0
    ),
    calories: currentList.reduce(
      (acc, curr) => acc + (Number(curr.caloriesBurned) || 0),
      0
    ),
  };

  const handleRemove = (id: string | number) => {
    if (activeTab === "today") {
      removeFromTodayPlan(id);
    } else {
      removeFromSavedPlan(id);
    }
  };

  return (
    <main className="my-12 min-h-screen bg-[#0b0c0e] text-white py-10 px-4 sm:px-8 lg:px-16 container mx-auto">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white">
          MY PLAN
        </h1>
        <p className="text-zinc-400 text-xs sm:text-sm mt-1 font-medium">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats Cards Box */}
      <div className="bg-[#12141a]/90 border border-zinc-800/80 rounded-2xl p-6 mb-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-zinc-800/60">
        <div className="pt-2 md:pt-0">
          <span className="text-zinc-400 text-xs font-semibold block mb-1">
            Exercises
          </span>
          <span className="text-3xl sm:text-4xl font-extrabold text-[#8bf500]">
            {stats.exercises}
          </span>
        </div>

        <div className="pt-4 md:pt-0 md:pl-8">
          <span className="text-zinc-400 text-xs font-semibold block mb-1">
            Minutes
          </span>
          <span className="text-3xl sm:text-4xl font-extrabold text-white">
            {stats.minutes}
          </span>
        </div>

        <div className="pt-4 md:pt-0 md:pl-8">
          <span className="text-zinc-400 text-xs font-semibold block mb-1">
            Calories
          </span>
          <span className="text-3xl sm:text-4xl font-extrabold text-white">
            {stats.calories}
          </span>
        </div>
      </div>

      {/* Controls Bar: DaisyUI Tabs & Dropdown */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">


        {/* tab  */}
        <div
          role="tablist"
          className="tabs tabs-boxed bg-[#12141a] p-1 rounded-xl border border-zinc-800/80 inline-flex w-fit"
        >
          <button
            role="tab"
            onClick={() => setActiveTab("today")}
            className={`tab text-xs font-bold transition-all px-5 py-2 rounded-lg ${
              activeTab === "today"
                ? "bg-zinc-800 text-white shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            role="tab"
            onClick={() => setActiveTab("saved")}
            className={`tab text-xs font-bold transition-all px-5 py-2 rounded-lg ${
              activeTab === "saved"
                ? "bg-zinc-800 text-white shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-zinc-400">
          <span>Sort By</span>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-xs bg-[#12141a] hover:bg-zinc-800 text-white border-zinc-800 normal-case font-semibold gap-2 rounded-lg px-3 py-1.5 h-auto min-h-0"
            >
              Duration <FiChevronDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow-2xl bg-[#12141a] border border-zinc-800 rounded-xl w-36 mt-2 text-xs text-zinc-300"
            >
              <li>
                <a>Duration</a>
              </li>
              <li>
                <a>Calories</a>
              </li>
              <li>
                <a>Rating</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content Section: Cards or Empty Container */}
      {currentList.length === 0 ? (
        <div className="border border-dashed border-zinc-800/90 rounded-2xl p-12 sm:p-20 text-center flex flex-col items-center justify-center bg-[#0d0e11]/50 min-h-[350px]">
          <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wider">
            NOTHING HERE YET
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm mt-2 max-w-sm">
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="mt-6 bg-[#8bf500] hover:bg-[#7be000] text-black font-extrabold text-xs uppercase px-6 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-[#8bf500]/10 inline-block"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {currentList.map((item) => (
            <div
              key={item.id}
              className="bg-[#12141a] border border-zinc-800/80 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all hover:border-zinc-700"
            >
              {/* Card Left: Thumbnail & Main Infos */}
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-20 bg-zinc-900 rounded-xl overflow-hidden shrink-0 border border-zinc-800">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-wider text-white text-base sm:text-lg">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5 font-medium">
                    {item.equipment}
                  </p>

                  {/* Badges / Stats */}
                  <div className="flex items-center gap-3 text-xs text-zinc-300 mt-2 font-medium">
                    <span className="flex items-center gap-1">
                      <FiClock className="text-[#8bf500]" />
                      {item.duration || 0} min
                    </span>
                    <span className="flex items-center gap-1">
                      <FiZap className="text-[#8bf500]" />
                      {item.caloriesBurned || 0} kcal
                    </span>
                    {item.rating && (
                      <span className="flex items-center gap-1">
                        <FiStar className="text-yellow-400 fill-yellow-400" />
                        {item.rating}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Right: Action Buttons */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-zinc-800/60 pt-3 sm:pt-0">
                <Link
                  href={`/workout/${item.id}`}
                  className="px-4 py-2 border border-zinc-800/90 hover:border-zinc-700 bg-zinc-900/80 text-zinc-300 hover:text-white rounded-full text-xs font-semibold transition-all"
                >
                  View Details
                </Link>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="px-4 py-2 bg-[#8bf500] hover:bg-[#7be000] text-black font-extrabold rounded-full text-xs flex items-center gap-1.5 transition-all shadow-md shadow-[#8bf500]/10"
                >
                  <FiCheck className="text-sm stroke-[3]" />
                  Mark as Done
                </button>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="p-2 text-zinc-500 hover:text-zinc-300 transition-colors ml-1"
                  title="Remove"
                >
                  <FiX className="text-base" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default MyPlanPage;