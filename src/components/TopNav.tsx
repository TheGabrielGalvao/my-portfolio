"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";
import {
  MdNotes,
  MdOutlineConstruction,
  MdOutlineHome,
  MdOutlineLightbulb,
  MdOutlineNote,
} from "react-icons/md";
import { CustomNavlink } from "./CustomNavLink";

export const TopNav = () => {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center justify-between bg-primary w-fit rounded-2xl p-md gap-md">
      <CustomNavlink
        label="Home"
        icon={<MdOutlineHome size={32} />}
        route="/"
        pathname={pathname}
      />
      <CustomNavlink
        label="Resumo"
        icon={<MdNotes size={32} />}
        route="/resume"
        pathname={pathname}
      />
      <CustomNavlink
        label="Skills"
        icon={<MdOutlineConstruction size={32} />}
        route="/skills"
        pathname={pathname}
      />
      <CustomNavlink
        label="Projetos"
        icon={<MdOutlineLightbulb size={32} />}
        route="/projects"
        pathname={pathname}
      />
    </nav>
  );
};
