/* eslint-disable no-unused-vars */

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type DataPickerProps = {
  label: string;
  filter: any;
  setFilter: (filter: any) => void;
  pickerName: "startDate" | "endDate";
};

export const DataPicker = ({
  label,
  filter,
  setFilter,
  pickerName,
}: DataPickerProps) => {
  return (
    <div className="flex flex-col">
      <label className="filter-label ">{label}</label>
      <DatePicker
        id="start-date-picker"
        placeholderText="Select a date..."
        className="input-container "
        selected={
          filter[pickerName] ? new Date(filter[pickerName] * 1000) : null
        }
        onChange={(date: Date | null) => {
          if (date) {
            setFilter({
              ...filter,
              [pickerName]: Math.floor(date.getTime() / 1000),
            });
          } else {
            setFilter({ ...filter, [pickerName]: null });
          }
        }}
        isClearable
      />
    </div>
  );
};
