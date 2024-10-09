/* eslint-disable no-unused-vars */
import React from "react";
import { FilterType } from "@/app/(core)/payments-overview/types";

type InputFieldProps = {
  label: string;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  amountName: "minAmount" | "maxAmount";
};

export const InputField = ({
  label,
  filter,
  setFilter,
  amountName,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col">
      <label className="filter-label">{label}</label>
      <input
        className=" input-container "
        type="number"
        min={0}
        placeholder="Type amount"
        value={filter[amountName] || ""}
        onChange={(e) => {
          setFilter({
            ...filter,
            [amountName]: parseFloat(e.target.value),
          });
        }}
      />
    </div>
  );
};
