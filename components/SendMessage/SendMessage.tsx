import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import Markdown from "react-markdown";

function SendMessage() {
  const t = useTranslations("Send_Message");
  return (
    <section className="">
      <div className="container py-10">
        <div className="text-secondary flex justify-between gap-2 lg:items-center lg:flex-row flex-col w-full shadow-2xl p-10 ">
          <div className="lg:w-2/3">
            <p className="text-base">
              <Markdown>{t("des")}</Markdown>
            </p>
          </div>
          <div className=" flex justify-end ">
            <Link href="/contact" className="btn lg:min-w-full">
              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SendMessage;
