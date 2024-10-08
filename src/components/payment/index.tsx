import { useState } from "react";
import { formatTimestamp } from "@/utilities/timeFormatter";
import { PaymentInformation } from "@/app/(core)/payments-overview/types";
import { useQuery } from "@tanstack/react-query";
import { fetchPaymentDetails } from "@/utilities/useQueries";

export const Payment = ({
  paymentId,
  timestamp,
  amount,
  currency,
  paymentType,
  status,
}: PaymentInformation) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    data: paymentDetails,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["paymentDetails", paymentId],
    queryFn: () => fetchPaymentDetails(paymentId),
    enabled: isExpanded,
    staleTime: Infinity,
  });

  const date = formatTimestamp(timestamp).formattedDate;
  const time = formatTimestamp(timestamp).hours;

  const statusLabel =
    status === "CANCELED"
      ? "Cancelled"
      : status === "SUCCESS"
      ? "Success"
      : status === "PENDING"
      ? "Pending"
      : "All States";

  const paymentLabel =
    paymentType === "BANK_TRANSFER"
      ? "Bank Transfer"
      : paymentType === "APPLE_PAY"
      ? "Apple Pay"
      : paymentType === "GOOGLE_PAY"
      ? "Google Pay"
      : paymentType === "CARD_ONLINE"
      ? "Card Online"
      : "All Types";

  return (
    <>
      <tr className="border-b">
        <td className="td-container">{paymentId}</td>
        <td className="td-container ">{date}</td>
        <td className="td-container ">
          {amount} {currency}
        </td>
        <td className="td-container ">{currency}</td>
        <td className="td-container ">{paymentLabel}</td>
        <td className="td-container ">{statusLabel}</td>

        <td className="td-container ">
          <button
            className="text-blue-500 underline"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Hide" : "View"}
          </button>
        </td>
      </tr>

      {isExpanded && (
        <tr>
          <td colSpan={8} className="td-container bg-gray-50">
            {isLoading && <div>Loading...</div>}
            {isError && (
              <div>Error fetching payment details: {error?.message}</div>
            )}
            {paymentDetails && (
              <>
                <div>
                  <strong>Recipient:</strong> {paymentDetails.recipient}
                </div>
                <div className="flex flex-row space-x-1">
                  <strong>Exact Time:</strong> <div>{`${date}, ${time}`}</div>
                </div>
                <div className="flex flex-row space-x-1">
                  <strong>Note:</strong>
                  <div
                    dangerouslySetInnerHTML={{ __html: paymentDetails.note }}
                  />
                </div>
              </>
            )}
          </td>
        </tr>
      )}
    </>
  );
};
