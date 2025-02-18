export const formatDateTime = (isoString) => {
  const dateObj = new Date(isoString);

  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Los meses van de 0 a 11
  const year = dateObj.getFullYear();

  const hours = String(dateObj.getHours()).padStart(2, "0");
  const minutes = String(dateObj.getMinutes()).padStart(2, "0");

  const formattedDate = `${day}-${month}-${year}`;
  const formattedTime = `${hours}:${minutes}`;

  return { date: formattedDate, time: formattedTime };
};

export const formatDateEvents = (date, time) => {
  const dateObj = new Date(date);
  const [hours, minutes] = time.split(":");
  dateObj.setHours(hours, minutes, 0);
  return dateObj.toISOString().split(".")[0];
};
