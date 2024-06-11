"use client";
import clsx from "clsx";
import { ProfileCard } from "@/components/ProfileCard";
import { TopNav } from "@/components/TopNav";
import { MobileNav } from "@/components/MobileNav";
import { usePathname } from "next/navigation";

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <main className=" flex flex-col min-h-screen p-xl gap-md">
      <header className="flex w-full bg-none justify-end">
        <TopNav />
      </header>
      <div className="flex flex-col md:flex-row gap-md max-w-full flex-wrap md:flex-nowrap max-h-screen">
        <div
          className={clsx(
            {
              hidden: pathname !== "/",
              block: pathname === "/",
            },
            "md:block relative flex w-full md:w-fit items-center justify-center mt-4xl md:mt-0"
          )}
        >
          <ProfileCard />
        </div>

        <div className="flex w-full bg-primary rounded-2xl p-md">
          {children}
        </div>
      </div>
      <MobileNav />
    </main>
  );
}
