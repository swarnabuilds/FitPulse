import Link from "next/link";
import { FiArrowLeft, FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] bg-[#0b0c0e] text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        {/* Glow & Icon Box */}
        <div className="relative flex items-center justify-center mb-8">
          <div className="absolute w-32 h-32 bg-[#8bf500]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative w-24 h-24 bg-[#12141a] border border-zinc-800 rounded-3xl flex items-center justify-center shadow-2xl">
            <FiAlertTriangle className="text-4xl text-[#8bf500]" />
          </div>
        </div>

        {/* 404 Badge */}
        <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 text-[#8bf500] font-mono text-xs uppercase tracking-widest rounded-full mb-4">
          Error 404
        </span>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wider text-white mb-3">
          PAGE NOT FOUND
        </h1>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8">
          The lift or page you are looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8bf500] hover:bg-[#7be000] text-black font-extrabold text-xs uppercase rounded-xl transition-all duration-200 shadow-lg shadow-[#8bf500]/10"
          >
            <FiArrowLeft className="text-base" />
            Back to Home
          </Link>

          <Link
            href="/myPlan"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#12141a] hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-bold text-xs uppercase rounded-xl transition-all duration-200"
          >
            View My Plan
          </Link>
        </div>
      </div>
    </div>
  );
}