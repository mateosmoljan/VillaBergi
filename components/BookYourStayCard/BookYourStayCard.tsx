import { getBookStayData } from "@/lib/bookStay";
import { useLocale } from "next-intl";
import { Link } from "@/navigation";

function BookYourStayCard() {
  const localeActive = useLocale();
  const BookStayData = getBookStayData(localeActive);
  return (
    <div
      className={`flex flex-col gap-4 px-3 py-6 custom_border shadow-md hover:shadow-xl rounded-md `}
    >
      <p className="font-poppins text-secondary font-ExtraBold text-center lg:text-right">
        {BookStayData.data[0].des}{" "}
        <span className="text-3xl accent-primary">300 €</span>{" "}
        {BookStayData.data[0].des2}
      </p>
      <hr />
      <Link href="/contact" className="btn justify-center">
        {BookStayData.data[0].button}
      </Link>
    </div>
  );
}

export default BookYourStayCard;
