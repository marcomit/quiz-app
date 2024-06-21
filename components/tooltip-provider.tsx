"use client";

import { TooltipProvider as TooltipUIProvider } from "./ui/tooltip";

export default function TooltipProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TooltipUIProvider>{children}</TooltipUIProvider>;
}
