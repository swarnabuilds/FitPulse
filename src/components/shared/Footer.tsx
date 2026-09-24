import logo from '@/assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0b0c0e] border-t border-zinc-800/60 py-6">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src={logo} 
              alt="FITLOG Logo" 
              priority 
              className="w-7 h-7 object-contain" 
            />
            <span className="text-white font-bold tracking-wider text-base uppercase">
              FITLOG
            </span>
          </Link>

          <p className="text-zinc-400 text-xs sm:text-sm text-center sm:text-right">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;