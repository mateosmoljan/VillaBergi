import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
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
  createData("01.01. - 28.02.", 200, 10, 5),
  createData("01.03. - 19.04.", 250, 10, 5),
  createData("20.04. - 26.04.", 350, 10, 5),
  createData("27.04. - 30.04.", 300, 10, 5),
  createData("01.05. - 31.05.", 350, 10, 5),
  createData("01.06. - 30.06.", 450, 10, 5),
  createData("01.07. - 31.07.", 830, 10, 5),
  createData("01.08. - 31.08.", 660, 10, 5),
  createData("01.09. - 30.09.", 430, 10, 5),
  createData("01.10. - 31.10.", 250, 10, 5),
  createData("01.11. - 19.12.", 200, 10, 5),
  createData("20.12. - 26.12.", 300, 10, 5),
  createData("27.12. - 04.01.", 500, 10, 5),
];

export default function PriceTable() {
  const localeActive = useLocale();
  const PriceTableData = getPriceTableData(localeActive);
  return (
    <TableContainer
      component={Paper}
      className=" bg-secondary_background text-primary p-2 !border-none"
    >
      <Table
        aria-label="Pricing Table "
        className="bg-secondary_background text-primary"
      >
        <TableHead className="bg-secondary_background">
          <TableRow className=" !font-titleBold border-b-2">
            <TableCell className="text-primary !font-titleBold !py-2 px-0 w-[160px] text-center">
              {PriceTableData.data[0].title}
            </TableCell>
            <TableCell
              align="right"
              className="text-primary !font-titleBold !py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title2}
            </TableCell>
            <TableCell
              align="right"
              className="text-primary !font-titleBold !py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title3}
            </TableCell>
            <TableCell
              align="right"
              className="text-primary !font-titleBold py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title4}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.period}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="border-b-2 border-b-text_secondary/20"
            >
              <TableCell
                component="th"
                scope="row"
                className="text-secondary px-0 !font-Bold !py-2 text-center"
              >
                {row.period}
              </TableCell>
              <TableCell
                align="right"
                className="text-secondary px-0 !font-ExtraBold !py-2 text-center"
              >
                {row.price} €
              </TableCell>
              <TableCell
                align="right"
                className="text-secondary px-0 !font-Bold !py-2 text-center"
              >
                {row.persons}
              </TableCell>
              <TableCell
                align="right"
                className="text-secondary px-0 !font-Bold !py-2 text-center"
              >
                {row.stay}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
