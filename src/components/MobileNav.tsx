"use client";
import { usePathname } from "next/navigation";
import {
  MdNotes,
  MdOutlineConstruction,
  MdOutlineHome,
  MdOutlineLightbulb,
} from "react-icons/md";
import { CustomNavlink } from "./CustomNavLink";

export const MobileNav = () => {
  const pathname = usePathname();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-primary flex justify-around py-4 z-50">
      <CustomNavlink
        label="Home"
        icon={<MdOutlineHome size={24} />}
        route="/"
        pathname={pathname}
      />
      <CustomNavlink
        label="Resumo"
        icon={<MdNotes size={24} />}
        route="/resume"
        pathname={pathname}
      />
      <CustomNavlink
        label="Skills"
        icon={<MdOutlineConstruction size={24} />}
        route="/skills"
        pathname={pathname}
      />
      <CustomNavlink
        label="Projetos"
        icon={<MdOutlineLightbulb size={24} />}
        route="/projects"
        pathname={pathname}
      />
    </nav>
  );
};
