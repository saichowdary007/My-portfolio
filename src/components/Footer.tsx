"use client";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

const footerLinks: Array<{
  title: string;
  links: FooterLink[];
}> = [];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden pb-8 md:pb-16 bg-gradient-to-t from-purple-900/10 to-transparent">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/4 h-20 w-20 -translate-x-1/2 animate-pulse rounded-full bg-purple-800/10 blur-sm" />
        <div className="absolute bottom-0 right-1/4 h-16 w-16 translate-x-1/2 animate-pulse rounded-full bg-pink-800/10 blur-none delay-300" />
        
        {/* Animated particles */}
        <div className="particle absolute bottom-2 left-1/4 h-1 w-1 bg-purple-400/20 animate-float" />
        <div className="particle absolute bottom-8 right-1/3 h-1 w-1 bg-pink-400/20 animate-float delay-200" />
      </div>

      <section className="py-4 sm:py-8">
        <div className="mx-auto w-full px-6 xl:max-w-7xl space-y-16 sm:space-y-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-center justify-center space-y-2">
              <p className="text-center text-sm text-white/80">
                © 2025 Sai P | Built with ❤️ & Passion
              </p>
              <p className="text-xs text-white/50">
                Crafted with Next.js and Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
