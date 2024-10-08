"use client";
import { PaymentInformation, FilterType } from "./types";
import { useQuery } from "@tanstack/react-query";
import { fetchPayments } from "@/utilities/useQueries";
import { PaymentsFilter } from "@/components/payments-filter";
import { useState } from "react";
import { ListOfPaymnets } from "@/components/payments-list";
import { normalizeToDay } from "@/utilities/timeFormatter";

export default function Page() {
  const [filter, setFilter] = useState<FilterType>({
    startDate: null,
    endDate: null,
    minAmount: null,
    maxAmount: null,
    paymentType: { value: "All_TYPES", label: "All Types" },
    status: { value: "ALL_STATES", label: "All States" },
    currency: { value: "ALL_CURRENCIES", label: "All Currencies" },
  });

  const {
    data: payments,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments"],
    queryFn: fetchPayments,
  });


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching payments</div>;
  }

  const filteredPayments = payments.filter((payment: PaymentInformation) => {
    const paymentTimestamp = normalizeToDay(payment.timestamp);

    // Date Filtering
    if (
      filter.startDate !== null &&
      paymentTimestamp < normalizeToDay(filter.startDate)
    ) {
      return false;
    }
    if (
      filter.endDate !== null &&
      paymentTimestamp > normalizeToDay(filter.endDate)
    ) {
      return false;
    }

    // Amount Filtering
    if (filter.minAmount !== null && payment.amount < filter.minAmount) {
      return false;
    }
    if (filter.maxAmount !== null && payment.amount > filter.maxAmount) {
      return false;
    }
    // Payment Type Filtering
    // if All Types is selected, no need to filter or if no type is selected
    if (
      filter.paymentType?.value !== "All_TYPES" &&
      filter.paymentType?.value !== payment.paymentType
    ) {
      return false;
    }
    // Payment Status Filtering
    if (
      filter.status?.value !== "ALL_STATES" &&
      filter.status?.value !== payment.status
    ) {
      return false;
    }
    // Currency Filtering
    if (
      filter.currency?.value !== "ALL_CURRENCIES" &&
      filter.currency?.value !== payment.currency
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="page-layout ">
      <PaymentsFilter filter={filter} setFilter={setFilter} />
      <ListOfPaymnets payments={filteredPayments} />
    </div>
  );
}
