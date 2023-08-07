import { GeneralContext } from "@/app/contexts/GeneralContext";
import { generalFetch } from "@/app/lib/generalFetch";
import { notFound } from "next/navigation";
import { Suspense, useContext } from "react";
import {
  InfoCell,
  InfoCellMobile,
  RemainedCell,
  SelectColumnFilter,
  Status,
} from "../cupboardOperations";
import Table from "@/app/ui/Table";
import SkeletonTable from "@/app/general/SkeletonTable";

type Props = {
  err: boolean;
  errId: number;
};

export default async function CupboardsTable({ err, errId }: Props) {
  const { financialYear, system, apiPoint, windowWidth } =
    useContext(GeneralContext);

  const CUPBOARD_URL = `${apiPoint}/WareApi/CupboardReport?SystemId=${system}&YearId=${financialYear}&Err=${err}&ErrId=${errId}`;

  const cupboardData: Promise<Cupboard> = await generalFetch(CUPBOARD_URL);

  const data = (await cupboardData).Data.result;
  if (!data) notFound;

  const columns =
    windowWidth < 768
      ? [
          {
            Header: "اطلاعات کالا",
            accessor: "Code",
            fullCodeAccessor: "FullCode",
            fullNameAccessor: "FullName",
            prodAccessor: "ProdDate",
            expAccessor: "ExpDate",
            GTINAccessor: "GTIN",
            IRCAccessor: "IRC",
            UIDAccessor: "UID",
            Cell: InfoCellMobile,
          },
          {
            Header: "وضعیت",
            accessor: "Status",
            Filter: err && SelectColumnFilter, // new
            Cell: Status,
            //filter: "includes", // new
          },
        ]
      : [
          {
            Header: "بچ",
            accessor: "Code",
          },
          {
            Header: "کد کالا",
            accessor: "FullCode",
            fullNameAccessor: "FullName",
            Cell: InfoCell,
          },
          {
            Header: "تاریخ تولید",
            accessor: "ProdDate",
          },
          {
            Header: "تاریخ انقضا",
            accessor: "ExpDate",
          },
          {
            Header: "GTIN",
            accessor: "GTIN",
          },
          {
            Header: "IRC",
            accessor: "IRC",
          },
          {
            Header: "UID",
            accessor: "UID",
          },
          {
            Header: "موجودی",
            accessor: "Stck",
            tmpAccessor: "Tmp",
            incAccessor: "Inc",
            outcAccessor: "Outc",
            Cell: RemainedCell,
          },
          {
            Header: "وضعیت",
            accessor: "Status",
            Filter: err && SelectColumnFilter, // new
            Cell: Status,
            //filter: "includes", // new
          },
        ];

  return <Table columns={columns} data={data} />;
}
