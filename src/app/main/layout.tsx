"use client";

import { SessionProvider } from "next-auth/react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
      </div>
    </SessionProvider>
  );
}
