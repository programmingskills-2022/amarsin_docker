import { useMemo } from "react";

//do select option value set
export const errorTypes = [
  { id: -1, des: "خطا ندارد", kind: true },
  { id: 0, des: "خطا ندارد", kind: true },
  { id: 1, des: "یو آی دی اشتباه است", kind: false },
  { id: 3, des: "یو آی دی پیدا نشد", kind: false },
  { id: 4, des: "این فراورده در سامانه صدور پروانه پیدا نشد", kind: false },
  {
    id: 10,
    des: "مسئول فنی اجازه توزیع و فروش این فراورده را صادر نکرده است",
    kind: false,
  },
  {
    id: 11,
    des: "این فراورده ریکال شده است. از توزیع، فروش یا مصرف آن خودداری شود",
    kind: false,
  },
  {
    id: 12,
    des: "این فراورده منقضی شده است. از توزیع، فروش یا مصرف آن خودداری شود",
    kind: false,
  },
];

//set status cell with color text
export function Status({ value }: { value: number }) {
  const err = errorTypes.find((err) => err.id === value);
  return (
    <span
      className={`
        "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm"
        ${
          err?.id === -1 || err?.id === 0
            ? "text-green-700 dark:text-green-400"
            : null
        }
        ${err?.id === 1 ? "text-red-700 dark:text-red-400" : null}
        ${err?.id === 3 ? "text-red-700 dark:text-red-400" : null}
        ${err?.id === 4 ? " text-yellow-700 dark:text-yellow-400" : null} ${
        err?.id === 10 ? " text-yellow-700 dark:text-yellow-400" : null
      }
        ${err?.id === 11 ? "text-red-700 dark:text-red-400" : null}
        ${err?.id === 12 ? "text-red-700 dark:text-red-400" : null}
      }`}
    >
      {err?.des}
    </span>
  );
}

//merge remained cell with 4 field
export function RemainedCell({
  value,
  column,
  row,
}: {
  value: any;
  column: any;
  row: any;
}) {
  return (
    <div className="flex items-center">
      <div className="ml-4">
        <div className="flex gap-1 text-xs text-gray-500 dark:text-gray-100">
          <div className="flex flex-col items-end">
            <p>موجودی:</p>
            <p>موقت:</p>
            <p>ورودی:</p>
            <p>خروجی: </p>
          </div>
          <div className="flex flex-col ">
            <p>{value}</p>
            <p>{row.original[column.tmpAccessor]}</p>
            <p>{row.original[column.incAccessor]}</p>
            <p>{row.original[column.outcAccessor]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//for mobile show
export function InfoCellMobile({
  value,
  column,
  row,
}: {
  value: any;
  column: any;
  row: any;
}) {
  return (
    <div className="flex items-center">
      <div className="ml-4">
        <div className="flex gap-1 text-xs text-gray-500 dark:text-gray-100">
          <div className="flex flex-col items-end">
            <p>کد بچ:</p>
            <p>کد کالا:</p>
            <p>نام کالا:</p>
            <p>تاریخ تولید:</p>
            <p>تاریخ انقضا:</p>
            <p>GTIN:</p>
            <p>IRC:</p>
            <p>UID: </p>
          </div>
          <div className="flex flex-col ">
            <p>{value}</p>
            <p>{row.original[column.fullCodeAccessor]}</p>
            <p>{row.original[column.fullNameAccessor]}</p>
            <p>{row.original[column.prodAccessor]}</p>
            <p>{row.original[column.expAccessor]}</p>
            <p>{row.original[column.GTINAccessor]}</p>
            <p>{row.original[column.IRCAccessor]}</p>
            <p>{row.original[column.UIDAccessor]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

//merge code and name of kala in one cell
export function InfoCell({
  value,
  column,
  row,
}: {
  value: any;
  column: any;
  row: any;
}) {
  return (
    <div className="flex items-center">
      <div className="ml-4">
        <div className="text-sm font-medium">{value}</div>
        <div className="text-sm text-gray-500 dark:text-gray-100">
          {row.original[column.fullNameAccessor]}
        </div>
      </div>
    </div>
  );
}

// return description of error code that is in option param
function getOption(option: any) {
  const err = errorTypes.find((err) => err.id === option);
  return `${err?.des}`;
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}: any) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options: string[] = useMemo(() => {
    const options = new Set<string>();
    preFilteredRows.forEach((row: any) => {
      if (row.values[id] !== 0 && row.values[id] !== -1) {
        options.add(row.values[id]);
      }
    });
    return Array.from(options.values());
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <label className="flex gap-x-2 items-baseline">
      {/* <span className="text-gray-700">{render("Header")}: </span> */}
      <select
        className="bg-gray-100 text-slate-800 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-xs md:text-sm"
        name={id}
        id={id}
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">همه</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {getOption(option)}
          </option>
        ))}
      </select>
    </label>
  );
}
