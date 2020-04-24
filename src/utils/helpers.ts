export const getFullFormattedDate = (date: string): string => {
  const formattedDate = new Date(date)

  const year = formattedDate.getFullYear();

  let month = (1 + formattedDate.getMonth()).toString();

  month = month.length > 1 ? month : `0${month}`;

  let day = formattedDate.getDate().toString();

  day = day.length > 1 ? day : `0${day}`;

  return `${day}-${month}-${year}`;
}

export const getFormattedDateWithoutDays = (date: string): string => {
  const formattedDate = new Date(date)

  const year = formattedDate.getFullYear();

  let month = (1 + formattedDate.getMonth()).toString();


  month = month.length > 1 ? month : `0${month}`;

  return `${month}-${year}`;
}