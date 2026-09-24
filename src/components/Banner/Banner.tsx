import Image from 'next/image';
import Link from 'next/link';
import bannerImg from '@/assets/banner.png';   

const Banner = () => {
  return (
    <section className="container mx-auto sm:px-6 lg:px-8 my-8">
      <div className="bg-[#25282f] rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden border border-zinc-800/80 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left Content */}
        <div className="max-w-xl z-10">
          <span className="text-[#8bf500] font-semibold tracking-wider text-xs sm:text-sm uppercase mb-4 block">
            WORKOUT LIBRARY
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none mb-6">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          {/* CTA Button */}
          <Link
            href="#workouts"
            className="inline-block bg-[#8bf500] hover:bg-[#7be000] text-black font-bold uppercase text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#8bf500]/10 hover:shadow-[#8bf500]/20"
          >
            BROWSE WORKOUTS
          </Link>
        </div>

        {/* Right Illustration */}
        <div className="relative w-full md:w-1/2 max-w-sm lg:max-w-md flex justify-center md:justify-end z-10">
          <Image
            src={bannerImg}
            alt="Workout Gym Equipment Illustration"
            priority
            className="w-full h-auto object-contain max-h-[320px] lg:max-h-[380px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;