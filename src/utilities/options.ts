import {
  PaymentType,
  CurrencyType,
  PaymentStatusType,
} from "../app/(core)/payments-overview/types";

export const paymentTypeOptions: { value: PaymentType; label: string }[] = [
  { value: "All_TYPES", label: "All Types" },
  { value: "BANK_TRANSFER", label: "Bank Transfer" },
  { value: "APPLE_PAY", label: "Apple Pay" },
  { value: "GOOGLE_PAY", label: "Google Pay" },
  { value: "CARD_ONLINE", label: "Card Online" },
];

export const currencyTypeOptions: { value: CurrencyType; label: string }[] = [
  { value: "ALL_CURRENCIES", label: "All Currencies" },
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "CZK", label: "CZK" },
  { value: "HUF", label: "HUF" },
];
export const statusTypeOptions: { value: PaymentStatusType; label: string }[] =
  [
    { value: "ALL_STATES", label: "All States" },
    { value: "CANCELED", label: "Canceled" },
    { value: "SUCCESS", label: "Success" },
    { value: "PENDING", label: "Pending" },
  ];

export const selectorStyles = {
  control: (provided: any, state: any) => ({
    ...provided,
    borderColor: state.isFocused ? "#60a5fa" : "#60a5fa",
    borderRadius: "0.375rem",
    minHeight: "30px",
    height: "30px",
    width: "150px",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#9CA3AF",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "#374151",
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    padding: "0",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    whiteSpace: "nowrap", // does not wrap onto a new line
    padding: "10px 12px",
    backgroundColor: state.isSelected ? "#60a5fa" : provided.backgroundColor,
    color: state.isSelected ? "#ffffff" : "#000000",
    textAlign: "left",
    ":hover": {
      backgroundColor: "#BFDBFE",
    },
  }),
};
