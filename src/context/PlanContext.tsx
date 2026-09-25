"use client";

import { createContext, useState, ReactNode } from "react";
 import { toast } from 'react-toastify';
import { IExercise } from "@/type/plan";

interface PlanContextType {
  todayPlan: IExercise[];
  savedPlan: IExercise[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  addToTodayPlan: (exercise: IExercise) => void;
  addToSavedPlan: (exercise: IExercise) => void;
  removeFromTodayPlan: (id: string | number) => void;
  removeFromSavedPlan: (id: string | number) => void;
}

export const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [todayPlan, setTodayPlan] = useState<IExercise[]>([]);
  const [savedPlan, setSavedPlan] = useState<IExercise[]>([]);
  const [activeTab, setActiveTab] = useState<string>("today");

  // Add to Today's Plan
  const addToTodayPlan = (exercise: IExercise) => {
    const isAlreadyAdded = todayPlan.some((item) => item.id === exercise.id);

    if (isAlreadyAdded) {
      toast.error("Already added to my-plan!");
      return;
    }

    setTodayPlan((prev) => [...prev, exercise]);
    toast.success("Successfully added to my-plan");
  };

  // Add to Saved Plan
  const addToSavedPlan = (exercise: IExercise) => {
    const isAlreadySaved = savedPlan.some((item) => item.id === exercise.id);

    if (isAlreadySaved) {
      toast.error("Already in saved plan!");
      return;
    }

    setSavedPlan((prev) => [...prev, exercise]);
    toast.success("Successfully added to my-plan");
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
        activeTab,
        setActiveTab,
        addToTodayPlan,
        addToSavedPlan,
        removeFromTodayPlan,
        removeFromSavedPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};