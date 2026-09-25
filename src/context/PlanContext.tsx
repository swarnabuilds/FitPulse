"use client";

import { createContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import { IExercise } from "@/type/plan";

interface PlanContextType {
  todayPlan: IExercise[];
  savedPlan: IExercise[];
  completedPlan: IExercise[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  addToTodayPlan: (exercise: IExercise) => void;
  addToSavedPlan: (exercise: IExercise) => void;
  removeFromTodayPlan: (id: string | number) => void;
  removeFromSavedPlan: (id: string | number) => void;
  markAsDone: (item: IExercise) => void;
}

export const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);
  const [savedPlan, setSavedPlan] = useState<IExercise[]>([]);
  const [completedPlan, setCompletedPlan] = useState<IExercise[]>([]);
  const [activeTab, setActiveTab] = useState<string>("today");

  // Mark as Done Function
  const markAsDone = (item: IExercise) => {
    // Today Plan & Saved Plan both theke remove kora (jjeta active thakuk)
    setTodayPlan((prev) => prev.filter((i) => String(i.id) !== String(item.id)));
    setSavedPlan((prev) => prev.filter((i) => String(i.id) !== String(item.id)));

    // Completed Plan-e add
    if (!completedPlan.some((i) => String(i.id) === String(item.id))) {
      setCompletedPlan((prev) => [...prev, item]);
    }

    // Toast notification
    toast.success(`${item.name || "Workout"} marked as done! 🎉`, {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
  };

  // Add to Today's Plan
  const addToTodayPlan = (exercise: IExercise) => {
    const isAlreadyAdded = todayPlan.some((item) => String(item.id) === String(exercise.id));

    if (isAlreadyAdded) {
      toast.error("Already added to my-plan!");
      return;
    }

    setTodayPlan((prev) => [...prev, exercise]);
    toast.success("Successfully added to my-plan");
  };

  // Add to Saved Plan
  const addToSavedPlan = (exercise: IExercise) => {
    const isAlreadySaved = savedPlan.some((item) => String(item.id) === String(exercise.id));

    if (isAlreadySaved) {
      toast.error("Already in saved plan!");
      return;
    }

    setSavedPlan((prev) => [...prev, exercise]);
    toast.success("Successfully added to saved plan");
  };

  const removeFromTodayPlan = (id: string | number) => {
    setTodayPlan((prev) => prev.filter((item) => String(item.id) !== String(id)));
    toast.success("Removed from my-plan");
  };

  const removeFromSavedPlan = (id: string | number) => {
    setSavedPlan((prev) => prev.filter((item) => String(item.id) !== String(id)));
    toast.success("Removed from saved plan");
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedPlan,
        completedPlan,
        activeTab,
        setActiveTab,
        addToTodayPlan,
        addToSavedPlan,
        removeFromTodayPlan,
        removeFromSavedPlan,
        markAsDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};