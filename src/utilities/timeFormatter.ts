export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  const formattedDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  const hours = date.getHours() + ":" + date.getMinutes();
  return { formattedDate, hours };
};

// Normalize timestamp to day
export const normalizeToDay = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return Math.floor(date.setHours(0, 0, 0, 0) / 1000);
};
