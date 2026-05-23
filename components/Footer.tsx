import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#12241d] text-cream py-12 border-t border-cream/10">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <Image 
            src="/images/logo.png" 
            alt="BlushEase Logo" 
            width={120} 
            height={36} 
            className="h-9 w-auto object-contain" 
          />
        </div>
        
        <div className="text-cream/60 text-sm text-center md:text-right">
          <p>© {new Date().getFullYear()} BlushEase. Premium Plant Support.</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
