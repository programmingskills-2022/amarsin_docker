import { GeneralContext } from "@/app/contexts/GeneralContext";
import Input2 from "@/app/ui/Input2";
import { useContext, useEffect } from "react";

export default function SystemsAndFinancialYears() {
  const {
    systems,
    financialYears,
    system,
    setSystem,
    financialYear,
    setFinancialYear,
    fetchFinancialYearsAndSystems,
  } = useContext(GeneralContext);

  useEffect(() => {
    fetchFinancialYearsAndSystems();
  }, []);

  //initialize financialYear and system name
  useEffect(() => {
    if (financialYear > 0 && system > 0) {
      setFinancialYear(financialYear);
      setSystem(system);
    }
  }, []);

  return (
    <div className="flex text-sm gap-4">
      <Input2
        setInputValue={setSystem}
        inputValue={system}
        labelName="نام سیستم"
        inputName="systemName"
        className="w-90 h-8 bg-gray-200"
        disabled={false}
        type="select"
        options={systems.map((system) => (
          <option key={system.Id} value={system.Id}>
            {system.Name}
          </option>
        ))}
      />
      <Input2
        setInputValue={setFinancialYear}
        inputValue={financialYear}
        labelName="سال مالی"
        inputName="financialYear"
        className="w-90 h-8 bg-gray-200"
        disabled={false}
        type="select"
        options={financialYears.map((financialYear) => (
          <option key={financialYear.Id} value={financialYear.Id}>
            {financialYear.Name}
          </option>
        ))}
      />
    </div>
  );
}
