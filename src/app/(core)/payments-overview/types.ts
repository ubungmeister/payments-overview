export type PaymentType =
  | "BANK_TRANSFER"
  | "APPLE_PAY"
  | "GOOGLE_PAY"
  | "CARD_ONLINE"
  | "All_TYPES";
export type CurrencyType = "USD" | "EUR" | "CZK" | "HUF" | "ALL_CURRENCIES";
export type PaymentStatusType =
  | "CANCELED"
  | "SUCCESS"
  | "PENDING"
  | "ALL_STATES";

export type PaymentInformation = {
  paymentId: string;
  timestamp: number;
  amount: number;
  currency: CurrencyType;
  paymentType: PaymentType;
  status: PaymentStatusType;
};

export type AdditionalPaymentInformation = {
  paymentId: string;
  recipient: string;
  note: string;
};

export type PaymentTypeOption = { value: PaymentType; label: string };
export type PaymentStatusOption = { value: PaymentStatusType; label: string };
export type CurrencyOption = { value: CurrencyType; label: string };

export type FilterType = {
  startDate: number | null;
  endDate: number | null;
  minAmount: number | null;
  maxAmount: number | null;
  paymentType: PaymentTypeOption | null;
  status: PaymentStatusOption | null;
  currency: CurrencyOption | null;
};
