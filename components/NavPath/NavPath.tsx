"use client";
import { Link } from "@/navigation";
import { usePathname } from "next/navigation";
import { FaHome } from "react-icons/fa";

type Props = {
  homePage?: boolean;
};
function NavPath({ homePage = false }: Props) {
  const pathname = usePathname();
  return (
    <div className="b secondary-bg py-3 px-4 sm:px-8">
      <div className="flex items-center gap-2 container">
        <Link href="/" className="text-secondary">
          <FaHome />
        </Link>
        <Link href={pathname} className="text-secondary">
          {!homePage && (
            <div className="flex items-center gap-2">
              <span className="text-xl"> {">"} </span>
              {pathname.substring(4)}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default NavPath;
