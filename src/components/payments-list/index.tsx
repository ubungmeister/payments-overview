import { useState } from "react";
import { PaymentInformation } from "@/app/(core)/payments-overview/types";
import { Payment } from "@/components/payment";

type ListOfPaymnetsProps = {
  payments: Array<PaymentInformation>;
};

type SortDirectionType = "asc" | "desc" | null;

export const ListOfPaymnets = ({ payments }: ListOfPaymnetsProps) => {
  const [dateSortDirection, setDateSortDirection] =
    useState<SortDirectionType>(null);
  const [amountSortDirection, setAmountSortDirection] =
    useState<SortDirectionType>(null);

  const handleDateSort = () => {
    setDateSortDirection(dateSortDirection === "asc" ? "desc" : "asc");
  };

  const handleAmountSort = () => {
    setAmountSortDirection(amountSortDirection === "asc" ? "desc" : "asc");
  };

  const sortPayments = () => {
    let sortedPayments = [...payments];

    // Sort by Date
    if (dateSortDirection) {
      if (dateSortDirection === "asc") {
        sortedPayments.sort((a, b) => a.timestamp - b.timestamp);
      } else {
        sortedPayments.sort((a, b) => b.timestamp - a.timestamp);
      }
    }

    // Sort by Amount
    if (amountSortDirection) {
      if (amountSortDirection === "asc") {
        sortedPayments.sort((a, b) => a.amount - b.amount);
      } else {
        sortedPayments.sort((a, b) => b.amount - a.amount);
      }
    }

    return sortedPayments;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="td-container ">Payment ID</th>
            <th className="td-container  cursor-pointer">
              <div className="flex flex-row space-x-1">
                <p onClick={handleDateSort}>
                  Date{" "}
                  {dateSortDirection === null
                    ? "↕️"
                    : dateSortDirection === "asc"
                    ? "⬆️"
                    : "⬇️"}{" "}
                </p>
                <p onClick={() => setDateSortDirection(null)}>
                  {dateSortDirection && "✕"}
                </p>
              </div>
            </th>
            <th className="td-container  cursor-pointer ">
              <div className="flex flex-row space-x-1 ">
                <p onClick={handleAmountSort}>
                  Amount{" "}
                  {amountSortDirection === null
                    ? "↕️"
                    : amountSortDirection === "asc"
                    ? "⬆️"
                    : "⬇️"}{" "}
                </p>
                <p onClick={() => setAmountSortDirection(null)}>
                  {amountSortDirection && "✕"}
                </p>
              </div>
            </th>
            <th className="td-container ">Currency</th>
            <th className="td-container ">Payment Type</th>
            <th className="td-container ">Status</th>
            <th className="td-container ">Extra Info</th>
          </tr>
        </thead>
        <tbody>
          {sortPayments().map((payment: PaymentInformation) => (
            <Payment
              key={payment.paymentId}
              paymentId={payment.paymentId}
              timestamp={payment.timestamp}
              amount={payment.amount}
              currency={payment.currency}
              status={payment.status}
              paymentType={payment.paymentType}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
