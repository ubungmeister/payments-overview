export const fetchPayments = async () => {

    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/akcentacz/fe-interview-payments/refs/heads/main/data/payments/index.json"
      );
  
      if (!response.ok) {
        throw new Error(`Failed to fetch payments: ${response.statusText}`);
      }
      const data = await response.json();  
      return data;  
    } catch (error) {
      console.error("Error fetching payments:", error);
      throw error;
    }
  };

 export  const fetchPaymentDetails = async (paymentId: string) => {
    const response = await fetch(
      `https://raw.githubusercontent.com/akcentacz/fe-interview-payments/refs/heads/main/data/payments/details/${paymentId}.json`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch details for payment ID: ${paymentId}`);
    }
    return response.json();
  };