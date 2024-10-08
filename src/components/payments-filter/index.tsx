/* eslint-disable no-unused-vars */
import { FilterType } from "@/app/(core)/payments-overview/types";
import { InputField } from "./InputField";
import { Selector } from "./Selector";
import { DataPicker } from "./DataPicker";
type PaymentsFilterProps = {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
};

export const PaymentsFilter = ({ filter, setFilter }: PaymentsFilterProps) => {
  const onClearHandle = () => {
    setFilter({
      startDate: null,
      endDate: null,
      minAmount: null,
      maxAmount: null,
      paymentType: { value: "All_TYPES", label: "All Types" },
      status: { value: "ALL_STATES", label: "All States" },
      currency: { value: "ALL_CURRENCIES", label: "All Currencies" },
    });
  };

  return (
    <div className="payments-filter-layout">
      <div className="flex flex-wrap items-center mb-4 space-x-5 justify-start w-full">
        <div className="from-to-container space-x-2">
          <DataPicker
            label={"Select Start Date"}
            filter={filter}
            setFilter={setFilter}
            pickerName={"startDate"}
          />
          <DataPicker
            label={"Select End Date"}
            filter={filter}
            setFilter={setFilter}
            pickerName={"endDate"}
          />
        </div>
        <div className="from-to-container space-x-2">
          <InputField
            label="Amount From"
            filter={filter}
            setFilter={setFilter}
            amountName={"minAmount"}
          />
          <InputField
            label="Amount To"
            filter={filter}
            setFilter={setFilter}
            amountName={"maxAmount"}
          />
        </div>
        <Selector
          label={"Payment Type"}
          placeholder={"All Types"}
          filter={filter}
          setFilter={setFilter}
          optionName={"paymentType"}
        />
        <Selector
          label={"Currency Type"}
          placeholder={"Currency"}
          filter={filter}
          setFilter={setFilter}
          optionName={"currency"}
        />
        <Selector
          label={"Status"}
          placeholder={"All States"}
          filter={filter}
          setFilter={setFilter}
          optionName={"status"}
        />
        <button className="flex flex-col mt-1 mb-4" onClick={onClearHandle}>
          <label className="filter-label">Clear</label>
          <span className="input-container text-center">✕</span>
        </button>
      </div>
    </div>
  );
};
