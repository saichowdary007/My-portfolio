"use client";

import { useEffect } from "react";
import { initializeSmoothScroll } from "../lib/smooth-scroll";
import { GlobalBackground } from "@/components/GlobalBackground";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const cleanup = initializeSmoothScroll();
    return cleanup;
  }, []);
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased dark min-h-screen overflow-x-hidden bg-background font-sans text-primary";
  }, []);

  return (
    <body className="antialiased dark min-h-screen overflow-x-hidden bg-background font-sans text-primary" suppressHydrationWarning>
      <GlobalBackground>
        {children}
      </GlobalBackground>
    </body>
  );
}
