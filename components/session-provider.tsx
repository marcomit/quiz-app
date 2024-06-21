"use client";

import { SessionProvider as SessionAuthProvider } from "next-auth/react";

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionAuthProvider>{children}</SessionAuthProvider>;
}
