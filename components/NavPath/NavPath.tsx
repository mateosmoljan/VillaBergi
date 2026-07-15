"use client";
import { Link } from "@/navigation";
import { usePathname } from "@/navigation";
import { FaHome } from "react-icons/fa";

type Props = {
  homePage?: boolean;
};
function NavPath({ homePage = false }: Props) {
  const pathname = usePathname();
  const currentPage = pathname.split("/").filter(Boolean).at(-1)?.replaceAll("-", " ") ?? "";
  return (
    <div className="b secondary-bg py-3 px-4 sm:px-8">
      <div className="flex items-center gap-2 container">
        <Link href="/" className="text-secondary" aria-label="Home">
          <FaHome />
        </Link>
        {!homePage && (
          <span className="text-secondary" aria-current="page">
            <span className="flex items-center gap-2">
              <span className="text-xl"> {">"} </span>
              {currentPage}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}

export default NavPath;
