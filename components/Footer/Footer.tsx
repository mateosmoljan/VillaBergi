import Image from "next/image";
import SSL from "@/public/assets/images/ssl.png";
import "./footer.css";
import { Link } from "@/navigation";
import FooterSvg from "./FooterSvg";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations("Footer");
  return (
    <section className="flex relative justify-center bg-dark_blue_black xl:px-20 pb-10 xl:pb-20 mt-20">
      <FooterSvg />
      <div className="pt-8 max-w-screen-2xl grid w-full text-white sm:grid-cols-2 gap-y-8 lg:grid-cols-4 place-items-center">
        <div className="h-full relative pl-5 sm:pl-0 w-full sm:w-3/5 lg:w-auto">
          <div className="space-y-4 ">
            <Image src={SSL} alt="ssl Villa Relax" width={200} />
            <p>{t("year")}</p>
            <p>{t("rights")}</p>
            {/* <p className="">
              <a
                href="https://www.boostweb.io"
                className="!text-white hover:!text-yellow"
              >
                {t("created_by")}
              </a>
            </p> */}
          </div>
        </div>
        <div className="w-full h-full relative pl-5 sm:pl-0 sm:w-3/5 lg:w-auto">
          <h2 className="font-bold uppercase text-xl pb-5">
            {t("Discover.title")}
          </h2>
          <ul className="space-y-4 !text-white">
            <li>
              <Link
                href="https://www.pulainfo.hr/"
                target="_blank"
                className="!text-white underline hover:!text-yellow"
              >
                {t("Discover.list.Pula")}
              </Link>
            </li>
            <li>
              <Link
                href="https://www.istra.hr/"
                target="_blank"
                className="!text-white underline hover:!text-yellow"
              >
                {t("Discover.list.Guide")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-full relative pl-5 sm:pl-0 w-full sm:w-3/5 lg:w-auto">
          <h2 className="font-bold uppercase text-xl pb-5">
            {t("Contact_Us.title")}
          </h2>
          <ul className="space-y-4">
            <li>Valter Brgić</li>
            <li>Istria, Žminj, Damijanići 6, 52341, Žminj</li>
            <li>+(385) 99 371 7777</li>
            <li>villa.bergi.wb@gmail.com</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer;
