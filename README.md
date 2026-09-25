Project Name
FITLOG – Dynamic Fitness & Workout Tracker

Short Description
FITLOG is a modern, responsive web application designed for fitness enthusiasts to browse workout routines, manage personal daily exercise plans, track stats like calories and workout duration, and save routines for quick access. Built with Next.js App Router and Tailwind CSS, it offers a seamless real-time state management experience.

Technologies Used
Frontend Framework: Next.js 15+ (React 19, App Router)

Styling: Tailwind CSS, DaisyUI

State Management: React Context API (PlanContext)

Icons & Notifications: React Icons (react-icons), React Toastify (react-toastify)

Type Safety: TypeScript

5 Key Features of the Project
Real-time Navigation Counters & Badges:
Integrates dynamic context-driven badges in the header navbar to show the real-time count of active plans ("Today's Plan") and bookmarked workouts ("Saved").

Interactive Daily Plan Management:
Users can add workouts to their daily regimen, mark them as completed ("Mark as Done"), or remove them seamlessly across tabs ("Today's Plan" vs. "Saved") with automatic global state synchronization.

Dynamic Sorting & Filtering:
Allows users to dynamically sort their workout plan list in descending order (highest to lowest) based on key metrics: Duration (minutes), Calories Burned (kcal), or User Rating.

Live Workout Stats Calculation:
Automatically aggregates real-time totals for total exercises count, overall active duration in minutes, and estimated burned calories across the active list.

Custom Dark-themed Error & Not-Found Handling:
Features custom-designed dark UI layouts for smooth UX, including a tailored 404 page (not-found.tsx) with quick navigation links back to active routines.