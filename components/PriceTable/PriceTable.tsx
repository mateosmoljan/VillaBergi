import { getPriceTableData } from "@/lib/priceTable";
import { useLocale } from "next-intl";

function createData(
  period: string,
  price: number,
  persons: number,
  stay: number
) {
  return { period, price, persons, stay };
}

const rows = [
  createData("01.11. - 08.12.", 297, 12, 5),
  createData("09.12. - 16.12.", 397, 12, 5),
  createData("17.12. - 24.12.", 429, 12, 5),
  createData("25.12. - 29.12.", 529, 12, 5),
  createData("30.12. - 01.01.", 797, 12, 5),
  createData("02.01. - 28.02.", 297, 12, 5),
  createData("01.03. - 31.03.", 327, 12, 5),
  createData("01.04. - 30.04.", 367, 12, 5),
];

export default function PriceTable() {
  const localeActive = useLocale();
  const PriceTableData = getPriceTableData(localeActive);
  return (
    <div className="text-primary p-2">
      <table
        aria-label="Pricing Table"
        className="w-full text-primary border-collapse"
      >
        <thead className="primary-bg secondary-bg">
          <tr className="font-titleBold border-b-2 p-2">
            <th className="font-titleBold py-2 px-0 w-[160px] text-center">
              {PriceTableData.data[0].title}
            </th>
            <th
              align="right"
              className="text-primary font-titleBold py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title2}
            </th>
            <th
              align="right"
              className="text-primary font-titleBold py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title3}
            </th>
            <th
              align="right"
              className="text-primary font-titleBold py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title4}
            </th>
          </tr>
        </thead>
        <tbody className="secondary-bg">
          {rows.map((row) => (
            <tr
              key={row.period}
              className="border-b-2 border-b-text_secondary/20"
            >
              <td className="text-secondary px-0 font-Bold py-2 text-center">
                {row.period}
              </td>
              <td
                align="right"
                className="text-secondary px-0 font-ExtraBold py-2 text-center"
              >
                {row.price} €
              </td>
              <td
                align="right"
                className="text-secondary px-0 font-Bold py-2 text-center"
              >
                {row.persons}
              </td>
              <td
                align="right"
                className="text-secondary px-0 font-Bold py-2 text-center"
              >
                {row.stay}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
