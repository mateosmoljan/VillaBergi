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
  createData("02.01. - 12.01.", 0, 10, 3),
  createData("13.01. - 31.01.", 0, 10, 3),
  createData("01.02. - 31.03.", 0, 10, 3),
  createData("01.04. - 30.04.", 0, 10, 3),
  createData("01.05. - 31.05.", 0, 10, 3),
  createData("01.06. - 30.06.", 0, 10, 3),
  createData("01.07. - 31.08.", 0, 10, 3),
  createData("01.09. - 12.09.", 0, 10, 3),
  createData("13.09. - 22.09.", 0, 10, 3),
  createData("23.09. - 30.09.", 0, 10, 3),
  createData("01.10. - 30.10.", 0, 10, 3),
  createData("01.11. - 31.11.", 0, 10, 3),
  createData("01.12. - 22.12.", 0, 10, 3),
  createData("23.12. - 27.8.", 0, 10, 3),
  createData("28.12. - 01.01.", 0, 10, 3),
];

export default function PriceTable() {
  const localeActive = useLocale();
  const PriceTableData = getPriceTableData(localeActive);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Pricing Table ">
        <TableHead className="">
          <TableRow className="bg-grey2 !font-titleBold ">
            <TableCell className="!font-titleBold !py-2 px-0 w-[160px] text-center">
              {PriceTableData.data[0].title}
            </TableCell>
            <TableCell
              align="right"
              className="!font-titleBold !py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title2}
            </TableCell>
            <TableCell
              align="right"
              className="!font-titleBold !py-2 px-0 w-[112px] text-center"
            >
              {PriceTableData.data[0].title3}
            </TableCell>
            <TableCell
              align="right"
              className="!font-titleBold py-2 px-0 w-[112px] text-center"
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
            >
              <TableCell
                component="th"
                scope="row"
                className="px-0 !font-Bold !py-2 text-center"
              >
                {row.period}
              </TableCell>
              <TableCell
                align="right"
                className="px-0 !font-ExtraBold !py-2 text-center"
              >
                {row.price} €
              </TableCell>
              <TableCell
                align="right"
                className="px-0 !font-Bold !py-2 text-center"
              >
                {row.persons}
              </TableCell>
              <TableCell
                align="right"
                className="px-0 !font-Bold !py-2 text-center"
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
