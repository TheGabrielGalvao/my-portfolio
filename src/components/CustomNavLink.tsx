import clsx from "clsx";
import Link from "next/link";

interface CUstomNavLinkProps {
  pathname: string;
  route: string;
  label: string;
  icon?: JSX.Element;
}

export const CustomNavlink = ({
  pathname,
  route,
  label,
  icon,
}: CUstomNavLinkProps) => {
  return (
    <Link
      className={clsx(
        {
          "text-secondary": pathname === route,
          "text-white": pathname !== route,
        },
        "flex flex-col items-center justify-center"
      )}
      href={route}
    >
      {icon}
      {label}
    </Link>
  );
};
