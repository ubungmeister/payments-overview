/* eslint-disable no-unused-vars */

import React from "react";
import Select, { SingleValue } from "react-select";
import { FilterType } from "@/app/(core)/payments-overview/types";
import { PaymentTypeOption } from "@/app/(core)/payments-overview/types";

import {
  currencyTypeOptions,
  paymentTypeOptions,
  statusTypeOptions,
  selectorStyles,
} from "@/utilities/options";

type SelectorProps = {
  label: string;
  placeholder: string;
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  optionName: "paymentType" | "currency" | "status";
};

export const Selector = ({
  label,
  placeholder,
  filter,
  setFilter,
  optionName,
}: SelectorProps) => {
  return (
    <div className="flex flex-col mt-1 mb-4">
      <label className="filter-label">{label}</label>
      <Select
        classNamePrefix="Select"
        styles={selectorStyles}
        placeholder={placeholder}
        value={filter[optionName] || ""}
        isSearchable={false}
        onChange={(option) => setFilter({ ...filter, [optionName]: option })}
        options={
          optionName === "paymentType"
            ? paymentTypeOptions
            : optionName === "currency"
            ? currencyTypeOptions
            : statusTypeOptions
        }
      />
    </div>
  );
};
