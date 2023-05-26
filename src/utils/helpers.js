/**
 * @param {Array} apiData
 */
export const formatAPIDates = (dates) =>
  !!dates && dates.map((date) => ({ label: date, value: date }));
